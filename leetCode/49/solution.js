/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const obj = strs.reduce((acc, curr) => {
    const key = curr.split("").sort().join("");
    if (key in acc) {
      acc[key].push(curr);
    } else {
      acc[key] = [curr];
    }
    return acc;
  }, {});
  return Object.values(obj);
};
