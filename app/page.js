'use client';

import React, { useState, useEffect } from 'react';
import HomeScreen from '../components/layout/HomeScreen';
import LevelSelector from '../components/layout/LevelSelector';
import SettingsScreen from '../components/layout/SettingsScreen';
import GameBoard from '../components/game/GameBoard';
import { getProgress, getSettings, saveSettings } from '../lib/progressManager';
import { initPWA } from '../lib/pwa';
import { playClickSound, startBackgroundMusic, stopBackgroundMusic } from '../lib/audioManager';

export default function GameMaster() {
  const [screen, setScreen] = useState('home'); // 'home' | 'levels' | 'game' | 'settings'
  const [activeLevelId, setActiveLevelId] = useState(1);
  const [progress, setProgress] = useState({
    unlockedLevels: [1],
    completedLevels: [],
    totalStars: 0
  });
  const [settings, setLocalSettings] = useState({
    sound: true,
    music: true,
    vibration: true
  });

  // Load progress and init PWA on mount
  useEffect(() => {
    initPWA();
    refreshProgress();
    const curSettings = getSettings();
    setLocalSettings(curSettings);

    // Check query params if any
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const lvlParam = params.get('level');
      if (lvlParam) {
        const lvlNum = parseInt(lvlParam, 10);
        if (lvlNum >= 1 && lvlNum <= 20) {
          setActiveLevelId(lvlNum);
          setScreen('game');
        }
      }
    }
  }, []);

  const refreshProgress = () => {
    const curProgress = getProgress();
    setProgress(curProgress);
  };

  // Find latest unlocked level
  const latestUnlocked = Math.max(...(progress.unlockedLevels || [1]), 1);

  // Sound toggle
  const handleToggleSound = () => {
    const updated = saveSettings({ sound: !settings.sound });
    setLocalSettings(updated);
    playClickSound();
  };

  // Navigation handlers
  const handlePlayLevel = (lvlId) => {
    setActiveLevelId(lvlId || latestUnlocked);
    setScreen('game');
  };

  const handleOpenLevels = () => {
    refreshProgress();
    setScreen('levels');
  };

  const handleOpenSettings = () => {
    setScreen('settings');
  };

  const handleBackToHome = () => {
    refreshProgress();
    setScreen('home');
  };

  const handleResetSuccess = () => {
    refreshProgress();
    setScreen('home');
  };

  // Render active screen
  switch (screen) {
    case 'game':
      return (
        <GameBoard
          levelId={activeLevelId}
          onNavigateHome={handleBackToHome}
          onNavigateLevels={handleOpenLevels}
          onNavigateLevel={(nextId) => {
            setActiveLevelId(nextId);
            refreshProgress();
          }}
        />
      );

    case 'levels':
      return (
        <LevelSelector
          totalStars={progress.totalStars || 0}
          onSelectLevel={(id) => handlePlayLevel(id)}
          onBack={handleBackToHome}
        />
      );

    case 'settings':
      return (
        <SettingsScreen
          onBack={handleBackToHome}
          onResetSuccess={handleResetSuccess}
        />
      );

    case 'home':
    default:
      return (
        <HomeScreen
          totalStars={progress.totalStars || 0}
          latestUnlockedLevel={latestUnlocked}
          soundEnabled={settings.sound}
          onToggleSound={handleToggleSound}
          onPlay={handlePlayLevel}
          onOpenLevels={handleOpenLevels}
          onOpenSettings={handleOpenSettings}
        />
      );
  }
}

