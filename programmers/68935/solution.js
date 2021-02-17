function solution(n) {
  let result = "";
  while (n > 0) {
    result += String(n % 3);
    n = parseInt(n / 3);
  }
  console.log(result);
  return result
    .split("")
    .reverse()
    .map((el) => Number(el))
    .reduce((acc, curr, index) => {
      return (acc += curr * 3 ** index);
    }, 0);
}
