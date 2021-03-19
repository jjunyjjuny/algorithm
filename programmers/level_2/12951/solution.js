function solution(s) {
  const array = s.toLowerCase().split("");
  return array.reduce((acc, curr, index) => {
    if (!index || array[index - 1] === " ") {
      return acc + curr.toUpperCase();
    }
    return acc + curr;
  }, "");
}
