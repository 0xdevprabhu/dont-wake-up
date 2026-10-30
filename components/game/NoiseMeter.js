'use client';

import React from 'react';

/**
 * NoiseMeter - 0 to 100 stealth gauge
 * Transitions color from Green -> Yellow -> Orange -> Crimson Red
 */
export default function NoiseMeter({ noise = 0, max = 100 }) {
  const clampedNoise = Math.min(max, Math.max(0, Math.round(noise)));
  const percentage = (clampedNoise / max) * 100;

  // Determine meter gradient and text color
  let color = 'from-emerald-400 to-emerald-500';
  let badgeColor = 'text-emerald-700 bg-emerald-100';
  let statusText = 'Quiet';

  if (clampedNoise >= 85) {
    color = 'from-red-500 to-rose-600';
    badgeColor = 'text-red-700 bg-red-100';
    statusText = 'DANGER!';
  } else if (clampedNoise >= 60) {
    color = 'from-orange-400 to-amber-500';
    badgeColor = 'text-orange-700 bg-orange-100';
    statusText = 'Noisy';
  } else if (clampedNoise >= 30) {
    color = 'from-yellow-400 to-amber-400';
    badgeColor = 'text-amber-700 bg-amber-100';
    statusText = 'Moderate';
  }

  const isDanger = clampedNoise >= 75;

  return (
    <div
      className={`w-full bg-white/90 backdrop-blur-sm rounded-2xl p-2.5 shadow-sm border border-amber-100 transition-all ${
        isDanger ? 'ring-2 ring-red-400 animate-pulse' : ''
      }`}
    >
      <div className="flex items-center justify-between mb-1 text-xs font-bold">
        <div className="flex items-center gap-1.5">
          <span className="text-base">{clampedNoise >= 85 ? '🚨' : clampedNoise >= 40 ? '🔊' : '🤫'}</span>
          <span className="text-stone-700">NOISE METER</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className={`text-[10px] px-2 py-0.5 rounded-full font-black uppercase tracking-wider ${badgeColor}`}>
            {statusText}
          </span>
          <span className="text-stone-800 font-black">{clampedNoise}%</span>
        </div>
      </div>

      {/* Progress Track */}
      <div className="w-full h-3.5 bg-stone-200/80 rounded-full overflow-hidden p-0.5 shadow-inner">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-300 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
