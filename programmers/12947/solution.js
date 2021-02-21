function solution(x) {
  const array = String(x)
    .split("")
    .map((el) => +el);
  return x % array.reduce((acc, curr) => (acc += curr)) === 0;
}
