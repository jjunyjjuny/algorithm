function solution(numbers) {
  return numbers
    .sort((a, b) => {
      const strA = String(a);
      const strB = String(b);
      const lenA = strA.length;
      const lenB = strB.length;
      if (lenA === lenB) {
        return +strA > +strB ? -1 : 1;
      }
      if (strA[0] !== strB[0]) {
        return +strA[0] > +strB[0] ? -1 : 1;
      }
      const short = Math.min(lenA, lenB);
      for (let i = 0; i < short + 1; i++) {
        if (strA[i] === undefined) {
          return +strA[i - 1] > +strB[i] ? -1 : 1;
        }
        if (strB[i] === undefined) {
          return +strB[i - 1] > +strA[i] ? 1 : -1;
        }
        if (+strA[i] === +strB[i]) continue;
        return +strA[i] > +strB[i] ? -1 : 1;
      }
    })
    .join("");
}

// 검색해서 해결함 ..

function solution(numbers) {
  const result = numbers
    .map((el) => el + "")
    .sort((a, b) => b + a - (a + b))
    .join("");

  return result[0] === "0" ? "0" : result;
}
