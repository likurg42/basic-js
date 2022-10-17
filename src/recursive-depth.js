const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {}
  calculateDepth(arr) {
    const goDeep = (value) => {
      return Array.isArray(value) ? 1 + Math.max(0, ...value.map(goDeep)) : 0;
    };

    return goDeep(arr);
  }
}

module.exports = {
  DepthCalculator,
};
const instance = new DepthCalculator();
const calculateDepth = instance.calculateDepth.bind(instance);

calculateDepth([
  1,
  [8, [[]]],
  [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]],
  2,
  3,
  [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]],
  [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]],
  4,
  5,
  ['6575', ['adas', ['dfg', [0]]]],
]);
