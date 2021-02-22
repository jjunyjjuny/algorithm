function solution(arr) {
  const filter = new Set(arr);
  if (filter.size === 1) return [-1];
  return arr.filter((el) => el !== Math.min.apply(null, arr));
}
