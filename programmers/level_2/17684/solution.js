function solution(msg) {
  const dic = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const array = msg.split("");
  const answer = [];

  while (array.length > 0) {
    console.log(array);
    let stack = "";
    do {
      const char = array.shift();
      stack += char;
    } while (array.length > 0 && dic.includes(stack + array[0]));
    answer.push(dic.indexOf(stack) + 1);
    array.length > 0 ? dic.push(stack + array[0]) : null;
  }
  return answer;
}

const msg = "TOBEORNOTTOBEORTOBEORNOT";
console.log(solution(msg));
