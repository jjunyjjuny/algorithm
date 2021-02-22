function solution(a, b) {
  return a.reduce((acc, curr, index) => (acc += curr * b[index]), 0);
}
