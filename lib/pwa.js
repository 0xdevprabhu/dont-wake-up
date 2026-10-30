// PWA Installation & Service Worker registration utility

let deferredPrompt = null;
const listeners = new Set();

function notifyListeners() {
  listeners.forEach(fn => fn(deferredPrompt));
}

export function initPWA() {
  if (typeof window === 'undefined') return;

  // Listen for beforeinstallprompt
  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent default mini-infobar
    e.preventDefault();
    deferredPrompt = e;
    notifyListeners();
  });

  // Listen for appinstalled
  window.addEventListener('appinstalled', () => {
    deferredPrompt = null;
    notifyListeners();
    console.log("PWA was installed successfully!");
  });

  // Register service worker if supported
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch(err => {
        console.warn('Service Worker registration skipped/failed:', err);
      });
    });
  }
}

export function subscribeToInstallPrompt(callback) {
  listeners.add(callback);
  callback(deferredPrompt);
  return () => listeners.delete(callback);
}

export function isStandaloneMode() {
  if (typeof window === 'undefined') return false;
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true ||
    document.referrer.includes('android-app://')
  );
}

export async function promptInstall() {
  if (!deferredPrompt) {
    return { outcome: 'unavailable' };
  }
  try {
    deferredPrompt.prompt();
    const choiceResult = await deferredPrompt.userChoice;
    deferredPrompt = null;
    notifyListeners();
    return choiceResult;
  } catch (err) {
    console.warn('Install prompt error:', err);
    return { outcome: 'dismissed' };
  }
}

