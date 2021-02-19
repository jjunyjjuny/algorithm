function solution(s) {
  const lower = s.toLowerCase().split("");

  const pArray = lower.filter((el) => el === "p");
  const yArray = lower.filter((el) => el === "y");

  return pArray.length === yArray.length;
}
