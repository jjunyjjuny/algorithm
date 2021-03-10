function solution(n) {
  const fibonaci = [0, 1];
  for (let i = 2; i <= n; i++) {
    const fibo = fibonaci[i - 1] + fibonaci[i - 2];
    fibonaci.push(fibo % 1234567);
  }
  return fibonaci[n];
}
