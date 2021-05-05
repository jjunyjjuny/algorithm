/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;
  let results = move(s, left, right);
  const leftResult = move(s, results[1] + 1, results[2]);
  const rightResult = move(s, results[1], results[2] - 1);
  if (results[0] || leftResult[0] || rightResult[0]) {
    return true;
  }
  return false;
};

var move = function (s, left, right) {
  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      return [false, left, right];
    }
  }
  return [true, left, right];
};
