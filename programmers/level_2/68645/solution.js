function solution(n) {
  const tri = Array.from({ length: n }, (_, i) => new Array(i + 1).fill(0));
  let x = 0;
  let y = 0;
  let direction = "down";
  for (let i = 1; i <= ((1 + n) / 2) * n; i++) {
    tri[x][y] = i;
    if (direction === "down") {
      if (x + 1 < n && tri[x + 1][y] === 0) {
        x++;
      } else {
        direction = "right";
        y++;
      }
    } else if (direction === "right") {
      if (y + 1 < tri[x].length && tri[x][y + 1] === 0) {
        y++;
      } else {
        direction = "up";
        x--;
        y--;
      }
    } else if (direction === "up") {
      if (tri[x - 1][y - 1] === 0) {
        x--;
        y--;
      } else {
        direction = "down";
        x++;
      }
    }
  }
  return tri.reduce((acc, curr) => {
    curr.forEach((el) => acc.push(el));
    return acc;
  }, []);
}
