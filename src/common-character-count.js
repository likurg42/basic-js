const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if (typeof s1 !== 'string' || typeof s2 !== 'string') {
    return false;
  }

  [...s1List] = s1;
  [...s2List] = s2;

  let count = 0;

  for (let i = 0, j = 0; i < s1List.length; i += 1) {
    if (s2List.includes(s1List[i])) {
      count += 1;
      s2List.splice(s2List.indexOf(s1List[i]), 1);
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount,
};

console.log(getCommonCharacterCount('aabcc', 'adcaa'));
