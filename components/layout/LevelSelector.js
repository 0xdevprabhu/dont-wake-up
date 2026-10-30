'use client';

import React from 'react';
import { ALL_LEVELS } from '../../data/levels';
import { isLevelUnlocked, getLevelRecord } from '../../lib/progressManager';
import { playClickSound } from '../../lib/audioManager';

/**
 * LevelSelector - Mobile grid of all 20 levels
 * Shows completed stars, unlocked vs locked state.
 */
export default function LevelSelector({
  onSelectLevel,
  onBack,
  totalStars = 0
}) {
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

        <div className="flex flex-col items-center">
          <h2 className="text-sm font-black text-stone-800 tracking-tight uppercase">
            SELECT LEVEL
          </h2>
          <span className="text-[10px] font-bold text-amber-700">
            20 Missions Available
          </span>
        </div>

        {/* Total Stars Pill */}
        <div className="flex items-center gap-1 bg-white px-2.5 py-1 rounded-full shadow-xs border border-amber-200">
          <span className="text-amber-500 text-xs">★</span>
          <span className="text-[11px] font-black text-stone-800">{totalStars} / 60</span>
        </div>
      </div>

      {/* 20 Levels Grid (4 columns x 5 rows) */}
      <div className="flex-1 overflow-y-auto py-3 px-1 grid grid-cols-4 gap-2.5 my-1 custom-scrollbar">
        {ALL_LEVELS.map((level) => {
          const unlocked = isLevelUnlocked(level.id);
          const record = getLevelRecord(level.id);
          const isDone = record.completed;
          const starsEarned = record.stars || 0;

          return (
            <button
              key={level.id}
              disabled={!unlocked}
              onClick={() => {
                if (unlocked) {
                  playClickSound();
                  onSelectLevel(level.id);
                }
              }}
              className={`relative flex flex-col items-center justify-between p-2 rounded-2xl transition-all aspect-square ${
                unlocked
                  ? isDone
                    ? 'bg-gradient-to-b from-white to-amber-50 border-2 border-amber-300 shadow-sm active:scale-95'
                    : 'bg-white border-2 border-emerald-400 shadow-md ring-2 ring-emerald-200 active:scale-95 animate-pulse-soft'
                  : 'bg-stone-100/70 border border-stone-200 opacity-50 cursor-not-allowed'
              }`}
            >
              {/* Level Number */}
              <div className="text-sm font-black text-stone-800 mt-0.5">
                {level.id < 10 ? `0${level.id}` : level.id}
              </div>

              {/* Status Graphic / Stars */}
              {unlocked ? (
                isDone ? (
                  /* 3-Star Display */
                  <div className="flex gap-0.5 text-xs text-amber-400 font-bold mb-0.5">
                    <span className={starsEarned >= 1 ? 'opacity-100' : 'opacity-20'}>★</span>
                    <span className={starsEarned >= 2 ? 'opacity-100' : 'opacity-20'}>★</span>
                    <span className={starsEarned >= 3 ? 'opacity-100' : 'opacity-20'}>★</span>
                  </div>
                ) : (
                  /* Play indicator for current unlocked level */
                  <span className="text-[10px] font-black uppercase text-emerald-600 bg-emerald-100 px-1.5 py-0.5 rounded-full mb-0.5">
                    PLAY
                  </span>
                )
              ) : (
                /* Padlock Icon */
                <span className="text-sm text-stone-400 mb-1">🔒</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Bottom Hint Footer */}
      <div className="w-full text-center py-1">
        <p className="text-[11px] font-bold text-stone-500">
          Complete each mission to unlock the next room!
        </p>
      </div>
    </div>
  );
}

