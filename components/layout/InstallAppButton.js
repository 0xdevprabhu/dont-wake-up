'use client';

import React, { useState, useEffect } from 'react';
import { subscribeToInstallPrompt, promptInstall, isStandaloneMode } from '../../lib/pwa';
import { playClickSound } from '../../lib/audioManager';

/**
 * InstallAppButton - Handles Android / Desktop PWA installation.
 * Shows native install prompt or opens guided modal if manual install is needed.
 */
export default function InstallAppButton() {
  const [canInstall, setCanInstall] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    setIsInstalled(isStandaloneMode());
    const unsubscribe = subscribeToInstallPrompt((prompt) => {
      setCanInstall(Boolean(prompt));
    });
    return unsubscribe;
  }, []);

  // Do not show button if already running as installed standalone app
  if (isInstalled) return null;

  const handleInstallClick = async () => {
    playClickSound();
    if (canInstall) {
      const res = await promptInstall();
      if (res.outcome === 'accepted') {
        setIsInstalled(true);
      }
    } else {
      setShowInstructions(true);
    }
  };

  return (
    <>
      <button
        onClick={handleInstallClick}
        className="w-full py-2.5 px-4 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 active:scale-98 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 border border-purple-300/40"
      >
        <span className="text-base">📲</span>
        <span>Install App for Offline Play</span>
      </button>

      {/* Manual Instructions Modal for Android Chrome / Browsers without prompt */}
      {showInstructions && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="w-full max-w-xs bg-white rounded-3xl p-5 shadow-2xl border-2 border-purple-300 flex flex-col items-center text-center animate-pop-in">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-2xl mb-2 text-purple-600">
              📲
            </div>

            <h4 className="text-sm font-black text-stone-800 uppercase tracking-wider mb-2">
              Install &quot;Don&apos;t Wake Up!&quot;
            </h4>

            <div className="text-left text-xs text-stone-600 space-y-2 mb-4 bg-purple-50 p-3 rounded-2xl border border-purple-100 font-medium">
              <div className="flex items-start gap-2">
                <span className="font-black text-purple-700">1.</span>
                <span>Tap the browser menu (<strong>⋮</strong> or Share icon).</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-black text-purple-700">2.</span>
                <span>Select <strong>&quot;Install app&quot;</strong> or <strong>&quot;Add to Home Screen&quot;</strong>.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-black text-purple-700">3.</span>
                <span>Play offline anytime with zero lag!</span>
              </div>
            </div>

            <button
              onClick={() => setShowInstructions(false)}
              className="w-full py-2.5 rounded-2xl bg-purple-600 hover:bg-purple-700 active:scale-98 text-white font-black text-xs uppercase tracking-wider shadow-sm transition-all"
            >
              Understood
            </button>
          </div>
        </div>
      )}
    </>
  );
}

