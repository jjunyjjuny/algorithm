const arr = [
  [1, 1, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 1],
  [1, 1, 1, 1],
];

const arr2 = [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 1, 1, 1],
  [0, 1, 0, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1, 0, 0, 1],
  [0, 0, 0, 0, 1, 1, 1, 1],
];
const arr3 = [
  [0, 0],
  [0, 0],
];
function solution(arr) {
  const len = arr.length;
  findSquar(arr, len);
  const zero = getCount(arr, "0x");
  const one = getCount(arr, "1x");

  return [zero, one];
}
function findSquar(arr, len) {
  if (len < 1) return;
  for (let i = 0; i < arr.length; i += len) {
    for (let j = 0; j < arr.length; j += len) {
      isSquar(arr, i, j, len);
    }
  }
  findSquar(arr, len / 2);
}
function isSquar(arr, i, j, len) {
  const target = arr[i][j];
  if (target !== 1 && target !== 0) return;
  for (let x = i; x < i + len; x++) {
    for (let y = j; y < j + len; y++) {
      if (arr[x][y] !== target) return;
    }
  }
  for (let x = i; x < i + len; x++) {
    for (let y = j; y < j + len; y++) {
      arr[x][y] = -1;
    }
  }
  arr[i][j] = target + "x";
}
function getCount(arr, target) {
  return arr.reduce((acc, curr) => {
    return acc + curr.filter((el) => el === target).length;
  }, 0);
}
console.log(solution(arr3));
