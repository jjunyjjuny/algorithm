/**
 * @param {string} s
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function (s, cost) {
  let type = s[0];
  let max = cost[0];
  let result = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] !== type) {
      type = s[i];
      max = 0;
    }
    if (cost[i] > max) {
      result += max;
      max = cost[i];
    } else {
      result += cost[i];
    }
  }
  return result;
};
