function solution(nums) {
  const result = nums.reduce((acc, num, index) => {
    for (let i = index + 1; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        const sum = num + nums[i] + nums[j];
        isDecimal(sum) ? acc++ : "";
      }
    }
    return acc;
  }, 0);
  return result;
}

function isDecimal(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (!(n % i)) return false;
  }
  return true;
}
