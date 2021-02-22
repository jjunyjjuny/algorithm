function solution(d, budget) {
  const sortArr = d.sort((a, b) => a - b);
  let sum = 0;
  let count = 0;
  for (let i = 0; i < sortArr.length; i++) {
    if (sum + sortArr[i] <= budget) {
      count++;
      sum += sortArr[i];
    } else {
      break;
    }
  }
  return count;
}
