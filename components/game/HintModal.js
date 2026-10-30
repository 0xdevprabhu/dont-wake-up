'use client';

import React from 'react';

/**
 * HintModal - Contextual clue popup
 */
export default function HintModal({ hintText, onClose }) {
  if (!hintText) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fade-in">
      <div className="w-full max-w-xs bg-white rounded-3xl p-5 shadow-2xl border-2 border-amber-300 flex flex-col items-center text-center animate-pop-in">
        
        <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-2xl mb-2 text-amber-600">
          💡
        </div>

        <h4 className="text-sm font-black text-stone-800 uppercase tracking-wider mb-1">
          Stealth Tip
        </h4>

        <p className="text-xs text-stone-600 mb-4 px-2 font-medium leading-relaxed">
          {hintText}
        </p>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 active:scale-98 text-stone-900 font-black text-xs uppercase tracking-wider shadow-sm transition-all"
        >
          Got it!
        </button>
      </div>
    </div>
  );
}
