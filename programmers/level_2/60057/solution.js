function solution(s) {
  if (s.length === 1) return s.length;
  const divisor = Array.from({ length: s.length / 2 }, (_, i) => i + 1);
  const convert = divisor.map((el) => diviseStr(s, el));
  const result = convert.reduce((acc, el) => {
    let count = 1;
    acc.push(
      el.reduce((acc2, el2, index) => {
        if (el2 === el[index + 1]) {
          count++;
        } else {
          count > 1 ? (acc2 += count + el2) : (acc2 += el2);
          count = 1;
        }
        return acc2;
      }, "")
    );
    return acc;
  }, []);
  return Math.min(...result.map((el) => el.length));
}

function diviseStr(str, len) {
  const result = [];
  for (let i = 0; i < str.length; i += len) {
    result.push(str.slice(i, i + len));
  }
  return result;
}

solution("abcabcdede");
