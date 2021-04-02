function solution(dirs) {
  const record = [];
  let currentPos = "00";
  let currentX = 0;
  let currentY = 0;
  const command = {
    U: () => (currentY < 5 ? currentY++ : false),
    D: () => (currentY > -5 ? currentY-- : false),
    L: () => (currentX > -5 ? currentX-- : false),
    R: () => (currentX < 5 ? currentX++ : false),
  };
  dirs.split("").forEach((str) => {
    const prePos = currentPos;
    const move = command[str]();
    console.log("move : ", move);
    if (move === false) {
      return;
    }
    currentPos = String(currentX) + String(currentY);
    const line = combinePos(prePos, currentPos);
    if (record.includes(line)) return;
    record.push(line);
  });
  return record.length
}
function combinePos(a, b) {
  return a > b ? a + b : b + a;
}
solution("ULURRDLLU");
solution("LULLLLLLU");
