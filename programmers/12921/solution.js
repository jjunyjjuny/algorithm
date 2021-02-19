// 정확성 o 속도 x

function solution(n) {
  let array = Array.from({ length: n }, (_, i) => i + 1);
  const filterArray = array.slice();
  filterArray.length = Math.floor(Math.sqrt(n));
  filterArray.shift();
  filterArray.forEach((filter) => {
    array = array.filter((el) => el === filter || el % filter !== 0);
  });
  return array.length - 1;
}

// 다른 사람의 풀이

function solution(n) {
  let array = Array.from({ length: n }, (_, i) => i + 1);
  for (let i = 1; i * i < n; i++) {
    if (array[i]) {
      let num = array[i];
      for (let j = num * num; j <= n; j += num) {
        array[j - 1] = 0;
      }
    }
  }
  const answer = array.filter((number) => number);
  answer.shift();
  return answer.length;
}
