function solution(numbers) {
  const array = numbers.split("").map((el) => +el);
  let count = 0;
  console.log();
  for (let i = 2; i < 10 ** numbers.length; i++) {
    isIncludes(i, array) && isPrime(i) ? count++ : "";
  }
  return count;
}

function isPrime(n) {
  if (n === 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
function isIncludes(n, array) {
  const strArr = String(n)
    .split("")
    .map((el) => +el);
  const slice = array.slice();
  for (let i = 0; i < strArr.length; i++) {
    const index = slice.indexOf(strArr[i]);
    if (index < 0) return false;
    slice.splice(index, 1);
  }
  return true;
}
