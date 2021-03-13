function solution(s) {
  let base = 0;
  if (s.length % 2) return false;

  for (let i = 0; i < s.length; i++) {
    s[i] === "(" ? base++ : base--;
    if (base < 0) return false;
  }
  return base ? false : true;
}
