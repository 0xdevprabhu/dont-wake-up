// Scoring & Stars Calculation System

export function calculateScoreAndStars({
  peakNoise = 0,
  finalNoise = 0,
  elapsedSeconds = 0,
  hintsUsed = 0,
  mistakes = 0
}) {
  // Determine Stars:
  // 3 Stars: stealth master (peak noise < 40 and final noise <= 25)
  // 2 Stars: careful stealth (peak noise < 75 and final noise <= 60)
  // 1 Star: barely made it without waking up
  let stars = 1;
  if (peakNoise <= 40 && finalNoise <= 30) {
    stars = 3;
  } else if (peakNoise <= 75 && finalNoise <= 65) {
    stars = 2;
  } else {
    stars = 1;
  }

  // Base score 1000
  const noisePenalty = Math.round(peakNoise * 3.5);
  const timePenalty = Math.min(250, Math.round(elapsedSeconds * 3));
  const hintPenalty = hintsUsed * 50;
  const mistakePenalty = mistakes * 60;

  let totalScore = 1000 - noisePenalty - timePenalty - hintPenalty - mistakePenalty;
  if (totalScore < 150) totalScore = 150;
  if (stars === 3 && totalScore < 700) totalScore = 700;
  if (stars === 2 && totalScore < 450) totalScore = 450;

  return {
    stars,
    score: totalScore,
    peakNoise,
    elapsedSeconds,
    hintsUsed
  };
}
