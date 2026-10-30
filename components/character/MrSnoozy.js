'use client';

import React from 'react';

/**
 * Mr. Snoozy - Main sleeping character with 6 animated states:
 * 1. peaceful (0 - 25 noise)
 * 2. restless (26 - 50 noise)
 * 3. hearing (51 - 75 noise)
 * 4. suspicious (76 - 90 noise)
 * 5. almost_awake (91 - 99 noise)
 * 6. awake (100 noise - fail state)
 * + win state
 */
export default function MrSnoozy({
  noise = 0,
  isAwake = false,
  isWon = false,
  size = 'normal'
}) {
  // Determine character state based on noise and flags
  let state = 'peaceful';
  if (isAwake || noise >= 100) {
    state = 'awake';
  } else if (isWon) {
    state = 'won';
  } else if (noise >= 91) {
    state = 'almost_awake';
  } else if (noise >= 76) {
    state = 'suspicious';
  } else if (noise >= 51) {
    state = 'hearing';
  } else if (noise >= 26) {
    state = 'restless';
  }

  const isSmall = size === 'small';
  const isLarge = size === 'large';
  const scaleClass = isSmall ? 'scale-75' : isLarge ? 'scale-110' : 'scale-100';

  return (
    <div className={`relative flex flex-col items-center select-none ${scaleClass} pointer-events-none`}>
      {/* Floating Animated ZZZ for peaceful & hearing states */}
      {(state === 'peaceful' || state === 'restless' || state === 'won') && (
        <div className="absolute -top-10 right-2 flex flex-col items-end z-20 pointer-events-none">
          <span className="animate-float-z3 text-purple-600 font-black text-xl select-none">Z</span>
          <span className="animate-float-z2 text-purple-500 font-bold text-base select-none mr-2">z</span>
          <span className="animate-float-z1 text-purple-400 font-semibold text-xs select-none mr-4">z</span>
        </div>
      )}

      {/* Sweat beads for suspicious / almost awake states */}
      {(state === 'suspicious' || state === 'almost_awake') && (
        <div className="absolute -top-3 right-6 z-20 animate-bounce">
          <svg width="24" height="28" viewBox="0 0 24 28" fill="none">
            <path
              d="M12 2 C12 2, 2 14, 2 18 C2 23.5 6.5 28 12 28 C17.5 28 22 23.5 22 18 C22 14, 12 2, 12 2 Z"
              fill="#29B6F6"
              opacity="0.9"
            />
            <circle cx="8" cy="18" r="3" fill="#FFFFFF" opacity="0.8" />
          </svg>
        </div>
      )}

      {/* Exclamation marks when awake */}
      {state === 'awake' && (
        <div className="absolute -top-12 z-20 flex gap-2 animate-bounce">
          <span className="text-red-500 font-black text-3xl">!</span>
          <span className="text-yellow-500 font-black text-3xl">!</span>
          <span className="text-red-500 font-black text-3xl">!</span>
        </div>
      )}

      {/* Character SVG Container with state-based body animation */}
      <div
        className={`transition-transform duration-300 ${
          state === 'peaceful' || state === 'won'
            ? 'animate-gentle-breathe'
            : state === 'restless'
            ? 'animate-wiggle-soft'
            : state === 'hearing'
            ? 'animate-twitch-ear'
            : state === 'suspicious'
            ? 'animate-tremble-slow'
            : state === 'almost_awake'
            ? 'animate-shiver-fast'
            : 'animate-shock-pop'
        }`}
      >
        <svg
          viewBox="0 0 220 180"
          width="200"
          height="160"
          className="drop-shadow-md overflow-visible"
        >
          <defs>
            {/* Soft gradients */}
            <linearGradient id="pillowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#FFFFFF" />
              <stop offset="100%" stop-color="#E8EAF6" />
            </linearGradient>

            <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#FFE0B2" />
              <stop offset="100%" stop-color="#FFCC80" />
            </linearGradient>

            <linearGradient id="capGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#80DEEA" />
              <stop offset="100%" stop-color="#26C6DA" />
            </linearGradient>

            <linearGradient id="blanketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#FFF9C4" />
              <stop offset="100%" stop-color="#FFE082" />
            </linearGradient>
          </defs>

          {/* Pillow */}
          <ellipse
            cx="110"
            cy="120"
            rx="85"
            ry="48"
            fill="url(#pillowGrad)"
            stroke="#C5CAE9"
            strokeWidth="3"
          />

          {/* Character Head */}
          <circle
            cx="110"
            cy="85"
            r="48"
            fill="url(#skinGrad)"
            stroke="#D7CCC8"
            strokeWidth="2.5"
          />

          {/* Rosy Cheeks */}
          <circle
            cx="80"
            cy="95"
            r="11"
            fill={state === 'awake' ? '#FF5252' : '#FF8A80'}
            opacity={state === 'suspicious' || state === 'almost_awake' ? '0.85' : '0.6'}
          />
          <circle
            cx="140"
            cy="95"
            r="11"
            fill={state === 'awake' ? '#FF5252' : '#FF8A80'}
            opacity={state === 'suspicious' || state === 'almost_awake' ? '0.85' : '0.6'}
          />

          {/* Nose */}
          <ellipse cx="110" cy="92" rx="4.5" ry="3.5" fill="#FFAB91" />

          {/* Dynamic Eyes Based on State */}
          {state === 'peaceful' || state === 'restless' || state === 'won' ? (
            /* Curved Happy Sleepy Eyes */
            <g fill="none" stroke="#5D4037" strokeWidth="4.5" strokeLinecap="round">
              <path d="M 78 80 Q 88 90 98 80" />
              <path d="M 122 80 Q 132 90 142 80" />
            </g>
          ) : state === 'hearing' ? (
            /* One flat eye, one curious curve */
            <g fill="none" stroke="#5D4037" strokeWidth="4.5" strokeLinecap="round">
              <path d="M 78 80 Q 88 90 98 80" />
              <path d="M 122 79 L 142 79" />
            </g>
          ) : state === 'suspicious' ? (
            /* Squinting peek eye */
            <g fill="none" stroke="#5D4037" strokeWidth="4.5" strokeLinecap="round">
              <path d="M 77 82 Q 88 77 99 82" />
              {/* Slit with pupil looking sideways */}
              <ellipse cx="132" cy="79" rx="8" ry="4" fill="#FFFFFF" stroke="#5D4037" strokeWidth="2.5" />
              <circle cx="130" cy="79" r="3" fill="#212121" />
            </g>
          ) : state === 'almost_awake' ? (
            /* Both eyes wide open trembling */
            <g fill="#FFFFFF" stroke="#5D4037" strokeWidth="3">
              <ellipse cx="88" cy="78" rx="10" ry="8" />
              <circle cx="88" cy="78" r="4.5" fill="#D32F2F" />
              <ellipse cx="132" cy="78" rx="10" ry="8" />
              <circle cx="132" cy="78" r="4.5" fill="#D32F2F" />
            </g>
          ) : (
            /* AWAKE - Huge shocked cartoon eyes with light reflections */
            <g fill="#FFFFFF" stroke="#212121" strokeWidth="3.5">
              <ellipse cx="86" cy="74" rx="15" ry="17" />
              <circle cx="86" cy="74" r="8" fill="#1A237E" />
              <circle cx="83" cy="70" r="3" fill="#FFFFFF" />
              <ellipse cx="134" cy="74" rx="15" ry="17" />
              <circle cx="134" cy="74" r="8" fill="#1A237E" />
              <circle cx="131" cy="70" r="3" fill="#FFFFFF" />
            </g>
          )}

          {/* Eyebrows */}
          {state === 'peaceful' || state === 'won' ? (
            <g fill="none" stroke="#8D6E63" strokeWidth="3" strokeLinecap="round">
              <path d="M 80 72 Q 88 68 96 72" />
              <path d="M 124 72 Q 132 68 140 72" />
            </g>
          ) : state === 'suspicious' || state === 'hearing' ? (
            <g fill="none" stroke="#5D4037" strokeWidth="3.5" strokeLinecap="round">
              <path d="M 80 70 L 96 75" />
              <path d="M 124 75 L 140 68" />
            </g>
          ) : state === 'almost_awake' || state === 'awake' ? (
            <g fill="none" stroke="#3E2723" strokeWidth="4" strokeLinecap="round">
              <path d="M 76 60 Q 86 68 96 62" />
              <path d="M 124 62 Q 134 68 144 60" />
            </g>
          ) : null}

          {/* Mouth */}
          {state === 'peaceful' || state === 'won' ? (
            <path
              d="M 104 102 Q 110 108 116 102"
              fill="none"
              stroke="#6D4C41"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          ) : state === 'restless' || state === 'hearing' ? (
            <ellipse cx="110" cy="103" rx="4" ry="3" fill="#8D6E63" />
          ) : state === 'suspicious' || state === 'almost_awake' ? (
            <path
              d="M 103 105 Q 110 100 117 105"
              fill="none"
              stroke="#6D4C41"
              strokeWidth="4"
              strokeLinecap="round"
            />
          ) : (
            /* Comical screaming awake mouth with tongue */
            <g>
              <ellipse cx="110" cy="108" rx="14" ry="18" fill="#B71C1C" stroke="#212121" strokeWidth="3" />
              <ellipse cx="110" cy="116" rx="8" ry="6" fill="#FF8A80" />
            </g>
          )}

          {/* Nightcap Hat */}
          <g
            className={`transition-transform duration-300 ${
              state === 'awake' ? '-translate-y-4 rotate-12' : ''
            }`}
          >
            {/* Hat cone */}
            <path
              d="M 74 65 Q 110 30 150 65 Q 164 40 182 28 Q 190 60 148 62 Z"
              fill="url(#capGrad)"
              stroke="#0097A7"
              strokeWidth="2.5"
            />
            {/* White fluffy trim */}
            <ellipse
              cx="110"
              cy="65"
              rx="42"
              ry="11"
              fill="#E0F7FA"
              stroke="#B2EBF2"
              strokeWidth="2"
            />
            {/* Pom-pom */}
            <circle
              cx="184"
              cy="28"
              r="11"
              fill="#FFFFFF"
              stroke="#80DEEA"
              strokeWidth="2"
            />
          </g>

          {/* Blanket Covering Body */}
          <path
            d="M 40 128 Q 110 104 180 128 C 190 155 180 175 110 175 C 40 175 30 155 40 128 Z"
            fill="url(#blanketGrad)"
            stroke="#FBC02D"
            strokeWidth="3"
          />

          {/* Blanket Fold Top Highlight */}
          <path
            d="M 42 128 Q 110 105 178 128"
            fill="none"
            stroke="#FFF59D"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Cute Little Sleeping Paws/Hands peaking above blanket */}
          {state !== 'awake' ? (
            <g fill="#FFE0B2" stroke="#D7CCC8" strokeWidth="2">
              <ellipse cx="88" cy="120" rx="9" ry="7" />
              <ellipse cx="132" cy="120" rx="9" ry="7" />
            </g>
          ) : (
            /* Flailing hands when awake */
            <g fill="#FFE0B2" stroke="#3E2723" strokeWidth="2.5">
              <ellipse cx="62" cy="75" rx="10" ry="12" className="animate-spin-fast" />
              <ellipse cx="158" cy="75" rx="10" ry="12" className="animate-spin-fast" />
            </g>
          )}
        </svg>
      </div>

      {/* State Badge Tooltip for clear feedback */}
      <div className="mt-1">
        <span
          className={`text-xs font-bold px-2.5 py-0.5 rounded-full shadow-sm tracking-wide ${
            state === 'peaceful' || state === 'won'
              ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
              : state === 'restless'
              ? 'bg-blue-100 text-blue-800 border border-blue-300'
              : state === 'hearing'
              ? 'bg-amber-100 text-amber-800 border border-amber-300'
              : state === 'suspicious'
              ? 'bg-orange-100 text-orange-800 border border-orange-300'
              : state === 'almost_awake'
              ? 'bg-red-100 text-red-800 border border-red-300 animate-pulse'
              : 'bg-red-500 text-white animate-bounce'
          }`}
        >
          {state === 'peaceful'
            ? '💤 Sleeping Soundly'
            : state === 'restless'
            ? '🛌 Restless...'
            : state === 'hearing'
            ? '👂 Heard a sound!'
            : state === 'suspicious'
            ? '🧐 Getting suspicious!'
            : state === 'almost_awake'
            ? '⚠️ ABOUT TO WAKE UP!'
            : state === 'won'
            ? '✨ Still Asleep!'
            : '😱 WIDE AWAKE!'}
        </span>
      </div>
    </div>
  );
}

