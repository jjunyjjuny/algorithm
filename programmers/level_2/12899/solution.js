function solution(n) {
  let result = "";
  while (n) {
    result += n % 3 === 0 ? "4" : n % 3;
    n = n % 3 === 0 ? n / 3 - 1 : parseInt(n / 3);
  }
  return result.split("").reverse().join("");
}
