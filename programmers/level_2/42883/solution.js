// function solution(number, k) {
//   let i = 0;
//   let arrayNum = number.split("").map((el) => +el);
//   while (k > 0) {
//     const partArr = arrayNum.slice(i, i + k + 1);
//     const maxIndex = getMaxIndex(partArr);
//     if (maxIndex === 0) {
//       i++;
//       continue;
//     }
//     arrayNum.splice(i, maxIndex);
//     k = k - maxIndex;
//   }
//   return arrayNum.join("");
// }

// function getMaxIndex(array) {
//   const max = Math.max(...array);
//   return array.indexOf(max);
// }

function solution(number, k) {
  const stack = [];
  const array = number.split("").map((el) => +el);
  stack.push(array.shift());
  array.forEach((num) => {
    while (stack[stack.length - 1] < num && k > 0) {
      stack.pop();
      k--;
    }
    stack.push(num);
  });
  stack.splice(stack.length - k, k);
  return stack.join("");
}

solution("4177252841", 4);
