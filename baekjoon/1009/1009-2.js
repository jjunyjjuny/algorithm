const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  console.log(input);
  input.slice(1).forEach((line) => solution(line.split(" ")));
  process.exit();
});
function solution(line) {
  const units = getUnits(line[0]);
  const pattern = getPattern(units);
  const resultIndex = (line[1] - 1) % pattern.length;
  console.log(pattern[resultIndex]);
}
function getUnits(n) {
  const str = String(n);
  return Number(str[str.length - 1]);
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
