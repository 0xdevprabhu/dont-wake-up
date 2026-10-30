'use client';

import React from 'react';

/**
 * InteractiveObject renders a touch-friendly object in the room.
 * Supports tap, animations, hint highlight, and visual SVG rendering.
 */
export default function InteractiveObject({
  object,
  isHighlighted = false,
  isCompleted = false,
  onInteract
}) {
  const { id, name, x, y, width = 60, height = 60, visual, noise, tooltip, type } = object;

  const handleClick = (e) => {
    e.stopPropagation();
    if (isCompleted) return;
    onInteract(object);
  };

  // Helper to render cute cartoon SVG graphics for each visual type
  const renderVisual = () => {
    switch (visual) {
      // Books & Paper
      case 'book':
      case 'book_wobbling':
        return (
          <div className="w-full h-full flex items-center justify-center">
            <svg viewBox="0 0 60 50" className="w-full h-full drop-shadow">
              <rect x="6" y="8" width="46" height="34" rx="4" fill="#3F51B5" stroke="#1A237E" strokeWidth="2" />
              <rect x="8" y="10" width="42" height="30" rx="3" fill="#5C6BC0" />
              <path d="M 12 12 L 12 38" stroke="#FFD54F" strokeWidth="3" />
              <text x="22" y="28" fill="#FFF" fontSize="12" fontWeight="bold">📖</text>
            </svg>
          </div>
        );

      case 'nightstand':
        return (
          <div className="w-full h-full flex items-center justify-center">
            <svg viewBox="0 0 80 70" className="w-full h-full drop-shadow">
              <rect x="10" y="14" width="60" height="42" rx="6" fill="#8D6E63" stroke="#4E342E" strokeWidth="2.5" />
              <rect x="15" y="20" width="50" height="14" rx="3" fill="#A1887F" />
              <circle cx="40" cy="27" r="3" fill="#FFD54F" />
              <rect x="15" y="38" width="50" height="14" rx="3" fill="#A1887F" />
              <circle cx="40" cy="45" r="3" fill="#FFD54F" />
              {/* Legs */}
              <rect x="12" y="56" width="8" height="12" fill="#5D4037" rx="2" />
              <rect x="60" y="56" width="8" height="12" fill="#5D4037" rx="2" />
            </svg>
          </div>
        );

      case 'creaky_wood':
      case 'wood_tile_cracked':
        return (
          <div className="w-full h-full flex items-center justify-center">
            <svg viewBox="0 0 70 35" className="w-full h-full drop-shadow">
              <rect x="4" y="4" width="62" height="26" rx="4" fill="#8D6E63" stroke="#5D4037" strokeWidth="2" />
              <path d="M 15 12 L 28 22 L 38 10 L 52 24" fill="none" stroke="#3E2723" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="12" cy="17" r="2" fill="#424242" />
              <circle cx="58" cy="17" r="2" fill="#424242" />
            </svg>
          </div>
        );

      case 'wood_tile_solid':
        return (
          <div className="w-full h-full flex items-center justify-center">
            <svg viewBox="0 0 70 35" className="w-full h-full drop-shadow">
              <rect x="4" y="4" width="62" height="26" rx="4" fill="#D7CCC8" stroke="#8D6E63" strokeWidth="2" />
              <line x1="8" y1="17" x2="62" y2="17" stroke="#BCAAA4" strokeWidth="1.5" strokeDasharray="4 4" />
              <circle cx="10" cy="17" r="2" fill="#A1887F" />
              <circle cx="60" cy="17" r="2" fill="#A1887F" />
            </svg>
          </div>
        );

      case 'alarm_ringing':
        return (
          <div className="w-full h-full flex items-center justify-center animate-wiggle-soft">
            <svg viewBox="0 0 60 60" className="w-full h-full drop-shadow">
              {/* Ringing bells */}
              <circle cx="16" cy="16" r="8" fill="#E53935" stroke="#B71C1C" strokeWidth="2" />
              <circle cx="44" cy="16" r="8" fill="#E53935" stroke="#B71C1C" strokeWidth="2" />
              {/* Body */}
              <circle cx="30" cy="34" r="20" fill="#FF5252" stroke="#C62828" strokeWidth="2.5" />
              <circle cx="30" cy="34" r="15" fill="#FFF" />
              {/* Hands */}
              <line x1="30" y1="34" x2="30" y2="24" stroke="#212121" strokeWidth="2" strokeLinecap="round" />
              <line x1="30" y1="34" x2="38" y2="34" stroke="#D32F2F" strokeWidth="2" strokeLinecap="round" />
              {/* Legs */}
              <line x1="20" y1="50" x2="14" y2="56" stroke="#424242" strokeWidth="3" strokeLinecap="round" />
              <line x1="40" y1="50" x2="46" y2="56" stroke="#424242" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
        );

      case 'water_glass':
        return (
          <div className="w-full h-full flex items-center justify-center">
            <svg viewBox="0 0 45 60" className="w-full h-full drop-shadow">
              <path d="M 8 10 L 12 50 Q 22.5 54 33 50 L 37 10 Z" fill="#E1F5FE" stroke="#81D4FA" strokeWidth="2" opacity="0.85" />
              <path d="M 10 24 L 12 48 Q 22.5 52 33 48 L 35 24 Z" fill="#4FC3F7" opacity="0.6" />
              <line x1="16" y1="16" x2="16" y2="40" stroke="#FFF" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
            </svg>
          </div>
        );

      case 'pillow':
        return (
          <div className="w-full h-full flex items-center justify-center">
            <svg viewBox="0 0 70 45" className="w-full h-full drop-shadow">
              <rect x="6" y="8" width="58" height="30" rx="14" fill="#E0F7FA" stroke="#80DEEA" strokeWidth="2" />
              <circle cx="35" cy="23" r="6" fill="#B2EBF2" />
            </svg>
          </div>
        );

      case 'curtain_open':
        return (
          <div className="w-full h-full flex items-center justify-center">
            <svg viewBox="0 0 50 100" className="w-full h-full drop-shadow">
              <rect x="4" y="4" width="42" height="6" fill="#FFB74D" rx="3" />
              <path d="M 8 10 Q 35 45 18 95 L 42 95 Q 40 45 42 10 Z" fill="#FF8A80" stroke="#D32F2F" strokeWidth="1.5" />
            </svg>
          </div>
        );

      case 'window_open':
      case 'window_rain':
        return (
          <div className="w-full h-full flex items-center justify-center">
            <svg viewBox="0 0 70 80" className="w-full h-full drop-shadow">
              <rect x="6" y="6" width="58" height="68" rx="4" fill="#E0F7FA" stroke="#5D4037" strokeWidth="3" />
              <line x1="35" y1="6" x2="35" y2="74" stroke="#5D4037" strokeWidth="2.5" />
              <line x1="6" y1="40" x2="64" y2="40" stroke="#5D4037" strokeWidth="2.5" />
              <circle cx="28" cy="40" r="3" fill="#FFD54F" />
            </svg>
          </div>
        );

      case 'latch_open':
        return (
          <div className="w-full h-full flex items-center justify-center">
            <svg viewBox="0 0 40 30" className="w-full h-full drop-shadow">
              <rect x="4" y="6" width="32" height="18" rx="4" fill="#FFD54F" stroke="#F57F17" strokeWidth="2" />
              <circle cx="14" cy="15" r="4" fill="#F57F17" />
              <rect x="18" y="12" width="14" height="6" fill="#FFF9C4" rx="2" />
            </svg>
          </div>
        );

      case 'wind_chime':
        return (
          <div className="w-full h-full flex items-center justify-center animate-wiggle-soft">
            <svg viewBox="0 0 40 60" className="w-full h-full drop-shadow">
              <circle cx="20" cy="8" r="8" fill="#8D6E63" />
              <line x1="12" y1="16" x2="12" y2="48" stroke="#CFD8DC" strokeWidth="2" />
              <line x1="20" y1="16" x2="20" y2="54" stroke="#CFD8DC" strokeWidth="2" />
              <line x1="28" y1="16" x2="28" y2="44" stroke="#CFD8DC" strokeWidth="2" />
              <circle cx="20" cy="38" r="4" fill="#FFD54F" />
            </svg>
          </div>
        );

      case 'cat_food':
        return (
          <div className="w-full h-full flex items-center justify-center">
            <svg viewBox="0 0 45 45" className="w-full h-full drop-shadow">
              <ellipse cx="22.5" cy="12" rx="16" ry="6" fill="#B0BEC5" stroke="#455A64" strokeWidth="2" />
              <rect x="6.5" y="12" width="32" height="20" fill="#FF7043" stroke="#455A64" strokeWidth="2" />
              <ellipse cx="22.5" cy="32" rx="16" ry="6" fill="#FF7043" stroke="#455A64" strokeWidth="2" />
              <text x="14" y="26" fontSize="12">🐟</text>
            </svg>
          </div>
        );

      case 'cat_bowl_empty':
        return (
          <div className="w-full h-full flex items-center justify-center">
            <svg viewBox="0 0 50 35" className="w-full h-full drop-shadow">
              <ellipse cx="25" cy="16" rx="22" ry="10" fill="#FFAB91" stroke="#D84315" strokeWidth="2.5" />
              <ellipse cx="25" cy="14" rx="18" ry="7" fill="#E64A19" opacity="0.3" />
            </svg>
          </div>
        );

      case 'cat_hungry':
        return (
          <div className="w-full h-full flex items-center justify-center">
            <svg viewBox="0 0 60 55" className="w-full h-full drop-shadow">
              <circle cx="30" cy="30" r="18" fill="#FFA726" stroke="#E65100" strokeWidth="2" />
              {/* Ears */}
              <polygon points="16,18 24,6 28,18" fill="#FFA726" stroke="#E65100" strokeWidth="2" />
              <polygon points="32,18 36,6 44,18" fill="#FFA726" stroke="#E65100" strokeWidth="2" />
              {/* Eyes */}
              <circle cx="24" cy="28" r="3" fill="#212121" />
              <circle cx="36" cy="28" r="3" fill="#212121" />
              {/* Whisker lines */}
              <line x1="10" y1="32" x2="20" y2="30" stroke="#5D4037" strokeWidth="1.5" />
              <line x1="40" y1="30" x2="50" y2="32" stroke="#5D4037" strokeWidth="1.5" />
            </svg>
          </div>
        );

      case 'squeaky_mouse':
        return (
          <div className="w-full h-full flex items-center justify-center">
            <svg viewBox="0 0 45 35" className="w-full h-full drop-shadow">
              <ellipse cx="22" cy="18" rx="14" ry="10" fill="#B0BEC5" stroke="#455A64" strokeWidth="2" />
              <circle cx="32" cy="12" r="5" fill="#FFAB91" stroke="#455A64" strokeWidth="1.5" />
              <circle cx="12" cy="16" r="2" fill="#212121" />
              <path d="M 8 18 Q 4 15 2 22" stroke="#FFAB91" strokeWidth="2" fill="none" />
            </svg>
          </div>
        );

      case 'golden_key':
        return (
          <div className="w-full h-full flex items-center justify-center animate-bounce-slow">
            <svg viewBox="0 0 45 45" className="w-full h-full drop-shadow">
              <circle cx="16" cy="16" r="10" fill="#FFD54F" stroke="#F57F17" strokeWidth="2.5" />
              <circle cx="16" cy="16" r="4" fill="#FFF" />
              <rect x="24" y="14" width="16" height="5" fill="#FFD54F" stroke="#F57F17" strokeWidth="2" />
              <rect x="34" y="19" width="4" height="6" fill="#FFD54F" stroke="#F57F17" strokeWidth="1.5" />
            </svg>
          </div>
        );

      case 'keyhole':
      case 'door_handle':
        return (
          <div className="w-full h-full flex items-center justify-center">
            <svg viewBox="0 0 45 45" className="w-full h-full drop-shadow">
              <rect x="6" y="6" width="33" height="33" rx="6" fill="#CFD8DC" stroke="#455A64" strokeWidth="2" />
              <circle cx="22.5" cy="18" r="5" fill="#212121" />
              <polygon points="20,18 25,18 26,28 19,28" fill="#212121" />
            </svg>
          </div>
        );

      case 'exit_door':
      case 'grand_exit':
        return (
          <div className="w-full h-full flex items-center justify-center">
            <svg viewBox="0 0 65 85" className="w-full h-full drop-shadow">
              <rect x="6" y="6" width="53" height="73" rx="4" fill="#8D6E63" stroke="#4E342E" strokeWidth="3" />
              <rect x="12" y="12" width="41" height="30" rx="3" fill="#A1887F" />
              <rect x="12" y="46" width="41" height="28" rx="3" fill="#A1887F" />
              <circle cx="46" cy="46" r="4" fill="#FFD54F" stroke="#B78103" strokeWidth="1.5" />
              <text x="24" y="32" fontSize="16">🚪</text>
            </svg>
          </div>
        );

      case 'phone_buzzing':
        return (
          <div className="w-full h-full flex items-center justify-center animate-wiggle-soft">
            <svg viewBox="0 0 45 60" className="w-full h-full drop-shadow">
              <rect x="6" y="6" width="33" height="48" rx="6" fill="#263238" stroke="#90A4AE" strokeWidth="2" />
              <rect x="9" y="10" width="27" height="40" rx="3" fill="#42A5F5" />
              <circle cx="22.5" cy="52" r="2" fill="#CFD8DC" />
              <text x="13" y="34" fontSize="14">📳</text>
            </svg>
          </div>
        );

      case 'dog_bone':
        return (
          <div className="w-full h-full flex items-center justify-center animate-pulse">
            <svg viewBox="0 0 50 35" className="w-full h-full drop-shadow">
              <path
                d="M 12 10 C 8 4, 2 8, 8 14 C 2 18, 6 26, 12 20 L 38 20 C 44 26, 48 18, 42 14 C 48 8, 42 4, 38 10 Z"
                fill="#FFF"
                stroke="#BDBDBD"
                strokeWidth="2"
              />
            </svg>
          </div>
        );

      case 'dog_bed':
        return (
          <div className="w-full h-full flex items-center justify-center">
            <svg viewBox="0 0 75 50" className="w-full h-full drop-shadow">
              <ellipse cx="37.5" cy="25" rx="32" ry="18" fill="#81D4FA" stroke="#0288D1" strokeWidth="2.5" />
              <ellipse cx="37.5" cy="24" rx="24" ry="12" fill="#E1F5FE" />
              <text x="28" y="28" fontSize="12">🐾</text>
            </svg>
          </div>
        );

      case 'dog_whining':
        return (
          <div className="w-full h-full flex items-center justify-center">
            <svg viewBox="0 0 65 60" className="w-full h-full drop-shadow">
              <circle cx="32" cy="32" r="20" fill="#8D6E63" stroke="#4E342E" strokeWidth="2" />
              {/* Droopy ears */}
              <ellipse cx="16" cy="30" rx="6" ry="14" fill="#5D4037" />
              <ellipse cx="48" cy="30" rx="6" ry="14" fill="#5D4037" />
              {/* Snout */}
              <ellipse cx="32" cy="38" rx="10" ry="7" fill="#D7CCC8" />
              <circle cx="32" cy="35" r="3.5" fill="#212121" />
              <circle cx="26" cy="28" r="2.5" fill="#212121" />
              <circle cx="38" cy="28" r="2.5" fill="#212121" />
            </svg>
          </div>
        );

      case 'cookie':
        return (
          <div className="w-full h-full flex items-center justify-center">
            <svg viewBox="0 0 45 45" className="w-full h-full drop-shadow">
              <circle cx="22.5" cy="22.5" r="16" fill="#D7CCC8" stroke="#8D6E63" strokeWidth="2" />
              <circle cx="16" cy="18" r="2.5" fill="#3E2723" />
              <circle cx="28" cy="18" r="2.5" fill="#3E2723" />
              <circle cx="22" cy="28" r="2.5" fill="#3E2723" />
              <circle cx="15" cy="27" r="2" fill="#3E2723" />
              <circle cx="30" cy="26" r="2" fill="#3E2723" />
            </svg>
          </div>
        );

      case 'balloon_red':
        return (
          <div className="w-full h-full flex items-center justify-center animate-bounce-slow">
            <svg viewBox="0 0 45 65" className="w-full h-full drop-shadow">
              <ellipse cx="22.5" cy="24" rx="18" ry="22" fill="#EF5350" stroke="#C62828" strokeWidth="2" />
              <ellipse cx="16" cy="16" rx="4" ry="7" fill="#FFF" opacity="0.6" />
              <polygon points="20,46 25,46 22.5,50" fill="#C62828" />
              <path d="M 22.5 50 Q 20 56 24 62" fill="none" stroke="#BDBDBD" strokeWidth="1.5" />
            </svg>
          </div>
        );

      case 'balloon_blue':
        return (
          <div className="w-full h-full flex items-center justify-center animate-bounce-slow">
            <svg viewBox="0 0 45 65" className="w-full h-full drop-shadow">
              <ellipse cx="22.5" cy="24" rx="18" ry="22" fill="#42A5F5" stroke="#1565C0" strokeWidth="2" />
              <ellipse cx="16" cy="16" rx="4" ry="7" fill="#FFF" opacity="0.6" />
              <polygon points="20,46 25,46 22.5,50" fill="#1565C0" />
              <path d="M 22.5 50 Q 25 56 21 62" fill="none" stroke="#BDBDBD" strokeWidth="1.5" />
            </svg>
          </div>
        );

      case 'balloon_yellow':
        return (
          <div className="w-full h-full flex items-center justify-center animate-bounce-slow">
            <svg viewBox="0 0 45 65" className="w-full h-full drop-shadow">
              <ellipse cx="22.5" cy="24" rx="18" ry="22" fill="#FFEE58" stroke="#F57F17" strokeWidth="2" />
              <ellipse cx="16" cy="16" rx="4" ry="7" fill="#FFF" opacity="0.6" />
              <polygon points="20,46 25,46 22.5,50" fill="#F57F17" />
              <path d="M 22.5 50 Q 20 56 24 62" fill="none" stroke="#BDBDBD" strokeWidth="1.5" />
            </svg>
          </div>
        );

      case 'basket':
        return (
          <div className="w-full h-full flex items-center justify-center">
            <svg viewBox="0 0 70 50" className="w-full h-full drop-shadow">
              <rect x="6" y="10" width="58" height="34" rx="6" fill="#FFE082" stroke="#FFA000" strokeWidth="2.5" />
              <line x1="6" y1="22" x2="64" y2="22" stroke="#FFB300" strokeWidth="2" />
              <line x1="6" y1="34" x2="64" y2="34" stroke="#FFB300" strokeWidth="2" />
            </svg>
          </div>
        );

      case 'cactus':
        return (
          <div className="w-full h-full flex items-center justify-center">
            <svg viewBox="0 0 45 60" className="w-full h-full drop-shadow">
              {/* Pot */}
              <polygon points="10,40 35,40 32,56 13,56" fill="#FF7043" stroke="#D84315" strokeWidth="2" />
              {/* Main stem */}
              <rect x="18" y="10" width="9" height="30" rx="4" fill="#66BB6A" stroke="#2E7D32" strokeWidth="2" />
              {/* Spines */}
              <line x1="14" y1="20" x2="18" y2="20" stroke="#1B5E20" strokeWidth="1.5" />
              <line x1="27" y1="26" x2="31" y2="26" stroke="#1B5E20" strokeWidth="1.5" />
              <line x1="14" y1="32" x2="18" y2="32" stroke="#1B5E20" strokeWidth="1.5" />
            </svg>
          </div>
        );

      case 'robot_active':
        return (
          <div className="w-full h-full flex items-center justify-center animate-wiggle-soft">
            <svg viewBox="0 0 60 70" className="w-full h-full drop-shadow">
              {/* Antenna */}
              <line x1="30" y1="6" x2="30" y2="16" stroke="#78909C" strokeWidth="2" />
              <circle cx="30" cy="6" r="3" fill="#F44336" className="animate-ping" />
              {/* Head */}
              <rect x="16" y="16" width="28" height="20" rx="4" fill="#90A4AE" stroke="#455A64" strokeWidth="2" />
              <circle cx="23" cy="25" r="3" fill="#00E676" />
              <circle cx="37" cy="25" r="3" fill="#00E676" />
              {/* Body */}
              <rect x="12" y="38" width="36" height="24" rx="4" fill="#78909C" stroke="#37474F" strokeWidth="2" />
              <rect x="18" y="44" width="24" height="12" rx="2" fill="#263238" />
              {/* Wheels */}
              <ellipse cx="16" cy="64" rx="5" ry="3" fill="#212121" />
              <ellipse cx="44" cy="64" rx="5" ry="3" fill="#212121" />
            </svg>
          </div>
        );

      case 'clock_ticking':
        return (
          <div className="w-full h-full flex items-center justify-center">
            <svg viewBox="0 0 50 75" className="w-full h-full drop-shadow">
              <rect x="8" y="6" width="34" height="63" rx="6" fill="#8D6E63" stroke="#4E342E" strokeWidth="2.5" />
              <circle cx="25" cy="24" r="12" fill="#FFF" stroke="#4E342E" strokeWidth="1.5" />
              <line x1="25" y1="24" x2="25" y2="16" stroke="#212121" strokeWidth="1.5" />
              <line x1="25" y1="24" x2="30" y2="24" stroke="#D32F2F" strokeWidth="1.5" />
              {/* Pendulum */}
              <line x1="25" y1="40" x2="25" y2="58" stroke="#FFD54F" strokeWidth="2" className="animate-wiggle-soft" />
              <circle cx="25" cy="58" r="4" fill="#FFD54F" stroke="#F57F17" strokeWidth="1.5" />
            </svg>
          </div>
        );

      case 'parrot':
        return (
          <div className="w-full h-full flex items-center justify-center">
            <svg viewBox="0 0 55 65" className="w-full h-full drop-shadow">
              {/* Perch */}
              <line x1="4" y1="52" x2="51" y2="52" stroke="#8D6E63" strokeWidth="3" />
              {/* Body */}
              <ellipse cx="28" cy="32" rx="14" ry="18" fill="#4CAF50" stroke="#2E7D32" strokeWidth="2" />
              <circle cx="26" cy="20" r="10" fill="#81C784" />
              {/* Beak */}
              <polygon points="16,20 10,24 18,26" fill="#FFB74D" stroke="#E65100" strokeWidth="1.5" />
              <circle cx="24" cy="18" r="2" fill="#212121" />
              {/* Tail */}
              <polygon points="24,46 32,46 28,62" fill="#29B6F6" />
            </svg>
          </div>
        );

      // Default fallback generic cute item
      default:
        return (
          <div className="w-full h-full flex items-center justify-center bg-white/80 rounded-2xl border-2 border-amber-300 shadow-sm p-1">
            <span className="text-2xl">✨</span>
          </div>
        );
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`absolute cursor-pointer select-none transition-all duration-200 transform active:scale-90 active:opacity-95 ${
        isCompleted ? 'opacity-40 pointer-events-none' : ''
      } ${
        isHighlighted ? 'ring-4 ring-amber-400 ring-offset-2 animate-pulse scale-105 rounded-xl z-30' : 'z-10'
      }`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${width}px`,
        height: `${height}px`,
        transform: 'translate(-50%, -50%)',
        touchAction: 'manipulation'
      }}
    >
      {/* Object Visual */}
      <div className="w-full h-full relative">
        {renderVisual()}

        {/* Danger marker for high noise objects */}
        {noise >= 30 && !isCompleted && (
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
            !
          </div>
        )}

        {/* Checkmark when completed */}
        {isCompleted && (
          <div className="absolute inset-0 flex items-center justify-center bg-emerald-500/30 rounded-xl">
            <span className="text-white bg-emerald-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-black shadow">
              ✓
            </span>
          </div>
        )}
      </div>

      {/* Tiny Subdued Object Label Pill */}
      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/60 backdrop-blur-xs text-white text-[10px] font-medium px-1.5 py-0.5 rounded-full pointer-events-none shadow-xs">
        {name}
      </div>
    </div>
  );
}

