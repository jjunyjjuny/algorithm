function solution(n) {
  const start = convertBinary(n);
  let i = n + 1;
  let result = convertBinary(i);
  while (result !== start) {
    result = convertBinary(++i);
  }
  return i;
}

function convertBinary(n) {
  let result = "";
  while (n > 0) {
    result += String(n % 2);
    n = Math.floor(n / 2);
  }
  return result.split("").filter((el) => el === "1").length;
}
