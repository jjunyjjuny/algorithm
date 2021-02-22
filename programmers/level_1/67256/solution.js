function solution(numbers, hand) {
  const current = {
    left: "10",
    right: "12",
  };

  return numbers
    .map((el) => {
      const num = el !== 0 ? el : 11;
      if ([1, 4, 7].includes(num)) {
        current.left = num;
        return "L";
      }
      if ([3, 6, 9].includes(num)) {
        current.right = num;
        return "R";
      }
      console.log(" ");
      if (calDistance(current.left, num) < calDistance(current.right, num)) {
        current.left = num;
        return "L";
      } else if (
        calDistance(current.left, num) > calDistance(current.right, num)
      ) {
        current.right = num;
        return "R";
      }
      if (hand === "right") {
        current.right = num;
        return "R";
      } else {
        current.left = num;
        return "L";
      }
    })
    .join("");
}
function calDistance(a, b) {
  const x1 = parseInt((a - 1) / 3);
  const y1 = (a - 1) % 3;
  const x2 = parseInt((b - 1) / 3);
  const y2 = (b - 1) % 3;
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}
