'use client';

import React, { useEffect } from 'react';
import MrSnoozy from '../character/MrSnoozy';
import { playWinSound } from '../../lib/audioManager';

/**
 * EndingModal - Grand victory screen displayed upon completing Level 20.
 */
export default function EndingModal({
  totalStars = 60,
  highScore = 18500,
  onPlayAgain,
  onHome
}) {
  useEffect(() => {
    playWinSound();
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-sm bg-gradient-to-b from-[#FFFBEA] via-[#FFF8E1] to-[#FFE082] rounded-3xl p-6 shadow-2xl border-4 border-amber-400 flex flex-col items-center text-center animate-pop-in relative overflow-hidden">
        
        {/* Decorative Confetti Background Badges */}
        <div className="absolute top-2 left-3 text-2xl animate-spin-slow">🎉</div>
        <div className="absolute top-3 right-4 text-2xl animate-bounce">👑</div>
        <div className="absolute bottom-4 left-4 text-2xl animate-pulse">⭐</div>
        <div className="absolute bottom-4 right-4 text-2xl animate-spin-slow">🎊</div>

        {/* Master Ribbon */}
        <div className="-mt-10 mb-3 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-stone-900 font-black text-sm uppercase tracking-widest py-1.5 px-6 rounded-full shadow-lg border-2 border-white">
          🏆 GRAND CHAMPION!
        </div>

        {/* Cute Sleeping Character */}
        <div className="my-1 scale-90">
          <MrSnoozy noise={0} isWon={true} />
        </div>

        {/* Big Congratulations Message */}
        <h2 className="text-2xl font-black text-stone-900 tracking-tight leading-tight mt-1">
          YOU DID IT!
        </h2>
        <h3 className="text-sm font-black text-amber-700 tracking-wide uppercase">
          20 LEVELS COMPLETED!
        </h3>
        <p className="text-xs text-stone-700 mt-1 max-w-[240px]">
          You have mastered stealth, outsmarted noisy toys, squeaky floors, and left Mr. Snoozy sleeping peacefully!
        </p>

        {/* Statistics Card */}
        <div className="w-full bg-white/90 rounded-2xl p-3.5 my-4 border border-amber-200 grid grid-cols-3 gap-2">
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold text-stone-400 uppercase">Total Stars</span>
            <span className="text-lg font-black text-amber-500 flex items-center gap-0.5">
              ★ {totalStars}
            </span>
          </div>

          <div className="flex flex-col items-center border-x border-stone-200">
            <span className="text-[10px] font-bold text-stone-400 uppercase">Cleared</span>
            <span className="text-lg font-black text-emerald-600">
              100%
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold text-stone-400 uppercase">Score</span>
            <span className="text-lg font-black text-stone-800">
              {highScore}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full flex flex-col gap-2">
          <button
            onClick={onPlayAgain}
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 active:scale-98 text-white font-black text-sm uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
          >
            <span>🔄 Play Again from Level 1</span>
          </button>
          <button
            onClick={onHome}
            className="w-full py-2.5 rounded-2xl bg-white/80 hover:bg-white active:scale-98 text-stone-700 font-bold text-xs uppercase tracking-wider transition-all border border-amber-200"
          >
            🏠 Back to Level Menu
          </button>
        </div>
      </div>
    </div>
  );
}
