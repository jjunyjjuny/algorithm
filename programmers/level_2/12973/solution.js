// function solution(s) {
//     const array = s.split("");
//     let i = 0;
//     while (i !== array.length) {
//       if (array[i] === array[i + 1]) {
//         array.splice(i, 2);
//       } else if (array[i] === array[i - 1]) {
//         array.splice(i - 1, 2);
//         i--;
//       } else {
//         i++;
//       }
//     }
//     return array.length > 0 ? 0 : 1;
//   }

function solution(s) {
  const stack = [s[0]];
  for (let i = 1; i < s.length; i++) {
    if (s[i] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length > 0 ? 0 : 1;
}

console.log(solution("baabaaaa"));
