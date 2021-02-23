function solution(n, arr1, arr2) {
  const convert1 = arr1.map((row) => convertBinary(n, row));
  const convert2 = arr2.map((row) => convertBinary(n, row));

  const result = convert1.map((row, i) => {
    return row.map((el, j) => {
      if (convert2[i][j] || el) {
        return "#";
      } else {
        return " ";
      }
    });
  });
  return result.map((row) => row.join(""));
}
function convertBinary(n, number) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.unshift(number % 2);
    number = parseInt(number / 2);
  }
  return result.map((el) => Boolean(el));
}
