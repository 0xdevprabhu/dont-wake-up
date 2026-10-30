'use client';

import React from 'react';
import MrSnoozy from '../character/MrSnoozy';
import InstallAppButton from './InstallAppButton';
import { playClickSound } from '../../lib/audioManager';

/**
 * HomeScreen - Main mobile landing & game menu
 */
export default function HomeScreen({
  onPlay,
  onOpenLevels,
  onOpenSettings,
  totalStars = 0,
  latestUnlockedLevel = 1,
  soundEnabled = true,
  onToggleSound
}) {
  const handlePlayClick = () => {
    playClickSound();
    onPlay(latestUnlockedLevel);
  };

  const handleLevelsClick = () => {
    playClickSound();
    onOpenLevels();
  };

  const handleSettingsClick = () => {
    playClickSound();
    onOpenSettings();
  };

  return (
    <div className="relative w-full max-w-md h-full min-h-[580px] max-h-[820px] mx-auto flex flex-col justify-between p-4 sm:p-5 overflow-hidden rounded-3xl shadow-xl border-4 border-amber-200/80 bg-gradient-to-b from-[#FFFBEA] via-[#FFF8E7] to-[#FFE0B2] select-none">
      
      {/* Top Header: Sound & Stars */}
      <div className="w-full flex items-center justify-between z-10">
        <button
          onClick={onToggleSound}
          className="w-10 h-10 rounded-2xl bg-white/90 hover:bg-white active:scale-95 shadow-xs border border-amber-200 flex items-center justify-center text-stone-700 text-lg transition-all"
          aria-label="Sound Toggle"
        >
          {soundEnabled ? '🔊' : '🔇'}
        </button>

        {/* Total Stars Pill */}
        <div className="flex items-center gap-1.5 bg-white/90 px-3.5 py-1.5 rounded-full shadow-xs border border-amber-200">
          <span className="text-amber-500 text-base">★</span>
          <span className="text-xs font-black text-stone-800">{totalStars} / 60</span>
        </div>

        <button
          onClick={handleSettingsClick}
          className="w-10 h-10 rounded-2xl bg-white/90 hover:bg-white active:scale-95 shadow-xs border border-amber-200 flex items-center justify-center text-stone-700 text-lg transition-all"
          aria-label="Settings"
        >
          ⚙️
        </button>
      </div>

      {/* Hero Section: Game Logo & Mr. Snoozy */}
      <div className="flex flex-col items-center justify-center my-auto py-2 z-10">
        
        {/* Game Title with Cartoon 3D Bubble Style */}
        <div className="relative flex flex-col items-center mb-1">
          <div className="text-[11px] font-black tracking-widest text-amber-700 uppercase bg-amber-100/90 px-3 py-0.5 rounded-full border border-amber-300 shadow-2xs mb-1 animate-pulse">
            Stealth Puzzle Fun
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-stone-900 tracking-tight drop-shadow-sm flex flex-col items-center text-center leading-none">
            <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              DON&apos;T WAKE
            </span>
            <span className="text-stone-900 text-3xl sm:text-4xl tracking-widest mt-1">
              UP!
            </span>
          </h1>
          <p className="text-xs font-bold text-stone-600 mt-2 text-center max-w-[240px]">
            &ldquo;Complete the tasks. Don&apos;t wake the sleeper!&rdquo;
          </p>
        </div>

        {/* Big Sleeping Hero Character */}
        <div className="my-3 scale-110 drop-shadow-lg">
          <MrSnoozy noise={0} size="large" />
        </div>
      </div>

      {/* Bottom Menu Buttons */}
      <div className="w-full flex flex-col gap-2.5 z-10">
        
        {/* Big Main Play Button */}
        <button
          onClick={handlePlayClick}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 hover:from-emerald-600 hover:to-teal-600 active:scale-98 text-white font-black text-base uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 border-2 border-emerald-300"
        >
          <span className="text-xl">▶</span>
          <span>{latestUnlockedLevel > 1 ? `Continue Level ${latestUnlockedLevel}` : 'Play Game'}</span>
        </button>

        {/* Level Select & Settings Grid */}
        <div className="flex gap-2.5 w-full">
          <button
            onClick={handleLevelsClick}
            className="flex-1 py-3 rounded-2xl bg-white hover:bg-stone-50 active:scale-98 text-stone-800 font-black text-xs uppercase tracking-wider shadow-sm transition-all border-2 border-amber-200 flex items-center justify-center gap-1.5"
          >
            <span>🗺️</span>
            <span>All Levels (20)</span>
          </button>

          <button
            onClick={handleSettingsClick}
            className="flex-1 py-3 rounded-2xl bg-white hover:bg-stone-50 active:scale-98 text-stone-800 font-black text-xs uppercase tracking-wider shadow-sm transition-all border-2 border-amber-200 flex items-center justify-center gap-1.5"
          >
            <span>📖</span>
            <span>How to Play</span>
          </button>
        </div>

        {/* PWA Install Button */}
        <InstallAppButton />
      </div>
    </div>
  );
}
