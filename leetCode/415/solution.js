/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let i1 = num1.length - 1;
  let i2 = num2.length - 1;
  const long = Math.max(i1, i2);
  let carry = 0;
  result = "";
  for (let i = 0; i <= long; i++) {
    const sum = +(num1[i1] ?? 0) + +(num2[i2] ?? 0) + carry;
    const [a, b] = divmod(sum, 10);
    carry = a;
    result = b + result;
    i1--;
    i2--;
  }
  return (carry > 0 ? carry : "") + result;
};

function divmod(a, b) {
  return [parseInt(a / b), a % b];
}
