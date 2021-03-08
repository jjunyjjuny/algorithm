// 첫 번쨰 풀이, 런타임에러나 실패 등등 18점 나왔음 ;;
function solution(board) {
  let currentLongestWidth = 0;
  board.forEach((row, columnIndex) => {
    if (columnIndex === board.length - 1) return;
    row.forEach((el, rowIndex) => {
      if (el) {
        const width = getWidth(row, rowIndex);
        if (width < currentLongestWidth) return;
        if (isSquare(board, columnIndex, rowIndex, width)) {
          currentLongestWidth = width;
        }
      }
    });
  });
  console.log(currentLongestWidth);
  return currentLongestWidth ** 2;
}
function getWidth(row, currentIndex) {
  let width = 0;
  while (row[currentIndex]) {
    width++;
    currentIndex++;
  }
  return width;
}
function isSquare(array, columnIndex, rowIndex, width) {
  console.log("is?");
  for (let i = columnIndex; i < columnIndex + width; i++) {
    for (let j = rowIndex; j < rowIndex + width; j++) {
      console.log(i, j);
      if (!array[i][j]) return false;
    }
  }
  return true;
}

// 검색해서 이해한 풀이

function solution(board) {
  const lenX = board[0].length;
  const lenY = board.length;
  let max = 0;

  if (lenX < 2 || lenY < 2) return 1;

  for (let i = 1; i < lenY; i++) {
    for (let j = 1; j < lenX; j++) {
      if (board[i][j]) {
        const min = Math.min(
          board[i - 1][j],
          board[i][j - 1],
          board[i - 1][j - 1]
        );
        board[i][j] = min + 1;
        max = Math.max(min + 1, max);
      }
    }
  }
  return max ** 2;
}
