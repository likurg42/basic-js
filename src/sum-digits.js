const { assert } = require('chai');
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let tempNumber = n;
  do {
    tempNumber = tempNumber
      .toString()
      .split('')
      .reduce((acc, value) => {
        acc += Number(value);
        return acc;
      }, 0);
  } while (tempNumber.toString().length > 1);

  return tempNumber;
}

module.exports = {
  getSumOfDigits,
};

getSumOfDigits(123);
