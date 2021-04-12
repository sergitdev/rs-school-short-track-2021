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
  const arr = str.split('');
  const res = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count += 1;
    } else if (count === 0) {
      res.push(arr[i]);
    } else {
      res.push(`${count + 1}${arr[i]}`);
      count = 0;
    }
  }
  return res.join('');
}

module.exports = encodeLine;
