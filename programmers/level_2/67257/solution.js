function solution(expression) {
  const array = expression.match(/(?:\d+|[*+-\/])/g);
  const commands = [
    ["*", "+", "-"],
    ["*", "-", "+"],
    ["+", "*", "-"],
    ["+", "-", "*"],
    ["-", "+", "*"],
    ["-", "*", "+"],
  ];
  const result = commands.reduce((acc, command) => {
    const res = getResultByCommand(array.slice(), command);
    acc.push(Math.abs(res));
    return acc;
  }, []);
  return Math.max(...result);
}
function getResultByCommand(array, command) {
  const [fir, sec, thi] = command;
  while (array.includes(fir)) {
    const i = array.indexOf(fir) - 1;
    const target = array.splice(i, 3);
    const res = cal(target);
    array.splice(i, 0, res);
  }
  while (array.includes(sec)) {
    const i = array.indexOf(sec) - 1;
    const target = array.splice(i, 3);
    const res = cal(target);
    array.splice(i, 0, res);
  }
  while (array.includes(thi)) {
    const i = array.indexOf(thi) - 1;
    const target = array.splice(i, 3);
    const res = cal(target);
    array.splice(i, 0, res);
  }

  return array[0];
}
function cal([num1, type, num2]) {
  if (type === "*") return +num1 * +num2;
  if (type === "+") return +num1 + +num2;
  if (type === "-") return +num1 - +num2;
}

const str = "100-200*300-500+20";
console.log(solution(str));
