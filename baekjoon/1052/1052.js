const fs = require("fs");
const stdin = fs.readFileSync("./stdin").toString().split(" ");

// stdin, stdout을 필요한 형태로 변형(숫자로 바꾸거나 배열로 바꾸거나 등)
const inputs = stdin.map((el) => +el);

// 실제 정답 코드 작성란
const arr = [];
let n = inputs[0];
let k = inputs[1];

while (n > 0) {
  const max = findMax(n);
  arr.push(max);
  n -= max;
}

let res = 0;
if (arr.length > k) {
  res =
    arr[k - 1] -
    arr.slice(k).reduce((acc, curr) => {
      return acc + curr;
    });
}

console.log(res);

function findMax(n) {
  let remind = 1;
  while (remind * 2 <= n) {
    remind *= 2;
  }
  return remind;
}
