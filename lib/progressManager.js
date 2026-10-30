// LocalStorage Progress & Settings Manager

const STORAGE_KEY_PROGRESS = 'dont_wake_up_progress';
const STORAGE_KEY_SETTINGS = 'dont_wake_up_settings';

const DEFAULT_SETTINGS = {
  sound: true,
  music: true,
  vibration: true
};

const DEFAULT_PROGRESS = {
  unlockedLevels: [1],
  completedLevels: [],
  levelData: {}, // { [levelId]: { stars: 3, score: 950, completed: true } }
  totalStars: 0,
  highScore: 0
};

export function getProgress() {
  if (typeof window === 'undefined') return DEFAULT_PROGRESS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PROGRESS);
    if (!raw) return DEFAULT_PROGRESS;
    const data = JSON.parse(raw);
    return {
      unlockedLevels: Array.isArray(data.unlockedLevels) ? data.unlockedLevels : [1],
      completedLevels: Array.isArray(data.completedLevels) ? data.completedLevels : [],
      levelData: data.levelData || {},
      totalStars: typeof data.totalStars === 'number' ? data.totalStars : 0,
      highScore: typeof data.highScore === 'number' ? data.highScore : 0
    };
  } catch (err) {
    console.error('Failed to read progress from LocalStorage:', err);
    return DEFAULT_PROGRESS;
  }
}

export function saveLevelProgress(levelId, stars, score) {
  if (typeof window === 'undefined') return DEFAULT_PROGRESS;
  try {
    const current = getProgress();
    const nextLevelId = levelId + 1;

    // Ensure levelId is marked unlocked
    const unlockedSet = new Set(current.unlockedLevels);
    unlockedSet.add(levelId);
    unlockedSet.add(nextLevelId);

    // Completed list
    const completedSet = new Set(current.completedLevels);
    completedSet.add(levelId);

    // Update level data (store highest stars and best score)
    const existing = current.levelData[levelId] || { stars: 0, score: 0 };
    const bestStars = Math.max(existing.stars || 0, stars);
    const bestScore = Math.max(existing.score || 0, score);

    const updatedLevelData = {
      ...current.levelData,
      [levelId]: {
        stars: bestStars,
        score: bestScore,
        completed: true,
        updatedAt: Date.now()
      }
    };

    // Calculate total stars across all levels
    let totalStars = 0;
    let totalScore = 0;
    Object.values(updatedLevelData).forEach(item => {
      totalStars += item.stars || 0;
      totalScore += item.score || 0;
    });

    const newProgress = {
      unlockedLevels: Array.from(unlockedSet),
      completedLevels: Array.from(completedSet),
      levelData: updatedLevelData,
      totalStars,
      highScore: Math.max(current.highScore, totalScore)
    };

    localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(newProgress));
    return newProgress;
  } catch (err) {
    console.error('Failed to save progress to LocalStorage:', err);
    return DEFAULT_PROGRESS;
  }
}

export function isLevelUnlocked(levelId) {
  if (levelId === 1) return true;
  const progress = getProgress();
  return progress.unlockedLevels.includes(levelId);
}

export function getLevelRecord(levelId) {
  const progress = getProgress();
  return progress.levelData[levelId] || { stars: 0, score: 0, completed: false };
}

export function getSettings() {
  if (typeof window === 'undefined') return DEFAULT_SETTINGS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_SETTINGS);
    if (!raw) return DEFAULT_SETTINGS;
    return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
  } catch (err) {
    console.error('Failed to read settings:', err);
    return DEFAULT_SETTINGS;
  }
}

export function saveSettings(newSettings) {
  if (typeof window === 'undefined') return;
  try {
    const current = getSettings();
    const updated = { ...current, ...newSettings };
    localStorage.setItem(STORAGE_KEY_SETTINGS, JSON.stringify(updated));
    return updated;
  } catch (err) {
    console.error('Failed to save settings:', err);
    return DEFAULT_SETTINGS;
  }
}

export function resetAllProgress() {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(STORAGE_KEY_PROGRESS);
    return DEFAULT_PROGRESS;
  } catch (err) {
    console.error('Failed to reset progress:', err);
  }
}

