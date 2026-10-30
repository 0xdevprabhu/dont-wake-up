'use client';

import React, { useEffect } from 'react';
import MrSnoozy from '../character/MrSnoozy';
import { playWinSound, playStarSound } from '../../lib/audioManager';

/**
 * LevelCompleteModal - Displays when all level objectives are met.
 * Stars (1-3) animate with sparkling audio chimes.
 */
export default function LevelCompleteModal({
  levelId,
  scoreData,
  onNextLevel,
  onReplay,
  onHome,
  hasNextLevel = true,
  isGrandFinale = false
}) {
  const { stars = 3, score = 950, peakNoise = 12 } = scoreData || {};

  useEffect(() => {
    playWinSound();
    // Play star sounds sequentially
    for (let i = 0; i < stars; i++) {
      setTimeout(() => {
        playStarSound(i);
      }, 400 + i * 250);
    }
  }, [stars]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="w-full max-w-sm bg-gradient-to-b from-[#FFFDF9] to-[#FFF8E7] rounded-3xl p-5 shadow-2xl border-4 border-amber-300 flex flex-col items-center text-center animate-pop-in">
        
        {/* Header Ribbon Banner */}
        <div className="-mt-9 mb-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 text-stone-900 font-black text-sm uppercase tracking-wider py-1.5 px-6 rounded-full shadow-lg border-2 border-white">
          🎉 LEVEL COMPLETED!
        </div>

        {/* Sleeping Mr. Snoozy Hero */}
        <div className="my-1 scale-85">
          <MrSnoozy noise={0} isWon={true} />
        </div>

        {/* 3 Stars Animation */}
        <div className="flex items-center justify-center gap-2 my-2">
          {[1, 2, 3].map((starNum) => {
            const isEarned = starNum <= stars;
            return (
              <div
                key={starNum}
                className={`text-4xl transition-all duration-300 transform ${
                  isEarned
                    ? 'scale-110 drop-shadow-md animate-bounce-slow text-amber-400'
                    : 'scale-90 opacity-30 text-stone-300'
                }`}
                style={{ animationDelay: `${starNum * 180}ms` }}
              >
                ★
              </div>
            );
          })}
        </div>

        {/* Praise Text */}
        <h3 className="text-lg font-black text-stone-800 tracking-tight">
          {stars === 3 ? 'Master of Silence!' : stars === 2 ? 'Sneaky Ninja!' : 'Barely Made It!'}
        </h3>
        <p className="text-xs text-stone-600 mt-0.5">
          Mr. Snoozy is still snoring peacefully in dreamland.
        </p>

        {/* Score & Peak Noise Breakdown */}
        <div className="w-full bg-white/80 rounded-2xl p-3 my-3 border border-amber-200 flex justify-around items-center">
          <div>
            <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">Score</div>
            <div className="text-xl font-black text-amber-600">{score}</div>
          </div>
          <div className="w-px h-8 bg-stone-200" />
          <div>
            <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">Peak Noise</div>
            <div className="text-xl font-black text-stone-700">{peakNoise}%</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full flex flex-col gap-2 mt-1">
          {hasNextLevel ? (
            <button
              onClick={onNextLevel}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 active:scale-98 text-white font-black text-sm uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Next Level</span>
              <span>➔</span>
            </button>
          ) : (
            <button
              onClick={onNextLevel}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 active:scale-98 text-white font-black text-sm uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>🏆 View Grand Ending!</span>
            </button>
          )}

          <div className="flex gap-2 w-full">
            <button
              onClick={onReplay}
              className="flex-1 py-2.5 rounded-2xl bg-stone-100 hover:bg-stone-200 active:scale-98 text-stone-700 font-bold text-xs uppercase tracking-wider transition-all"
            >
              🔄 Replay
            </button>
            <button
              onClick={onHome}
              className="flex-1 py-2.5 rounded-2xl bg-stone-100 hover:bg-stone-200 active:scale-98 text-stone-700 font-bold text-xs uppercase tracking-wider transition-all"
            >
              🏠 Levels
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

