function solution(n, t, m, p) {
  let result = "";
  let count = 0;
  while (result.length <= t * m) {
    result += count.toString(n);
    count++;
  }
  let answer = "";
  for (let i = p - 1; i < t * m; i += m) {
    answer += result[i];
  }
  return answer.toUpperCase();
}

function getN(target, n) {
  if (!target) return "0";
  let result = "";
  while (target > 0) {
    result = (target % n) + result;
    target = parseInt(target / n);
  }
  return result;
}
