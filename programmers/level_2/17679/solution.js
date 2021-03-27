function solution(m, n, board) {
  const array = board.map((el) => el.split(""));
  let result = 0;
  let target = findRect(m, n, array);
  result += target.length;
  while (target.length > 0) {
    removeBlock(array, target);
    downBlock(array);
    target = findRect(m, n, array);
    result += target.length;
  }
  return result;
}

function findRect(height, width, array) {
  const result = [];
  for (let i = 0; i < height - 1; i++) {
    for (let j = 0; j < width - 1; j++) {
      const set = new Set([
        array[i][j],
        array[i - 1][j],
        array[i][j - 1],
        array[i - 1][j - 1],
      ]);
      if (set.size === 1 && !set.has(false)) {
        result.add(`${i}${j}`);
        result.add(`${i - 1}${j}`);
        result.add(`${i}${j - 1}`);
        result.add(`${i - 1}${j - 1}`);
      }
    }
  }
  return [...result];
}
function removeBlock(array, target) {
  const command = target.map((el) => el.split(""));
  command.forEach(([i, j]) => {
    array[i][j] = false;
  });
  return array;
}
function downBlock(array) {
  const len = array.length - 1;
  for (let i = len; i > -1; i--) {
    if (i === 0) {
      return;
    }
    array[i].forEach((block, index) => {
      if (!block) {
        let k = 1;
        let down = array[i - k][index];
        while (!down && i - k !== 0) {
          k++;
          down = array[i - k][index];
        }
        array[i - k][index] = false;
        array[i][index] = down;
      }
    });
  }
}

//// 효율성 fail 후

function solution(m, n, board) {
  const array = board.map((row) => row.split(""));
  do {
    const target = findRect(m, n, array);
    if (target.length === 0) break;
    removeBlock(array, target);
    downBlock(array);
  } while (true);
  return array.reduce((acc, row) => {
    return acc + row.filter((el) => !el).length;
  }, 0);
}
function findRect(height, width, array) {
  const result = [];
  for (let i = 0; i < height - 1; i++) {
    for (let j = 0; j < width - 1; j++) {
      const set = new Set([
        array[i][j],
        array[i + 1][j],
        array[i][j + 1],
        array[i + 1][j + 1],
      ]);
      if (set.size === 1 && !set.has(false)) {
        result.push([i, j]);
      }
    }
  }
  return result;
}
function removeBlock(array, target) {
  target.forEach(([i, j]) => {
    array[i][j] = false;
    array[i + 1][j] = false;
    array[i][j + 1] = false;
    array[i + 1][j + 1] = false;
  });
}
function downBlock(array) {
  const len = array.length - 1;
  for (let i = len; i > -1; i--) {
    if (i === 0) {
      return;
    }
    array[i].forEach((block, index) => {
      if (!block) {
        let k = 1;
        let down = array[i - k][index];
        while (!down && i - k !== 0) {
          k++;
          down = array[i - k][index];
        }
        array[i - k][index] = false;
        array[i][index] = down;
      }
    });
  }
}
