'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import RoomEnvironment from './RoomEnvironment';
import MrSnoozy from '../character/MrSnoozy';
import InteractiveObject from './InteractiveObject';
import NoiseMeter from './NoiseMeter';
import ObjectiveList from './ObjectiveList';
import GameHUD from './GameHUD';
import LevelCompleteModal from './LevelCompleteModal';
import LevelFailedModal from './LevelFailedModal';
import EndingModal from './EndingModal';
import PauseModal from './PauseModal';
import HintModal from './HintModal';

import { getLevelById, getNextLevelId, getTotalLevelsCount } from '../../data/levels';
import { saveLevelProgress, getSettings, saveSettings } from '../../lib/progressManager';
import { calculateScoreAndStars } from '../../lib/scoring';
import {
  playClickSound,
  playPickupSound,
  playPlaceSound,
  playSmallNoiseSound,
  playLoudNoiseSound,
  playSuspiciousSound,
  startBackgroundMusic,
  stopBackgroundMusic,
  triggerVibration
} from '../../lib/audioManager';

/**
 * GameBoard - Reusable gameplay engine for all 20 levels.
 */
export default function GameBoard({
  levelId = 1,
  onNavigateHome,
  onNavigateLevels,
  onNavigateLevel
}) {
  const level = getLevelById(levelId);

  // Gameplay State
  const [noise, setNoise] = useState(0);
  const [peakNoise, setPeakNoise] = useState(0);
  const [objectives, setObjectives] = useState([]);
  const [carriedItem, setCarriedItem] = useState(null);
  const [completedObjectIds, setCompletedObjectIds] = useState(new Set());
  const [puzzleStep, setPuzzleStep] = useState(1); // for path selection puzzles

  // Game Lifecycle States
  const [isCompleted, setIsCompleted] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [isGrandFinaleModal, setIsGrandFinaleModal] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Scoring & Stats
  const [scoreData, setScoreData] = useState(null);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [activeHintText, setActiveHintText] = useState(null);
  const [highlightedObjectId, setHighlightedObjectId] = useState(null);

  // Settings
  const [settings, setLocalSettings] = useState({ sound: true, music: true, vibration: true });

  // Floating feedback popups (e.g. "+15 Noise", "Key Acquired!")
  const [feedbacks, setFeedbacks] = useState([]);

  // Initialize level
  const resetLevel = useCallback(() => {
    setNoise(0);
    setPeakNoise(0);
    setCarriedItem(null);
    setCompletedObjectIds(new Set());
    setPuzzleStep(1);
    setIsCompleted(false);
    setIsFailed(false);
    setIsGrandFinaleModal(false);
    setIsPaused(false);
    setScoreData(null);
    setElapsedSeconds(0);
    setActiveHintText(null);
    setHighlightedObjectId(null);
    setFeedbacks([]);

    // Clone fresh objectives from level data
    if (level && level.objectives) {
      setObjectives(level.objectives.map((o) => ({ ...o, completed: false })));
    }
  }, [level]);

  useEffect(() => {
    resetLevel();
    const currentSettings = getSettings();
    setLocalSettings(currentSettings);
    if (currentSettings.music) {
      startBackgroundMusic();
    }
    return () => {
      stopBackgroundMusic();
    };
  }, [levelId, resetLevel]);

  // Game Timer
  useEffect(() => {
    if (isCompleted || isFailed || isPaused) return;
    const timer = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [isCompleted, isFailed, isPaused]);

  // Noise Decay Loop (slow recovery when waiting quietly)
  useEffect(() => {
    if (isCompleted || isFailed || isPaused) return;
    const decayRate = level.noiseDecayRate || 2;
    const decayTimer = setInterval(() => {
      setNoise((prev) => Math.max(0, prev - decayRate));
    }, 1400);
    return () => clearInterval(decayTimer);
  }, [level.noiseDecayRate, isCompleted, isFailed, isPaused]);

  // Helper to spawn a visual toast feedback on screen
  const addFeedback = (text, type = 'info', x = 50, y = 50) => {
    const id = Date.now() + Math.random();
    setFeedbacks((prev) => [...prev, { id, text, type, x, y }]);
    setTimeout(() => {
      setFeedbacks((prev) => prev.filter((f) => f.id !== id));
    }, 1200);
  };

  // Check victory condition
  const checkVictory = useCallback(
    (currentObjectives, finalNoise) => {
      const allDone = currentObjectives.every((o) => o.completed);
      if (allDone && !isCompleted && !isFailed) {
        setIsCompleted(true);
        const result = calculateScoreAndStars({
          peakNoise,
          finalNoise,
          elapsedSeconds,
          hintsUsed
        });
        setScoreData(result);
        saveLevelProgress(level.id, result.stars, result.score);

        // If level 20, we can also trigger grand finale modal
        if (level.isGrandFinale || level.id === 20) {
          setTimeout(() => {
            setIsGrandFinaleModal(true);
          }, 1200);
        }
      }
    },
    [isCompleted, isFailed, peakNoise, elapsedSeconds, hintsUsed, level]
  );

  // Object Interaction Handler
  const handleObjectInteract = (object) => {
    if (isCompleted || isFailed || isPaused) return;

    // Check prerequisites
    if (object.requiresObjective) {
      const reqObj = objectives.find((o) => o.id === object.requiresObjective);
      if (reqObj && !reqObj.completed) {
        playSmallNoiseSound();
        addFeedback(`Finish: "${reqObj.text}" first!`, 'warn', object.x, object.y);
        triggerVibration([40]);
        return;
      }
    }

    if (object.requiredItem && carriedItem !== object.requiredItem) {
      playSmallNoiseSound();
      addFeedback(`Needs: ${object.requiredItem.replace('_', ' ')}`, 'warn', object.x, object.y);
      triggerVibration([40]);
      return;
    }

    if (object.type === 'puzzle_step' && object.stepOrder !== puzzleStep) {
      playLoudNoiseSound();
      const newNoise = Math.min(100, noise + 25);
      setNoise(newNoise);
      setPeakNoise((prev) => Math.max(prev, newNoise));
      addFeedback('Wrong step! Creak!', 'danger', object.x, object.y);
      if (newNoise >= 100) {
        setIsFailed(true);
      }
      return;
    }

    // Process Valid Interaction
    const addedNoise = object.noise || 0;
    const nextNoise = Math.min(100, noise + addedNoise);
    setNoise(nextNoise);
    setPeakNoise((prev) => Math.max(prev, nextNoise));

    // Play appropriate sound & vibration
    if (object.type === 'danger') {
      playLoudNoiseSound();
      addFeedback(`+${addedNoise} NOISE! LOUD!`, 'danger', object.x, object.y);
      triggerVibration([80, 40, 80]);
    } else if (object.type === 'pickup') {
      playPickupSound();
      addFeedback(`Picked up: ${object.name}`, 'info', object.x, object.y);
    } else if (object.sound === 'place') {
      playPlaceSound();
      addFeedback(`Placed softly!`, 'info', object.x, object.y);
    } else {
      playClickSound();
      if (addedNoise > 0) {
        addFeedback(`+${addedNoise} Noise`, 'noise', object.x, object.y);
      }
    }

    // Give item
    if (object.givesItem) {
      setCarriedItem(object.givesItem);
    }

    // Consume item
    if (object.requiredItem && carriedItem === object.requiredItem) {
      setCarriedItem(null);
    }

    // Advance puzzle step if applicable
    if (object.type === 'puzzle_step') {
      setPuzzleStep((prev) => prev + 1);
    }

    // Mark object as completed
    setCompletedObjectIds((prev) => new Set(prev).add(object.id));

    // Complete linked objective
    let updatedObjectives = objectives;
    if (object.completesObjective) {
      updatedObjectives = objectives.map((o) =>
        o.id === object.completesObjective ? { ...o, completed: true } : o
      );
      setObjectives(updatedObjectives);
    }

    // Clear hint highlight once tapped
    if (highlightedObjectId === object.id) {
      setHighlightedObjectId(null);
      setActiveHintText(null);
    }

    // Check if character woke up
    if (nextNoise >= 100) {
      setIsFailed(true);
    } else if (nextNoise >= 75) {
      playSuspiciousSound();
    } else {
      // Check victory
      checkVictory(updatedObjectives, nextNoise);
    }
  };

  // Hint trigger
  const handleShowHint = () => {
    playClickSound();
    setHintsUsed((prev) => prev + 1);

    // Find first incomplete objective
    const nextObj = objectives.find((o) => !o.completed);
    let hintText = "Look around carefully and tap without making noise!";
    let targetObjectId = null;

    if (nextObj) {
      const linkedObj = level.objects.find((o) => o.completesObjective === nextObj.id);
      if (linkedObj) {
        targetObjectId = linkedObj.id;
        if (linkedObj.requiredItem && carriedItem !== linkedObj.requiredItem) {
          const itemSource = level.objects.find((o) => o.givesItem === linkedObj.requiredItem);
          if (itemSource) {
            targetObjectId = itemSource.id;
            hintText = `Find the ${linkedObj.requiredItem.replace('_', ' ')} first!`;
          }
        } else {
          hintText = linkedObj.tooltip || `Interact with the ${linkedObj.name}.`;
        }
      }
    }

    // If level has custom written hints
    if (level.hints && level.hints.length > 0) {
      const hintIdx = Math.min(hintsUsed, level.hints.length - 1);
      hintText = level.hints[hintIdx];
    }

    setActiveHintText(hintText);
    if (targetObjectId) {
      setHighlightedObjectId(targetObjectId);
    }
  };

  // Settings toggles
  const handleToggleSound = () => {
    const updated = saveSettings({ sound: !settings.sound });
    setLocalSettings(updated);
  };

  const handleToggleMusic = () => {
    const updated = saveSettings({ music: !settings.music });
    setLocalSettings(updated);
    if (updated.music) {
      startBackgroundMusic();
    } else {
      stopBackgroundMusic();
    }
  };

  const handleToggleVibration = () => {
    const updated = saveSettings({ vibration: !settings.vibration });
    setLocalSettings(updated);
  };

  const nextLevelId = getNextLevelId(level.id);

  return (
    <div className="relative w-full max-w-md h-full min-h-[580px] max-h-[820px] mx-auto flex flex-col justify-between p-2 sm:p-3 overflow-hidden rounded-3xl shadow-xl border-4 border-amber-200/60 bg-[#FFFDF7] select-none touch-manipulation">
      
      {/* 1. TOP: HUD Bar */}
      <div className="z-20 w-full mb-1">
        <GameHUD
          levelId={level.id}
          levelTitle={level.title}
          onBack={onNavigateLevels}
          onPause={() => setIsPaused(true)}
          soundEnabled={settings.sound}
          onToggleSound={handleToggleSound}
        />
      </div>

      {/* 2. MIDDLE: Interactive Room Scene */}
      <div className="relative z-10 w-full flex-1 rounded-2xl overflow-hidden shadow-inner border border-stone-200/80 my-1 bg-amber-50 min-h-[290px]">
        {/* Cartoon Room Background */}
        <RoomEnvironment environment={level.environment} />

        {/* Floating Feedback Toasts */}
        {feedbacks.map((fb) => (
          <div
            key={fb.id}
            className={`absolute z-40 px-2.5 py-1 rounded-full text-xs font-black shadow-md animate-float-up pointer-events-none transform -translate-x-1/2 -translate-y-1/2 ${
              fb.type === 'danger'
                ? 'bg-red-600 text-white'
                : fb.type === 'warn'
                ? 'bg-amber-500 text-stone-900'
                : fb.type === 'noise'
                ? 'bg-orange-500 text-white'
                : 'bg-emerald-600 text-white'
            }`}
            style={{ left: `${fb.x}%`, top: `${fb.y}%` }}
          >
            {fb.text}
          </div>
        ))}

        {/* Sleeping Mr. Snoozy Hero in Room */}
        <div className="absolute left-1/2 bottom-8 -translate-x-1/2 z-15 pointer-events-none">
          <MrSnoozy noise={noise} isAwake={isFailed} isWon={isCompleted} size="normal" />
        </div>

        {/* Interactive Room Objects */}
        {level.objects.map((obj) => (
          <InteractiveObject
            key={obj.id}
            object={obj}
            isHighlighted={highlightedObjectId === obj.id}
            isCompleted={completedObjectIds.has(obj.id)}
            onInteract={handleObjectInteract}
          />
        ))}
      </div>

      {/* 3. BOTTOM: Noise Meter & Objectives */}
      <div className="z-20 w-full flex flex-col gap-1.5 mt-1">
        <NoiseMeter noise={noise} max={level.noiseLimit || 100} />
        <ObjectiveList
          objectives={objectives}
          carriedItem={carriedItem}
          onHintClick={handleShowHint}
        />
      </div>

      {/* Modals & Overlays */}
      {isCompleted && !isGrandFinaleModal && (
        <LevelCompleteModal
          levelId={level.id}
          scoreData={scoreData}
          onNextLevel={() => (nextLevelId ? onNavigateLevel(nextLevelId) : setIsGrandFinaleModal(true))}
          onReplay={resetLevel}
          onHome={onNavigateLevels}
          hasNextLevel={Boolean(nextLevelId)}
          isGrandFinale={level.id === 20}
        />
      )}

      {isFailed && (
        <LevelFailedModal
          onRetry={resetLevel}
          onHome={onNavigateLevels}
        />
      )}

      {isGrandFinaleModal && (
        <EndingModal
          totalStars={scoreData ? 60 : 58}
          highScore={scoreData ? 19200 : 18500}
          onPlayAgain={() => onNavigateLevel(1)}
          onHome={onNavigateLevels}
        />
      )}

      {isPaused && (
        <PauseModal
          onResume={() => setIsPaused(false)}
          onRestart={resetLevel}
          onHome={onNavigateLevels}
          soundEnabled={settings.sound}
          musicEnabled={settings.music}
          vibrationEnabled={settings.vibration}
          onToggleSound={handleToggleSound}
          onToggleMusic={handleToggleMusic}
          onToggleVibration={handleToggleVibration}
        />
      )}

      {activeHintText && (
        <HintModal
          hintText={activeHintText}
          onClose={() => setActiveHintText(null)}
        />
      )}
    </div>
  );
}
