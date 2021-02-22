function solution(n) {
  const array = String(n).split("");
  return array.reduce((acc, curr) => {
    return (acc += Number(curr));
  }, 0);
}
