// Web Audio API Procedural Sound Engine & Synthesizer
// Zero external audio files required — 100% offline, lightweight, instant playback

let audioCtx = null;
let musicInterval = null;
let isMusicPlaying = false;

// Audio context helper with browser compatibility
function getAudioContext() {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Check user settings from localStorage safely
function isSoundEnabled() {
  if (typeof window === 'undefined') return false;
  try {
    const raw = localStorage.getItem('dont_wake_up_settings');
    if (!raw) return true;
    const parsed = JSON.parse(raw);
    return parsed.sound !== false;
  } catch {
    return true;
  }
}

function isMusicEnabled() {
  if (typeof window === 'undefined') return false;
  try {
    const raw = localStorage.getItem('dont_wake_up_settings');
    if (!raw) return true;
    const parsed = JSON.parse(raw);
    return parsed.music !== false;
  } catch {
    return true;
  }
}

function isVibrationEnabled() {
  if (typeof window === 'undefined') return false;
  try {
    const raw = localStorage.getItem('dont_wake_up_settings');
    if (!raw) return true;
    const parsed = JSON.parse(raw);
    return parsed.vibration !== false;
  } catch {
    return true;
  }
}

export function triggerVibration(pattern = [40]) {
  if (typeof window === 'undefined') return;
  if (!isVibrationEnabled()) return;
  if ('vibrate' in navigator) {
    try {
      navigator.vibrate(pattern);
    } catch {
      // Ignore vibration error on unsupported devices
    }
  }
}

// 1. Button click (cute wooden bubble pop)
export function playClickSound() {
  if (!isSoundEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(440, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.06);

  gain.gain.setValueAtTime(0.25, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + 0.08);
}

// 2. Object pick up (rising gentle chime)
export function playPickupSound() {
  if (!isSoundEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const notes = [523.25, 659.25, 783.99]; // C5, E5, G5
  notes.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const start = ctx.currentTime + idx * 0.05;

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, start);

    gain.gain.setValueAtTime(0.18, start);
    gain.gain.exponentialRampToValueAtTime(0.001, start + 0.15);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(start);
    osc.stop(start + 0.16);
  });
  triggerVibration([25]);
}

// 3. Object place (soft clink)
export function playPlaceSound() {
  if (!isSoundEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'triangle';
  osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
  osc.frequency.exponentialRampToValueAtTime(392.0, ctx.currentTime + 0.08); // G4

  gain.gain.setValueAtTime(0.2, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + 0.12);
  triggerVibration([30]);
}

// 4. Small noise (alert squeak or warning tone)
export function playSmallNoiseSound() {
  if (!isSoundEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(280, ctx.currentTime);
  osc.frequency.linearRampToValueAtTime(360, ctx.currentTime + 0.1);

  // Soft low-pass filter to sound muffled
  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(800, ctx.currentTime);

  gain.gain.setValueAtTime(0.2, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);

  osc.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + 0.2);
  triggerVibration([50]);
}

// 5. Loud noise (clatter crash warning)
export function playLoudNoiseSound() {
  if (!isSoundEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  // Noise generator
  const bufferSize = ctx.sampleRate * 0.25;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  const noise = ctx.createBufferSource();
  noise.buffer = buffer;

  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(1200, ctx.currentTime);
  filter.Q.setValueAtTime(1.5, ctx.currentTime);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.35, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.28);

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  // Add low boom oscillator
  const osc = ctx.createOscillator();
  const oscGain = ctx.createGain();
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(160, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(45, ctx.currentTime + 0.25);

  oscGain.gain.setValueAtTime(0.35, ctx.currentTime);
  oscGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);

  osc.connect(oscGain);
  oscGain.connect(ctx.destination);

  noise.start();
  osc.start();
  osc.stop(ctx.currentTime + 0.28);
  triggerVibration([80, 40, 80]);
}

// 6. Character snoring/peaceful breathing
export function playSnoreSound() {
  if (!isSoundEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  const filter = ctx.createBiquadFilter();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(130, ctx.currentTime);
  osc.frequency.linearRampToValueAtTime(150, ctx.currentTime + 0.4);
  osc.frequency.linearRampToValueAtTime(110, ctx.currentTime + 0.8);

  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(400, ctx.currentTime);

  gain.gain.setValueAtTime(0.001, ctx.currentTime);
  gain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.4);
  gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.8);

  osc.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + 0.8);
}

