const fs = require("fs");
// const stdin = fs.readFileSync("/dev/stdin", "utf8");
const stdin = fs.readFileSync("./stdin").toString().split("\r\n");
const stdout = fs.readFileSync("./stdout").toString().split("\r\n");
// stdin, stdout을 필요한 형태로 변형(숫자로 바꾸거나 배열로 바꾸거나 등)
const inputs = stdin.map((el) => el.split(" "));
const answer = stdout;
console.log("inputs ", inputs);
// 정답으로 제출할 내용을 이곳에 모은다.
const result = [];
// 실제 정답 코드 작성란
inputs.forEach((el) => result.push(calculator(el[0], el[1])));
// 코드 작성 중 테스트

// 정답 제출

function adder(a, b, _carry) {
  if (isNaN(a)) {
    a = 0;
  }
  if (isNaN(b)) {
    b = 0;
  }
  const carry = parseInt((a + b + _carry) / 10);
  const sum = (a + b + _carry) % 10;
  return [carry, sum];
}

function calculator(a, b) {
  let _carry = 0;

  const result = [];

  const arrA = a.split("").reverse();
  const arrB = b.split("").reverse();
  const len = a.length >= b.length ? a.length : b.length;
  arrA.length = len;
  arrB.length = len;

  for (let i = 0; i < len + 1; i++) {
    const res = adder(+arrA[i], +arrB[i], _carry);
    result.unshift(res[1]);
    _carry = res[0];
  }
  if (result[0] === 0) {
    result.shift();
  }
  return result.join("");
}

testcase(result, answer);

// 정답 제출
result.forEach((ans) => console.log(ans));

function testcase(result, stdout) {
  result.forEach((ans, index) => {
    if (ans === stdout[index]) console.log(`${index} case PASS !!!`);
    else console.log(`${index} case FAIL !!! `);
  });
}
