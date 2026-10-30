'use client';

import React from 'react';

/**
 * PauseModal - In-game pause menu
 */
export default function PauseModal({
  onResume,
  onRestart,
  onHome,
  soundEnabled,
  musicEnabled,
  vibrationEnabled,
  onToggleSound,
  onToggleMusic,
  onToggleVibration
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="w-full max-w-xs bg-white rounded-3xl p-5 shadow-2xl border-2 border-stone-200 flex flex-col items-center text-center animate-pop-in">
        
        <h3 className="text-xl font-black text-stone-800 tracking-tight flex items-center gap-2 mb-4">
          <span>⏸️</span> GAME PAUSED
        </h3>

        {/* Quick Audio & Vibration Toggles */}
        <div className="w-full bg-stone-50 rounded-2xl p-2.5 mb-4 border border-stone-100 flex justify-around">
          <button
            onClick={onToggleSound}
            className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all ${
              soundEnabled ? 'text-amber-600 bg-amber-50' : 'text-stone-400'
            }`}
          >
            <span className="text-xl">{soundEnabled ? '🔊' : '🔇'}</span>
            <span className="text-[10px] font-bold">Sound</span>
          </button>

          <button
            onClick={onToggleMusic}
            className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all ${
              musicEnabled ? 'text-purple-600 bg-purple-50' : 'text-stone-400'
            }`}
          >
            <span className="text-xl">{musicEnabled ? '🎵' : '💤'}</span>
            <span className="text-[10px] font-bold">Music</span>
          </button>

          <button
            onClick={onToggleVibration}
            className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all ${
              vibrationEnabled ? 'text-blue-600 bg-blue-50' : 'text-stone-400'
            }`}
          >
            <span className="text-xl">{vibrationEnabled ? '📳' : '📴'}</span>
            <span className="text-[10px] font-bold">Haptic</span>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="w-full flex flex-col gap-2">
          <button
            onClick={onResume}
            className="w-full py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 active:scale-98 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all"
          >
            ▶️ Resume
          </button>

          <button
            onClick={onRestart}
            className="w-full py-2.5 rounded-2xl bg-amber-50 hover:bg-amber-100 active:scale-98 text-amber-900 font-bold text-xs uppercase tracking-wider transition-all border border-amber-200"
          >
            🔄 Restart Level
          </button>

          <button
            onClick={onHome}
            className="w-full py-2.5 rounded-2xl bg-stone-100 hover:bg-stone-200 active:scale-98 text-stone-700 font-bold text-xs uppercase tracking-wider transition-all"
          >
            🏠 Exit to Levels
          </button>
        </div>
      </div>
    </div>
  );
}

