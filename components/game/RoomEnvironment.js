'use client';

import React from 'react';

/**
 * Cartoon room backgrounds designed with soft pastel palettes:
 * - bedroom
 * - study
 * - doorway
 * - living_room
 * - kitchen
 * - hallway
 * - party_room
 * - nursery
 * - grand_bedroom
 */
export default function RoomEnvironment({ environment = 'bedroom' }) {
  switch (environment) {
    case 'kitchen':
      return (
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
          {/* Wall: Mint pastel */}
          <div className="absolute top-0 left-0 right-0 h-[65%] bg-gradient-to-b from-[#E0F2F1] to-[#B2DFDB]">
            {/* Subway tiles pattern */}
            <div
              className="w-full h-full opacity-15"
              style={{
                backgroundImage: `radial-gradient(#004D40 1px, transparent 1px)`,
                backgroundSize: '24px 24px'
              }}
            />
            {/* Kitchen cabinets top trim */}
            <div className="absolute top-0 left-4 right-4 h-10 bg-[#FFF] border-b-4 border-[#80CBC4] rounded-b-xl flex justify-around items-center px-4 opacity-90 shadow-sm">
              <div className="w-12 h-2 bg-[#E0E0E0] rounded" />
              <div className="w-12 h-2 bg-[#E0E0E0] rounded" />
              <div className="w-12 h-2 bg-[#E0E0E0] rounded" />
            </div>
            {/* Kitchen Window */}
            <div className="absolute top-12 left-[48%] -translate-x-1/2 w-28 h-24 bg-[#E1F5FE] border-4 border-[#FFF] rounded-t-full shadow-inner flex items-center justify-center">
              <div className="w-full h-1 bg-[#FFF]" />
            </div>
          </div>
          {/* Countertop & Baseboard */}
          <div className="absolute top-[63%] left-0 right-0 h-4 bg-[#80CBC4] shadow-sm z-0" />
          {/* Floor: Warm checkered kitchen tile */}
          <div className="absolute bottom-0 left-0 right-0 h-[37%] bg-[#FFF3E0]">
            <div
              className="w-full h-full opacity-25"
              style={{
                backgroundImage:
                  'linear-gradient(45deg, #FFE0B2 25%, transparent 25%), linear-gradient(-45deg, #FFE0B2 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #FFE0B2 75%), linear-gradient(-45deg, transparent 75%, #FFE0B2 75%)',
                backgroundSize: '40px 40px',
                backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
              }}
            />
          </div>
        </div>
      );

    case 'study':
      return (
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
          {/* Wall: Cozy sage & warm wood */}
          <div className="absolute top-0 left-0 right-0 h-[65%] bg-gradient-to-b from-[#E8F5E9] to-[#C8E6C9]">
            {/* Bookshelf pattern on left wall */}
            <div className="absolute top-6 left-3 w-28 h-48 bg-[#D7CCC8] rounded-lg border-2 border-[#8D6E63] p-1.5 opacity-90 shadow-sm flex flex-col justify-around">
              <div className="h-2 bg-[#8D6E63] rounded" />
              <div className="h-2 bg-[#8D6E63] rounded" />
              <div className="h-2 bg-[#8D6E63] rounded" />
            </div>
            {/* Framed Diploma on wall */}
            <div className="absolute top-10 right-8 w-16 h-20 bg-[#FFF] border-4 border-[#A1887F] rounded shadow-sm flex flex-col items-center justify-center p-1">
              <div className="w-8 h-1 bg-[#BCAAA4] mb-1" />
              <div className="w-10 h-1 bg-[#BCAAA4] mb-1" />
              <div className="w-4 h-4 rounded-full bg-[#FFD54F]" />
            </div>
          </div>
          {/* Floor: Warm hardwood parquet */}
          <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-b from-[#D7CCC8] to-[#BCAAA4]">
            <div className="w-full h-2 bg-[#8D6E63]" />
            <div
              className="w-full h-full opacity-20"
              style={{
                backgroundImage: `repeating-linear-gradient(90deg, #5D4037 0px, #5D4037 2px, transparent 2px, transparent 40px)`
              }}
            />
          </div>
        </div>
      );

    case 'living_room':
      return (
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
          {/* Wall: Soft Warm Peach */}
          <div className="absolute top-0 left-0 right-0 h-[65%] bg-gradient-to-b from-[#FFF3E0] to-[#FFE0B2]">
            {/* Cute cat painting */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-24 h-18 bg-[#FFF] border-4 border-[#FFA726] rounded-xl shadow-sm flex items-center justify-center">
              <span className="text-2xl">🐱</span>
            </div>
            {/* Cozy floor lamp base pole */}
            <div className="absolute top-16 right-6 w-1 h-32 bg-[#FFB74D]" />
            <div className="absolute top-12 right-2 w-9 h-6 bg-[#FFE082] rounded-t-full shadow-sm" />
          </div>
          {/* Baseboard */}
          <div className="absolute top-[65%] left-0 right-0 h-3 bg-[#FFE082]" />
          {/* Floor: Plush lavender rug on wood */}
          <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-[#F5E6CC]">
            <div className="mx-auto mt-3 w-[85%] h-[80%] bg-[#EDE7F6] rounded-3xl border-2 border-[#D1C4E9] opacity-80 shadow-inner flex items-center justify-center">
              <div className="w-[90%] h-[75%] border border-dashed border-[#B39DDB] rounded-2xl opacity-60" />
            </div>
          </div>
        </div>
      );

    case 'hallway':
      return (
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
          {/* Wall: Subtle Cream Wallpaper */}
          <div className="absolute top-0 left-0 right-0 h-[60%] bg-gradient-to-b from-[#F3E5F5] to-[#E1BEE7]">
            {/* Wall sconce lamps */}
            <div className="absolute top-14 left-8 w-6 h-6 rounded-full bg-[#FFF9C4] shadow-md border border-[#FBC02D]" />
            <div className="absolute top-14 right-8 w-6 h-6 rounded-full bg-[#FFF9C4] shadow-md border border-[#FBC02D]" />
          </div>
          {/* Hallway Floor: Long perspective wooden runner */}
          <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-[#BCAAA4] to-[#D7CCC8]">
            <div className="mx-auto w-[65%] h-full bg-[#EF5350] border-x-4 border-[#FFD54F] opacity-90 shadow-lg" />
          </div>
        </div>
      );

    case 'party_room':
      return (
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
          {/* Wall: Festive Pastel Yellow */}
          <div className="absolute top-0 left-0 right-0 h-[65%] bg-gradient-to-b from-[#FFFDE7] to-[#FFF9C4]">
            {/* Streamers / Bunting Pennants */}
            <div className="absolute top-2 left-0 right-0 flex justify-between px-2">
              {['#EF5350', '#42A5F5', '#66BB6A', '#FFA726', '#AB47BC', '#26C6DA', '#FF7043'].map(
                (color, i) => (
                  <div
                    key={i}
                    className="w-5 h-7"
                    style={{
                      backgroundColor: color,
                      clipPath: 'polygon(0 0, 100% 0, 50% 100%)'
                    }}
                  />
                )
              )}
            </div>
          </div>
          {/* Floor */}
          <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-b from-[#FFE082] to-[#FFD54F]" />
        </div>
      );

    case 'nursery':
      return (
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
          {/* Wall: Dreamy Sky Baby Blue with soft clouds */}
          <div className="absolute top-0 left-0 right-0 h-[65%] bg-gradient-to-b from-[#E1F5FE] to-[#B3E5FC]">
            {/* Fluffy cartoon clouds */}
            <div className="absolute top-8 left-6 w-16 h-8 bg-[#FFF] rounded-full opacity-80" />
            <div className="absolute top-14 right-10 w-20 h-9 bg-[#FFF] rounded-full opacity-80" />
            {/* Hanging mobile star */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <div className="w-0.5 h-12 bg-[#81D4FA]" />
              <div className="w-8 h-8 text-yellow-400 text-xl animate-spin-slow">⭐</div>
            </div>
          </div>
          {/* Floor: Soft pastel yellow carpet */}
          <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-[#FFF9C4] border-t-4 border-[#FFF59D]" />
        </div>
      );

    case 'grand_bedroom':
      return (
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
          {/* Wall: Royal Midnight Indigo with Stars */}
          <div className="absolute top-0 left-0 right-0 h-[65%] bg-gradient-to-b from-[#1A237E] via-[#283593] to-[#3949AB]">
            {/* Stars */}
            <div className="absolute top-6 left-12 text-yellow-200 text-xs animate-pulse">✨</div>
            <div className="absolute top-14 right-16 text-yellow-200 text-sm animate-pulse">⭐</div>
            <div className="absolute top-8 right-24 text-yellow-200 text-xs animate-pulse">✨</div>
            {/* Chandelier in ceiling */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <div className="w-1 h-8 bg-[#FFD54F]" />
              <div className="w-24 h-6 bg-[#FFE082] rounded-full flex justify-around items-center px-2 shadow-lg">
                <div className="w-2 h-2 rounded-full bg-[#FFF] animate-ping" />
                <div className="w-2 h-2 rounded-full bg-[#FFF]" />
                <div className="w-2 h-2 rounded-full bg-[#FFF] animate-ping" />
              </div>
            </div>
          </div>
          {/* Floor: Royal Gold Trim Oak Parquet */}
          <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-b from-[#5D4037] to-[#3E2723]">
            <div className="w-full h-2 bg-[#FFD54F]" />
          </div>
        </div>
      );

    case 'bedroom':
    default:
      return (
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
          {/* Wall: Calming Lavender Cream */}
          <div className="absolute top-0 left-0 right-0 h-[65%] bg-gradient-to-b from-[#FFF8E1] to-[#FFE0B2]">
            {/* Window with moon & stars */}
            <div className="absolute top-8 right-8 w-24 h-28 bg-[#1A237E] border-4 border-[#FFF] rounded-t-full shadow-md flex items-center justify-center overflow-hidden">
              <div className="text-xl">🌙</div>
              <div className="absolute top-2 right-2 text-xs">⭐</div>
            </div>
            {/* Picture Frame */}
            <div className="absolute top-12 left-8 w-16 h-18 bg-[#FFF] border-4 border-[#81D4FA] rounded-lg shadow-sm flex items-center justify-center">
              <span className="text-xl">💤</span>
            </div>
          </div>
          {/* Floor: Warm wood with round fluffy teal rug */}
          <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-[#F5DEB3]">
            <div className="w-full h-2 bg-[#D2B48C]" />
            <div className="mx-auto mt-4 w-[75%] h-[70%] bg-[#B2EBF2] rounded-full border-4 border-[#80DEEA] opacity-80 shadow-inner" />
          </div>
        </div>
      );
  }
}

