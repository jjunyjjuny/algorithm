function solution(strings, n) {
  return strings.sort((a, b) => {
    const left = a[n];
    const right = b[n];
    if (left > right || (left === right && a > b)) return 1;
    if (left < right || (left === right && a < b)) return -1;
  });
}
