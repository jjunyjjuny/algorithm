function solution(arr1, arr2) {
  const height = arr1.length;
  const width = arr2[0].length;
  const result = Array.from(Array(height), () => Array(width));

  arr1.forEach((row, rowIndex) => {
    for (let i = 0; i < width; i++) {
      result[rowIndex][i] = row.reduce((acc, el, ElIndex) => {
        return acc + el * arr2[ElIndex][i];
      }, 0);
    }
  });
  return result;
}
