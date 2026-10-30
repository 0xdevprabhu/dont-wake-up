'use client';

import React, { useState, useEffect } from 'react';
import { getSettings, saveSettings, resetAllProgress } from '../../lib/progressManager';
import {
  playClickSound,
  startBackgroundMusic,
  stopBackgroundMusic,
  triggerVibration
} from '../../lib/audioManager';

/**
 * SettingsScreen - Audio, Haptics, Tutorial, and Progress Management
 */
export default function SettingsScreen({ onBack, onResetSuccess }) {
  const [settings, setLocalSettings] = useState({
    sound: true,
    music: true,
    vibration: true
  });
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  useEffect(() => {
    setLocalSettings(getSettings());
  }, []);

  const toggleSound = () => {
    const updated = saveSettings({ sound: !settings.sound });
    setLocalSettings(updated);
    playClickSound();
  };

  const toggleMusic = () => {
    const updated = saveSettings({ music: !settings.music });
    setLocalSettings(updated);
    playClickSound();
    if (updated.music) {
      startBackgroundMusic();
    } else {
      stopBackgroundMusic();
    }
  };

  const toggleVibration = () => {
    const updated = saveSettings({ vibration: !settings.vibration });
    setLocalSettings(updated);
    playClickSound();
    if (updated.vibration) {
      triggerVibration([50]);
    }
  };

  const handleConfirmReset = () => {
    resetAllProgress();
    setShowResetConfirm(false);
    playClickSound();
    if (onResetSuccess) onResetSuccess();
  };

  return (
    <div className="relative w-full max-w-md h-full min-h-[580px] max-h-[820px] mx-auto flex flex-col justify-between p-4 overflow-hidden rounded-3xl shadow-xl border-4 border-amber-200/80 bg-gradient-to-b from-[#FFFDF9] via-[#FFF9EE] to-[#FFEECB] select-none">
      
      {/* Top Header */}
      <div className="w-full flex items-center justify-between pb-2 border-b border-amber-200/60">
        <button
          onClick={() => {
            playClickSound();
            onBack();
          }}
          className="w-9 h-9 rounded-xl bg-white hover:bg-stone-50 active:scale-95 shadow-xs border border-amber-200 flex items-center justify-center text-stone-700 font-bold transition-all"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <h2 className="text-sm font-black text-stone-800 tracking-tight uppercase">
          SETTINGS &amp; GUIDE
        </h2>

        <div className="w-9" />
      </div>

      {/* Main Settings Scrollable Body */}
      <div className="flex-1 overflow-y-auto py-3 px-1 flex flex-col gap-3 custom-scrollbar">
        
        {/* 1. Audio & Haptics Preferences */}
        <div className="bg-white rounded-2xl p-3.5 shadow-sm border border-amber-100 flex flex-col gap-2.5">
          <h3 className="text-xs font-black uppercase tracking-wider text-amber-900 mb-0.5">
            AUDIO &amp; CONTROLS
          </h3>

          {/* Sound FX Toggle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg">🔊</span>
              <span className="text-xs font-bold text-stone-700">Sound Effects</span>
            </div>
            <button
              onClick={toggleSound}
              className={`w-12 h-6 rounded-full transition-colors relative p-0.5 ${
                settings.sound ? 'bg-emerald-500' : 'bg-stone-300'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
                  settings.sound ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Music Toggle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg">🎵</span>
              <span className="text-xs font-bold text-stone-700">Lullaby Music</span>
            </div>
            <button
              onClick={toggleMusic}
              className={`w-12 h-6 rounded-full transition-colors relative p-0.5 ${
                settings.music ? 'bg-emerald-500' : 'bg-stone-300'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
                  settings.music ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Vibration Toggle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg">📳</span>
              <span className="text-xs font-bold text-stone-700">Vibration Feedback</span>
            </div>
            <button
              onClick={toggleVibration}
              className={`w-12 h-6 rounded-full transition-colors relative p-0.5 ${
                settings.vibration ? 'bg-emerald-500' : 'bg-stone-300'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
                  settings.vibration ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>

        {/* 2. How to Play Instructions */}
        <div className="bg-white rounded-2xl p-3.5 shadow-sm border border-amber-100 flex flex-col gap-2">
          <h3 className="text-xs font-black uppercase tracking-wider text-amber-900 mb-0.5">
            HOW TO PLAY
          </h3>
          <div className="text-[11px] text-stone-600 space-y-1.5 font-medium leading-relaxed">
            <p>🤫 <strong>Step Lightly:</strong> Tap objects to complete level objectives one by one.</p>
            <p>📈 <strong>Watch the Noise Meter:</strong> Loud actions raise the meter. If it hits 100%, Mr. Snoozy wakes up!</p>
            <p>⏳ <strong>Wait to Cool Down:</strong> Noise decreases slowly when you take a breather.</p>
            <p>💡 <strong>Hints Available:</strong> Stuck? Tap the Hint button to highlight the next step.</p>
          </div>
        </div>

        {/* 3. About Section */}
        <div className="bg-white rounded-2xl p-3 shadow-sm border border-amber-100 text-[11px] text-stone-500 flex flex-col gap-1">
          <div className="flex justify-between font-bold text-stone-700">
            <span>Don&apos;t Wake Up!</span>
            <span>v1.0.0</span>
          </div>
          <p>Cute 2D casual stealth puzzle game built with Next.js &amp; PWA.</p>
        </div>

        {/* 4. Reset Progress */}
        <button
          onClick={() => {
            playClickSound();
            setShowResetConfirm(true);
          }}
          className="w-full py-2.5 rounded-2xl bg-red-50 hover:bg-red-100 active:scale-98 text-red-700 font-bold text-xs uppercase tracking-wider transition-all border border-red-200"
        >
          🗑️ Reset Game Progress
        </button>
      </div>

      {/* Confirmation Modal */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="w-full max-w-xs bg-white rounded-3xl p-5 shadow-2xl border-2 border-red-300 flex flex-col items-center text-center animate-pop-in">
            <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-2xl mb-2">
              ⚠️
            </div>
            <h4 className="text-sm font-black text-stone-800 uppercase tracking-wider mb-1">
              Reset All Progress?
            </h4>
            <p className="text-xs text-stone-600 mb-4 px-2 font-medium">
              This will lock all completed levels and reset your earned stars to zero. Are you sure?
            </p>
            <div className="flex gap-2 w-full">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="flex-1 py-2.5 rounded-2xl bg-stone-100 hover:bg-stone-200 active:scale-98 text-stone-700 font-bold text-xs uppercase tracking-wider transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmReset}
                className="flex-1 py-2.5 rounded-2xl bg-red-600 hover:bg-red-700 active:scale-98 text-white font-black text-xs uppercase tracking-wider shadow-sm transition-all"
              >
                Yes, Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

