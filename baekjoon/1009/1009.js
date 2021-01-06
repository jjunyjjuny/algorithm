const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");
const inputs = stdin.map((el) => el.split(" ").map((el) => +el));
// 정답으로 제출할 내용을 이곳에 모은다.
const count = inputs[0][0] + 1;

// 실제 정답 코드 작성란

for (let i = 1; i < count; i++) {
  const units = getUnits(inputs[i][0]);
  const pattern = getPattern(units);
  const resultIndex = (inputs[i][1] - 1) % pattern.length;
  console.log(pattern[resultIndex]);
}

// 정답 제출

function getUnits(n) {
  const str = String(n);
  const res = Number(str[str.length - 1]);
  return res !== 0 ? res : 10;
}
function getPattern(n) {
  const pattern = [];
  let first = n;
  do {
    pattern.push(getUnits(first));
    first *= n;
  } while (!pattern.includes(getUnits(first)));
  {
  }
  return pattern;
}