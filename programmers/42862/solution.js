function solution(n, lost, reserve) {
  const student = [];
  for (let i = 1; i < n + 1; i++) {
    student.push(1);
    if (reserve.includes(i)) {
      student[i - 1]++;
    }
    if (lost.includes(i)) {
      student[i - 1]--;
    }
  }
  for (let i = 0; i < n; i++) {
    if (!student[i]) {
      if (student[i - 1] === 2) {
        student[i]++;
        student[i - 1]--;
      } else if (student[i + 1] === 2) {
        student[i]++;
        student[i + 1]--;
      }
    }
  }

  console.log(student);
  return student.filter((n) => n > 0).length;
}
