/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new score board with an initial entry.
 *
 * @returns {Record<string, number>} new score board
 */
export function createScoreBoard() {
  const score = {
    'The Best Ever': 1000000
  }

  return score
}



/**
 * Adds a player to a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} score
 * @returns {Record<string, number>} updated score board
 */
export function addPlayer(scoreBoard, player, score) {
  scoreBoard[player] = score
  return scoreBoard
}

/**
 * Removes a player from a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @returns {Record<string, number>} updated score board
 */
export function removePlayer(scoreBoard, player) {
  delete scoreBoard[player]
  return scoreBoard
}


/**
 * Increases a player's score by the given amount.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} points
 * @returns {Record<string, number>} updated score board
 */
export function updateScore(scoreBoard, player, points) {
scoreBoard

scoreBoard[player] += points
return scoreBoard
}

/**
 * Applies 100 bonus points to all players on the board.
 *
 * @param {Record<string, number>} scoreBoard
 * @returns {Record<string, number>} updated score board
 */
export function applyMondayBonus(scoreBoard) {
  // Iterate over each player in the scoreBoard
  for (const player in scoreBoard) {
    // Add 100 bonus points to each player's score
    scoreBoard[player] += 100;
  }
  // Return the updated scoreBoard object
  return scoreBoard;
}

export function normalizeScore(params) {
  const { score, normalizeFunction } = params;
  return normalizeFunction(score);
}
