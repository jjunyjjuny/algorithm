function solution(s) {
  const len = s.length;
  const mid = parseInt(len / 2);
  return len % 2 === 0 ? s.substr(mid - 1, 2) : s.substr(mid, 1);
}
