function solution(numbers) {
  var answer = [];
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      count++;
      const result = numbers[i] + numbers[j];
      if (answer.indexOf(result) === -1) {
        answer.push(result);
      }
    }
  }
  console.log(count);
  return answer.sort((a, b) => a - b);
}
