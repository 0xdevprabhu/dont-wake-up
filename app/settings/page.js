'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import SettingsScreen from '../../components/layout/SettingsScreen';

export default function SettingsPage() {
  const router = useRouter();

  return (
    <SettingsScreen
      onBack={() => router.push('/')}
      onResetSuccess={() => router.push('/')}
    />
  );
}

