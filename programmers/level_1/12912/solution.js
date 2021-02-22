function solution(a, b) {
  if (a === b) return a;
  const [min, max] = [a, b].sort((a, b) => a - b);
  return ((min + max) * (max - min + 1)) / 2;
}
