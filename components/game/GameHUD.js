'use client';

import React from 'react';

/**
 * GameHUD - Top Navigation Bar
 * Back button, Level title, Pause button, Sound toggle
 */
export default function GameHUD({
  levelId,
  levelTitle,
  onBack,
  onPause,
  soundEnabled,
  onToggleSound
}) {
  return (
    <div className="w-full flex items-center justify-between px-3 py-2 bg-white/90 backdrop-blur-md rounded-2xl shadow-sm border border-amber-100 select-none">
      {/* Back to Level Selector */}
      <button
        onClick={onBack}
        className="w-9 h-9 rounded-xl bg-stone-100 hover:bg-stone-200 active:scale-95 flex items-center justify-center text-stone-700 font-bold transition-all shadow-xs"
        aria-label="Back"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Level Title & Badge */}
      <div className="flex flex-col items-center">
        <span className="text-[10px] font-black uppercase tracking-widest text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
          LEVEL {levelId < 10 ? `0${levelId}` : levelId}
        </span>
        <h2 className="text-xs sm:text-sm font-black text-stone-800 tracking-tight mt-0.5 max-w-[170px] truncate text-center">
          {levelTitle}
        </h2>
      </div>

      {/* Right Controls: Sound & Pause */}
      <div className="flex items-center gap-1.5">
        <button
          onClick={onToggleSound}
          className="w-9 h-9 rounded-xl bg-stone-100 hover:bg-stone-200 active:scale-95 flex items-center justify-center text-stone-700 transition-all text-sm shadow-xs"
          aria-label="Toggle Sound"
        >
          {soundEnabled ? '🔊' : '🔇'}
        </button>

        <button
          onClick={onPause}
          className="w-9 h-9 rounded-xl bg-amber-100 hover:bg-amber-200 active:scale-95 flex items-center justify-center text-amber-900 transition-all font-black text-xs shadow-xs"
          aria-label="Pause"
        >
          ⏸️
        </button>
      </div>
    </div>
  );
}
