const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  if (Date.prototype.toString !== date.toString) {
    throw Error('Invalid date!');
  }

  if (!Date.parse(date)) {
    throw Error('Invalid date!');
  }

  date = new Date(date.getTime());
  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  const seasonIndex = Math.floor(((date.getMonth() + 1) / 12) * 4) % 4;
  return seasons[seasonIndex];
}

module.exports = {
  getSeason,
};
