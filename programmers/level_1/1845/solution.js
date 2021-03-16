function solution(nums) {
  const len = nums.length / 2;
  const set = new Set(nums);
  if (set.size > len) {
    return len;
  } else {
    return set.size;
  }
}
