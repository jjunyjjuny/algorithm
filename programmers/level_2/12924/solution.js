function solution(n) {
  const divisor = getDivisor(n);
  return divisor.filter((el) => el % 2 !== 0).length + 1;
}

function getDivisor(n) {
  const divisor = [];
  for (let i = 2; i <= n; i++) {
    n % i ? null : divisor.push(i);
  }
  return divisor;
}