// 7. Suspicious grunt / question tone
export function playSuspiciousSound() {
  if (!isSoundEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'triangle';
  osc.frequency.setValueAtTime(220, ctx.currentTime);
  osc.frequency.linearRampToValueAtTime(330, ctx.currentTime + 0.2);

  gain.gain.setValueAtTime(0.18, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + 0.25);
  triggerVibration([40]);
}

// 8. Wake up alarm shock
export function playWakeUpSound() {
  if (!isSoundEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  // Funny startled slide
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(200, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(850, ctx.currentTime + 0.35);

  gain.gain.setValueAtTime(0.3, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + 0.45);
  triggerVibration([150, 60, 200]);
}

// 9. Level Complete Win Fanfare
export function playWinSound() {
  if (!isSoundEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const melody = [
    { freq: 523.25, time: 0, dur: 0.15 },     // C5
    { freq: 659.25, time: 0.15, dur: 0.15 },  // E5
    { freq: 783.99, time: 0.3, dur: 0.18 },   // G5
    { freq: 1046.50, time: 0.48, dur: 0.45 }  // C6
  ];

  melody.forEach(note => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(note.freq, ctx.currentTime + note.time);

    gain.gain.setValueAtTime(0.22, ctx.currentTime + note.time);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + note.time + note.dur);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime + note.time);
    osc.stop(ctx.currentTime + note.time + note.dur);
  });
  triggerVibration([50, 50, 100]);
}

// 10. Level Failed Comic Wah-Wah
export function playLoseSound() {
  if (!isSoundEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const notes = [
    { freq: 392.00, time: 0, dur: 0.25 },     // G4
    { freq: 369.99, time: 0.25, dur: 0.25 },  // F#4
    { freq: 349.23, time: 0.5, dur: 0.25 },   // F4
    { freq: 311.13, time: 0.75, dur: 0.6 }    // Eb4 (long sad drop)
  ];

  notes.forEach((note, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(note.freq, ctx.currentTime + note.time);
    if (idx === 3) {
      osc.frequency.linearRampToValueAtTime(240, ctx.currentTime + note.time + note.dur);
    }

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(700, ctx.currentTime + note.time);

    gain.gain.setValueAtTime(0.2, ctx.currentTime + note.time);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + note.time + note.dur);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime + note.time);
    osc.stop(ctx.currentTime + note.time + note.dur);
  });
  triggerVibration([100, 50, 120]);
}

// 11. Star reward sparkle
export function playStarSound(starIndex = 0) {
  if (!isSoundEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const baseFreqs = [783.99, 987.77, 1318.51]; // G5, B5, E6
  const freq = baseFreqs[starIndex] || 1046.5;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(freq, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(freq * 1.5, ctx.currentTime + 0.15);

  gain.gain.setValueAtTime(0.25, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + 0.32);
  triggerVibration([30]);
}

// 12. Gentle procedural Lullaby Background Music
// Soft music box / kalimba arpeggios that play smoothly in loop
const LULLABY_NOTES = [
  523.25, 659.25, 783.99, 1046.50, // C, E, G, C
  587.33, 698.46, 880.00, 1174.66, // D, F, A, D
  493.88, 659.25, 783.99, 987.77,  // B, E, G, B
  523.25, 659.25, 783.99, 1046.50  // C, E, G, C
];

export function startBackgroundMusic() {
  if (isMusicPlaying) return;
  if (!isMusicEnabled()) return;

  const ctx = getAudioContext();
  if (!ctx) return;

  isMusicPlaying = true;
  let step = 0;

  musicInterval = setInterval(() => {
    if (!isMusicPlaying || !isMusicEnabled()) {
      stopBackgroundMusic();
      return;
    }
    const currentCtx = getAudioContext();
    if (!currentCtx) return;

    const note = LULLABY_NOTES[step % LULLABY_NOTES.length];
    step++;

    const osc = currentCtx.createOscillator();
    const gain = currentCtx.createGain();
    const filter = currentCtx.createBiquadFilter();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(note, currentCtx.currentTime);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, currentCtx.currentTime);

    // Soft and relaxing ambient volume
    gain.gain.setValueAtTime(0.04, currentCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, currentCtx.currentTime + 0.65);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(currentCtx.destination);

    osc.start();
    osc.stop(currentCtx.currentTime + 0.7);
  }, 450);
}

export function stopBackgroundMusic() {
  if (musicInterval) {
    clearInterval(musicInterval);
    musicInterval = null;
  }
  isMusicPlaying = false;
}

