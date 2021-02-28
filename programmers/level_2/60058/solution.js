function solution(p) {
  if (p.length === 0) return "";
  if (isWriteStr(p)) return p;

  const [u, v] = divise(p);
  if (isWriteStr(u)) {
    return u + solution(v);
  } else {
    return convert(u, v);
  }
}
function convert(u, v) {
  const str = "(" + solution(v) + ")";
  const reverseU = u
    .slice(1, u.length - 1)
    .split("")
    .map((el) => {
      return el === ")" ? "(" : ")";
    })
    .join("");
  return str + reverseU;
}
function divise(p) {
  const index = getDiviseIndex(p);
  const u = p.slice(0, index);
  const v = p.slice(index);

  return [u, v];
}

function getDiviseIndex(p) {
  let uCount = 0;
  let vCount = 0;
  let index = 0;
  do {
    p[index] === "(" ? uCount++ : vCount++;
    index++;
  } while (uCount !== vCount);
  return index;
}
function isWriteStr(p) {
  const array = p.split("");
  let isWrite = 0;
  for (let i = 0; i < array.length; i++) {
    array[i] === "(" ? isWrite++ : isWrite--;
    if (isWrite < 0) return false;
  }
  return true;
}
