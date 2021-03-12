function solution(s) {
  const array = s.split(" ");
  const min = Math.min(...array);
  const max = Math.max(...array);
  return `${min} ${max}`;
}
