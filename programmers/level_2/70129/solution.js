function solution(s) {
  let convert = s.split("").map((el) => +el);
  let count = 0;
  let removed = 0;
  while (convert.length > 1) {
    count++;
    const prevLen = convert.length;
    convert = convert.filter((el) => el);
    const nextLen = convert.length;
    removed += prevLen - nextLen;
    convert = getBinary(nextLen);
  }
  return [count, removed];
}
function getBinary(len) {
  const result = [];
  while (len >= 1) {
    result.unshift(len % 2);
    len = Math.floor(len / 2);
  }
  return result;
}
