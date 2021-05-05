/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const array = s.match(/[a-zA-Z0-9]/g);

  if (!array) return true;

  const filter = array.map((el) => el.toLowerCase());
  const reverse = filter.slice().reverse();

  return filter.join("") === reverse.join("");
};
