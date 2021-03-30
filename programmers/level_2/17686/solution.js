function solution(files) {
  const convert = files.map((file) => splitName(file));
  convert.sort((a, b) => {
    const [headA, numberA] = a;
    const [headB, numberB] = b;

    if (headA.toLowerCase() === headB.toLowerCase()) {
      if (+numberA === +numberB) {
        return 1;
      }
      return +numberA > +numberB ? 1 : -1;
    }
    return headA.toLowerCase() > headB.toLowerCase() ? 1 : -1;
  });
  return convert.map((el) => el.join(""));
}

function splitName(name) {
  const array = name.split("");
  const pivotA = array.findIndex(isNum);
  const head = name.slice(0, pivotA);
  const remain = name.slice(pivotA).split("");

  const j = remain.findIndex(isStr);
  let pivotB = 0;
  console.log(j);
  if (j >= 0) {
    pivotB = j < 6 ? j + pivotA : 5 + pivotA;
  } else {
    pivotB = pivotA + 5;
  }

  const number = name.slice(pivotA, pivotB);
  const tail = name.slice(pivotB);
  return [head, number, tail];
}
function isNum(el) {
  return /[0-9]/.test(el);
}
function isStr(el) {
  return !/[0-9]/.test(el);
}
