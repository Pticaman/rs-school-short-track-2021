/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

function sortByHeight(arr) {
  const a = arr.filter((x) => x !== -1);
  const b = a.sort((x, y) => x - y);
  const c = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) c.push(-1);
    if (arr[i] !== -1) {
      c.push(b[0]);
      b.shift();
    }
  }
  return c;
}

module.exports = sortByHeight;
