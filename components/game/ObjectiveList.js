'use client';

import React from 'react';

/**
 * ObjectiveList - displays current tasks to complete
 * Highlights completed steps and carried item inventory.
 */
export default function ObjectiveList({
  objectives = [],
  carriedItem = null,
  onHintClick,
  hintsRemaining = 3
}) {
  return (
    <div className="w-full bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-md border border-amber-100 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-xs font-black tracking-wider text-amber-900 uppercase flex items-center gap-1.5">
          <span>🎯</span> OBJECTIVES
        </span>

        {/* Hint Button */}
        <button
          onClick={onHintClick}
          className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-amber-400 hover:bg-amber-500 active:scale-95 text-stone-900 text-xs font-black shadow-xs transition-all"
        >
          <span>💡</span>
          <span>Hint</span>
        </button>
      </div>

      {/* Task List */}
      <div className="flex flex-col gap-1.5">
        {objectives.map((obj) => (
          <div
            key={obj.id}
            className={`flex items-center gap-2 text-xs font-semibold px-2 py-1.5 rounded-xl transition-all ${
              obj.completed
                ? 'bg-emerald-50 text-emerald-800 line-through opacity-70'
                : 'bg-stone-50 text-stone-700'
            }`}
          >
            <span
              className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-black shrink-0 ${
                obj.completed
                  ? 'bg-emerald-500 text-white shadow-xs'
                  : 'border-2 border-stone-300 text-transparent'
              }`}
            >
              ✓
            </span>
            <span className="leading-tight">{obj.text}</span>
          </div>
        ))}
      </div>

      {/* Carried Item Inventory Pill */}
      {carriedItem && (
        <div className="mt-1 flex items-center justify-between bg-amber-50 border border-amber-200 rounded-xl px-2.5 py-1.5 animate-pulse">
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900">
            <span className="text-base">🎒</span>
            <span>Carrying:</span>
            <span className="text-amber-700 uppercase tracking-wide">{carriedItem.replace('_', ' ')}</span>
          </div>
          <span className="text-[10px] font-medium text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full">
            In Hand
          </span>
        </div>
      )}
    </div>
  );
}

