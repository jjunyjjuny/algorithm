function solution(n, a, b) {
  let result = getRound(n);
  let left = 1;
  let right = n;
  let pivot;
  const max = Math.max(a, b);
  const min = Math.min(a, b);
  while (true) {
    pivot = (left + right) / 2;
    if (min <= pivot && max > pivot) {
      break;
    }
    if (min <= pivot && max <= pivot) {
      right = pivot;
    } else if (min > pivot && max > pivot) {
      left = pivot;
    }
    result--;
  }
  return result;
}

function getRound(n) {
  let result = 0;
  while (n > 1) {
    n = n / 2;
    result++;
  }
  return result;
}

console.log(solution(2 ** 10, 8, 9));
