const fs = require("fs");
// const stdin = fs.readFileSync("/dev/stdin", "utf8");
const stdin = fs.readFileSync("./stdin").toString().split("\r\n");
const stdout = fs.readFileSync("./stdout").toString().split("\r\n");

// stdin, stdout을 필요한 형태로 변형(숫자로 바꾸거나 배열로 바꾸거나 등)
const inputs = stdin;
const answer = stdout;

// 정답으로 제출할 내용을 이곳에 모은다.
const result = [];

// 실제 정답 코드 작성란
const pow = (a, b) => {
  return [Math.floor(a / b), a % b];
};

const input = inputs[0];

const [A, remainA] = pow(input, 300);
const [B, remainB] = pow(remainA, 60);
const [C, remainC] = pow(remainB, 10);

if (remainC !== 0) {
  result.push("-1");
} else {
  result.push(`${A} ${B} ${C}`);
}
// 코드 작성 중 테스트
testcase(result, answer);

// 정답 제출
result.forEach((ans) => console.log(ans));

function testcase(result, stdout) {
  result.forEach((ans, index) => {
    if (ans === stdout[index]) console.log(`No.${index} case PASS !!!`);
    else console.log(`No.${index} case FAIL !!! `);
  });
}
