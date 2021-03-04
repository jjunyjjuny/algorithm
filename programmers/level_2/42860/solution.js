function solution(name) {
  const str = "A".repeat(name.length);
  let cal = calDiff(str, name);
  const array = name.split("").map((el) => (el === "A" ? false : true));
  const moveCount = getMoveCount(array);
  return cal + moveCount;
}
function calDiff(a, b) {
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    const numA = a.charCodeAt(i);
    const numB = b.charCodeAt(i);
    const diff = numB > (65 + 90) / 2 ? 90 - numB + 1 : numB - numA;
    result += diff;
  }
  return result;
}
function getMoveCount(array) {
  const indexes = getLens(array);
  const filter = indexes.filter((el) => !isNaN(el) && el > 0);
  return Math.min(...filter);
}
function continueA(array, currentIndex) {
  let repeat = 0;
  for (let i = currentIndex; i < array.length; i++) {
    if (!array[i]) {
      repeat++;
    } else {
      break;
    }
  }
  return repeat;
}
function getLens(array) {
  let lastTrue = 0;
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i]) lastTrue = i;
    break;
  }
  let firstX = 0;
  for (let i = 0; i < array.length; i++) {
    if (!array[i]) firstX = i;
  }
  let max = 0;
  const longA = array.reduce((acc, curr, index) => {
    if (curr) return acc;
    const cA = continueA(array, index);
    if (cA > max) {
      max = cA;
      return [index, index + max - 1];
    }
    return acc;
  }, []);
  const [i, j] = longA;

  return [
    lastTrue,
    firstX,
    i * 2 + array.length - j,
    i + (array.length - j) * 2,
  ];
}

/// 절반도 통과 못 함 

