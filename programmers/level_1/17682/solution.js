function solution(dartResult) {
  const dart = {
    S: 1,
    D: 2,
    T: 3,
  };
  const array = dartResult.split("");

  const convert = array.reduce((acc, el, index) => {
    if (el === "*") {
      acc[acc.length - 1] ? (acc[acc.length - 1] *= 2) : "";
      acc[acc.length - 2] ? (acc[acc.length - 2] *= 2) : "";
      return acc;
    }
    if (el === "#") {
      acc[acc.length - 1] *= -1;
      return acc;
    }
    if (!isNaN(el)) {
      !isNaN(array[index - 1])
        ? (acc[acc.length - 1] = Number(String(array[index - 1]) + el))
        : acc.push(el);
      return acc;
    }
    if (isNaN(el)) {
      acc[acc.length - 1] **= dart[el];
      return acc;
    }
    return acc;
  }, []);
  return convert.reduce((acc, curr) => acc + curr);
}
