// 예전에 풀었던 풀이 (통과x)
function solution(brown, yellow) {
  const sum = brown + yellow;
  var answer = [];
  const arr = [];
  for (let i = 1; i < sum + 1; i++) {
    if (sum % i === 0) {
      arr.push(i);
    }
  }
  const len = arr.length;
  if (len % 2 === 0) {
    answer = arr.splice(len / 2 - 1, 2).reverse();
  } else {
    const mid = arr.splice(len / 2, 1)[0];
    answer.push(mid);
    answer.push(mid);
  }
  console.log(answer);
  return answer;
}

// 2021.03.07 풀이

function solution(brown, yellow) {
  const array = [];
  const total = brown + yellow;
  for (let i = 1; i <= Math.sqrt(yellow); i++) {
    if (!(yellow % i)) {
      array.push([yellow / i, i]);
    }
  }
  let result = [];
  for (let i = 0; i < array.length; i++) {
    const rect = array[i].map((el) => el + 2);
    if (rect[0] * rect[1] === total) {
      result = rect;
    }
  }
  return result;
}
