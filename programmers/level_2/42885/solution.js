// function solution(people, limit) {
//   people.sort((a, b) => b - a);
//   let result = 0;
//   let weight = 0;
//   let index = 0;
//   while (people.length > 0) {
//     while (people[index] + weight <= limit) {
//       weight += people[index];
//       people.shift();
//     }
//     while (people[people.length - 1] + weight <= limit) {
//       weight += people[people.length - 1];
//       people.pop();
//     }
//     weight = 0;
//     result++;
//   }
//   return result;
// }

function solution(people, limit) {
  people.sort((a, b) => b - a);
  let left = 0;
  let right = people.length - 1;
  let count = 0;
  while (left <= right) {
    if (people[left] + people[right] > limit) {
      left++;
    } else {
      left++;
      right--;
    }
    count++;
  }
  return count;
}

console.log(solution([80, 70, 50, 50, 10, 10], 90));
