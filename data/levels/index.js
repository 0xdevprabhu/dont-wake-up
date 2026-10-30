// Level Registry & Manager for "Don't Wake Up!"
// Adding new chapters/levels in the future is as simple as creating chapter-3.js
// and spreading it into REGISTERED_LEVELS here.

import { CHAPTER_1_LEVELS } from './chapter-1.js';
import { CHAPTER_2_LEVELS } from './chapter-2.js';

// Flattened registry of all available levels
export const ALL_LEVELS = [
  ...CHAPTER_1_LEVELS,
  ...CHAPTER_2_LEVELS
];

// Helper to get a level by its numerical ID (1 to 20)
export function getLevelById(id) {
  const numericId = parseInt(id, 10);
  return ALL_LEVELS.find(lvl => lvl.id === numericId) || ALL_LEVELS[0];
}

// Get total count of implemented levels
export function getTotalLevelsCount() {
  return ALL_LEVELS.length;
}

// Get next level id if available
export function getNextLevelId(currentId) {
  const current = parseInt(currentId, 10);
  const next = current + 1;
  const exists = ALL_LEVELS.some(lvl => lvl.id === next);
  return exists ? next : null;
}

// Helper to check if a level exists
export function hasLevel(id) {
  const numericId = parseInt(id, 10);
  return ALL_LEVELS.some(lvl => lvl.id === numericId);
}
