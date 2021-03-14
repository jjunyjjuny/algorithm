function solution(s) {
  const slice = s.slice(2, s.length - 2);
  const array = slice.replace(/},{/g, ",").split(",");
  const count = array.reduce((acc, curr) => {
    if (curr in acc) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  const set = [...new Set(array)].map((el) => +el);
  return set.sort((a, b) => count[b] - count[a]);
}
