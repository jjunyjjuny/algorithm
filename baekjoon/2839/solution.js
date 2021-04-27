const fs = require("fs");
// const stdin = fs.readFileSync("/dev/stdin", "utf8");
const stdin = fs.readFileSync("./stdin").toString().split("\r\n");
const stdout = fs.readFileSync("./stdout").toString().split("\r\n");

// stdin, stdout을 필요한 형태로 변형(숫자로 바꾸거나 배열로 바꾸거나 등)
const inputs = stdin;
const answer = stdout;

// 정답으로 제출할 내용을 이곳에 모은다.
const result = [];
let base = Number(inputs[0]);
let five = parseInt(base / 5);
base = base % 5;

let three = 0;

while (five >= 0) {
  if (isMultipleOfThree(base)) {
    three = parseInt(base / 3);
    break;
  }
  five--;
  base += 5;
}
if (five < 0) {
  result.push(-1);
} else {
  result.push(five + three);
}
function isMultipleOfThree(num) {
  return num % 3 === 0;
}

// 실제 정답 코드

// 코드 작성 중 테스트
testcase(result, answer);

// 정답 제출
result.forEach((ans) => console.log(ans));

function testcase(result, stdout) {
  result.forEach((ans, index) => {
    if (ans === stdout[index]) console.log(`${index} case PASS !!!`);
    else console.log(`${index} case FAIL !!! `);
  });
}
