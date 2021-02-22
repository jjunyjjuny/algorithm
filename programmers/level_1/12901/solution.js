function solution(a, b) {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let sumDay = 4 + b;

  for (let i = 1; i < a; i++) {
    sumDay += new Date(2016, i, 0).getDate();
  }
  return days[sumDay % 7];
}
