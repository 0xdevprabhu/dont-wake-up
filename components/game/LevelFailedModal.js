'use client';

import React, { useEffect, useMemo } from 'react';
import MrSnoozy from '../character/MrSnoozy';
import { playLoseSound, playWakeUpSound } from '../../lib/audioManager';

const FUNNY_MESSAGES = [
  "Oops! Too noisy!",
  "Mr. Snoozy is awake!",
  "That was NOT quiet!",
  "Your stealth mission failed!",
  "CLANG! He jumped out of bed!",
  "So much for sweet dreams!"
];

/**
 * LevelFailedModal - Triggered when noise reaches 100%
 */
export default function LevelFailedModal({
  onRetry,
  onHome,
  failureReason = 'Noise limit reached!'
}) {
  const message = useMemo(() => {
    return FUNNY_MESSAGES[Math.floor(Math.random() * FUNNY_MESSAGES.length)];
  }, []);

  useEffect(() => {
    playWakeUpSound();
    const timer = setTimeout(() => {
      playLoseSound();
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="w-full max-w-sm bg-gradient-to-b from-[#FFFDF9] to-[#FFF0F0] rounded-3xl p-5 shadow-2xl border-4 border-red-300 flex flex-col items-center text-center animate-pop-in">
        
        {/* Header Alert Banner */}
        <div className="-mt-9 mb-2 bg-gradient-to-r from-red-500 via-rose-600 to-red-500 text-white font-black text-sm uppercase tracking-wider py-1.5 px-6 rounded-full shadow-lg border-2 border-white animate-bounce">
          😱 LEVEL FAILED!
        </div>

        {/* Waking Mr. Snoozy Hero */}
        <div className="my-1 scale-90">
          <MrSnoozy noise={100} isAwake={true} />
        </div>

        {/* Funny Failure Message */}
        <h3 className="text-xl font-black text-red-600 tracking-tight mt-1">
          {message}
        </h3>
        <p className="text-xs text-stone-600 mt-1 px-4">
          You made too much noise and woke Mr. Snoozy up from his beauty sleep!
        </p>

        {/* Noise Bar Info */}
        <div className="w-full bg-red-50 rounded-2xl p-2.5 my-3 border border-red-200 flex items-center justify-between text-xs font-bold text-red-800">
          <span>Final Noise Level</span>
          <span className="font-black bg-red-200 text-red-900 px-2 py-0.5 rounded-full">
            100% MAX
          </span>
        </div>

        {/* Actions */}
        <div className="w-full flex flex-col gap-2">
          <button
            onClick={onRetry}
            className="w-full py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 active:scale-98 text-white font-black text-sm uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
          >
            <span>🔄 Try Again</span>
          </button>
          <button
            onClick={onHome}
            className="w-full py-2.5 rounded-2xl bg-stone-100 hover:bg-stone-200 active:scale-98 text-stone-700 font-bold text-xs uppercase tracking-wider transition-all"
          >
            🏠 Choose Level
          </button>
        </div>
      </div>
    </div>
  );
}
