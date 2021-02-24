function solution(priorities, location) {
  let targetIndex = location;
  let count = 0;
  while (priorities.length > 0) {
    const shift = priorities.shift();
    count++;
    if (targetIndex === 0 && Math.max(...priorities) <= shift) break;
    targetIndex--;
    if (shift < Math.max(...priorities)) {
      priorities.push(shift);
      count--;
    }
    if (targetIndex < 0) targetIndex = priorities.length - 1;
  }

  return count;
}
