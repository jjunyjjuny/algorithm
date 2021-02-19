function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false;
  const array = s.split("");
  const filter = array.filter((el) => {
    return !isNaN(parseInt(el));
  });
  return array.length === filter.length;
}
