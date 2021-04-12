/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let res;
  let first = 0;
  let last = array.length - 1;
  while (first <= last) {
    const center = Math.floor((first + last) / 2);
    if (array[center] === value) {
      res = center;
    }
    if (array[center] > value) {
      last = center - 1;
    } else {
      first = center + 1;
    }
  }
  return res;
}

module.exports = findIndex;
