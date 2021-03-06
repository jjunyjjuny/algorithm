function solution(A, B) {
  const a = A.sort((a, b) => a - b);
  const b = B.sort((a, b) => b - a);

  return a.reduce((acc, curr, index) => {
    return acc + curr * b[index];
  }, 0);
}
