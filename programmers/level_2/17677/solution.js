function solution(str1, str2) {
  const el1 = convertArray(str1);
  const el2 = convertArray(str2);
  const intersection = getIntersection(el1.slice(), el2.slice());
  const union = getUnion(el1.slice(), el2.slice());
  if (intersection.length === 0 && union.length === 0) return 65536;

  const result = intersection.length / union.length;
  return Math.floor(result * 65536);
}

function convertArray(str) {
  const checker = /[a-zA-Z]/;
  const array = str.split("");
  return array.reduce((acc, curr, index) => {
    if (
      index === array.length - 1 ||
      !checker.test(curr) ||
      !checker.test(array[index + 1])
    )
      return acc;
    const el = curr + array[index + 1];
    return [...acc, el.toLowerCase()];
  }, []);
}

function getIntersection(el1, el2) {
  return el1.filter((el) => {
    if (el2.includes(el)) {
      el2.splice(el2.indexOf(el), 1);
      return true;
    }
    return false;
  });
}

function getUnion(el1, el2) {
  el1.forEach((el) => {
    if (el2.includes(el)) {
      el2.splice(el2.indexOf(el), 1);
    }
  });
  return [...el1, ...el2];
}
