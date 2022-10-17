const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = [];
  let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i - 1] === str[i]) {
      count += 1;
      result.pop();
      result.push(`${count}${str[i]}`);
    } else {
      count = 1;
      result.push(str[i]);
    }
  }

  result = result.join('');
  return result;
}

module.exports = {
  encodeLine,
};
