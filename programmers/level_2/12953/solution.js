function solution(arr) {
  return arr.reduce((acc, curr) => {
    return getLCM(acc, curr);
  });
}

function getLCM(a, b) {
  let result = Math.max(a, b);
  while (true) {
    if (!(result % a) && !(result % b)) break;
    result++;
  }
  return result;
}
