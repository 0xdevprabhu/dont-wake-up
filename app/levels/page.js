'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LevelSelector from '../../components/layout/LevelSelector';
import { getProgress } from '../../lib/progressManager';

export default function LevelsPage() {
  const router = useRouter();
  const [totalStars, setTotalStars] = useState(0);

  useEffect(() => {
    const p = getProgress();
    setTotalStars(p.totalStars || 0);
  }, []);

  return (
    <LevelSelector
      totalStars={totalStars}
      onSelectLevel={(id) => router.push(`/game?level=${id}`)}
      onBack={() => router.push('/')}
    />
  );
}
