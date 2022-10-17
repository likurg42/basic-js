const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const tempNumber = n.toString().split('');
  console.log(tempNumber);
  let biggestNumber = 0;

  for (let i = 0; i < tempNumber.length; i += 1) {
    let newNumberList = [...tempNumber];
    newNumberList.splice(i, 1);

    let newNumber = Number(newNumberList.join(''));

    if (biggestNumber < newNumber) {
      biggestNumber = newNumber;
    }
  }

  return biggestNumber;
}

module.exports = {
  deleteDigit,
};

console.log(deleteDigit(152), 52);
