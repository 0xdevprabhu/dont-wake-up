'use client';

import React, { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import GameBoard from '../../components/game/GameBoard';

function GameContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const levelParam = searchParams.get('level') || '1';
  const levelId = parseInt(levelParam, 10) || 1;

  return (
    <GameBoard
      levelId={levelId}
      onNavigateHome={() => router.push('/')}
      onNavigateLevels={() => router.push('/levels')}
      onNavigateLevel={(nextId) => router.push(`/game?level=${nextId}`)}
    />
  );
}

export default function GamePage() {
  return (
    <Suspense fallback={<div className="text-stone-500 font-bold text-center">Loading game...</div>}>
      <GameContent />
    </Suspense>
  );
}
