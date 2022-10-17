const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error("'arr' parameter must be an instance of the Array!");
  }

  let result = [];

  for (let i = 0; i < arr.length; i += 1) {
    if ('--discard-next' === arr[i]) {
      if (i === arr.length - 1) {
        continue;
      }
      result.push(null);
      i += 1;
      continue;
    }

    if ('--discard-prev' === arr[i]) {
      if (i === 0) {
        continue;
      }
      result[result.length - 1] = null;
      continue;
    }

    if ('--double-next' === arr[i]) {
      if (i === arr.length - 1) {
        continue;
      }
      result.push(arr[[i + 1]]);
      continue;
    }
    if ('--double-prev' === arr[i]) {
      if (i === 0) {
        continue;
      }
      result.push(result.at(-1));
      continue;
    }
    result.push(arr[i]);
  }

  result = result.reduce((acc, value) => {
    if (value !== null) {
      acc.push(value);
    }
    return acc;
  }, []);

  return result;
}

module.exports = {
  transform,
};
