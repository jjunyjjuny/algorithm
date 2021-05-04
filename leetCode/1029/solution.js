/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
  const sorted = costs.sort((a, b) => {
    const diffA = a[1] - a[0];
    const diffB = b[1] - b[0];
    return diffB - diffA;
  });
  console.log(sorted);
  return sorted.reduce((acc, curr, i) => {
    if (i < sorted.length / 2) {
      return (acc += curr[0]);
    } else {
      return (acc += curr[1]);
    }
  }, 0);
};
