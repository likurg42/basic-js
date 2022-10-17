const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity, inAge) {
  if (typeof sampleActivity !== 'string' || sampleActivity === undefined) {
    return false;
  }

  const activity = Number(sampleActivity);

  if (Number.isNaN(activity)) {
    return false;
  }

  if (activity >= 15 || activity <= 0) {
    return false;
  }

  const n = Math.log(MODERN_ACTIVITY / activity);

  const elapsedTime = Math.ceil(n / (0.693 / HALF_LIFE_PERIOD));

  return elapsedTime;
}

module.exports = {
  dateSample,
};

console.log();
