function solution(arr1, arr2) {
  return arr1.map((arr, i) => arr.map((el, j) => el + arr2[i][j]));
}
