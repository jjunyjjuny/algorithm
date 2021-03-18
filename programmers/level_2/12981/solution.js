function solution(n, words) {
  let failIndex = 0;
  const used = [];
  for (let i = 1; i < words.length; i++) {
    const prev = words[i - 1];
    used.push(prev);
    const curr = words[i];
    if (prev[prev.length - 1] !== curr[0] || used.includes(curr)) {
      failIndex = i;
      break;
    }
  }
  if (!failIndex) return [0, 0];
  return [(failIndex % n) + 1, Math.ceil((failIndex + 1) / n)];
}
