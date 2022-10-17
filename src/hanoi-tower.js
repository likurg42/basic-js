const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disks, turnSpeed) {
  let numOfTurns = 0;

  for (let i = 0; i < disks; i += 1) {
    numOfTurns = numOfTurns * 2 + 1;
  }

  const numOfTurnsInSeconds = Math.floor(
    (numOfTurns / (turnSpeed / 60.0)) * 60 * (1 + Number.EPSILON)
  );

  return {
    turns: numOfTurns,
    seconds: numOfTurnsInSeconds,
  };
}

module.exports = {
  calculateHanoi,
};
