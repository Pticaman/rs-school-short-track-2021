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
  const arrFilt = arr.filter((a) => a !== -1);
  const arrSort = arrFilt.sort((a, b) => a - b);
  const arr1 = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) arr1.push(-1);
    if (arr[i] !== -1) {
      arr1.push(arrSort[0]);
      arrSort.shift();
    }
  }

  return arr1;
}

module.exports = sortByHeight;
