// https://programmers.co.kr/learn/courses/30/lessons/64061?language=javascript
// 크레인 인형뽑기 게임

// before
// function solution(board, moves) {
//   let answer = 0;
//   const basket = [];

//   moves.forEach((order) => {
//     board.every((row) => {
//       const result = game(row, order);
//       if (result !== 0) {
//         basket.unshift(result);
//         const confirm = confirmBasket(basket);
//         if (confirm) {
//           answer += 2;
//         }
//         return false;
//       } else {
//         return true;
//       }
//     });
//   });
//   return answer;
// }

// function game(row, order) {
//   if (row[order - 1] !== 0) {
//     const result = row[order - 1];
//     row[order - 1] = 0;
//     console.log(`result: ${result}`);
//     return result;
//   } else {
//     return 0;
//   }
// }
// function confirmBasket(basket) {
//   if (basket[0] === basket[1]) {
//     basket.shift();
//     basket.shift();
//     return true;
//   } else {
//     return false;
//   }
// }

// after
function solution(board, moves) {
  const stack = reverseDirection(board).map((column) =>
    column.filter((el) => el !== 0)
  );
  console.log(stack);
  let basket = [];
  const score = moves.reduce((count, order) => {
    if (stack[order - 1].length === 0) return count;
    const doll = stack[order - 1].shift();
    if (basket[basket.length - 1] === doll) {
      count += 2;
      basket.pop();
    } else {
      basket.push(doll);
    }
    return count;
  }, 0);
  return score;
}

function reverseDirection(array) {
  const newArray = Array.from(Array(array.length), () =>
    new Array(array.length).fill(null)
  );
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      newArray[i][j] = array[j][i];
    }
  }
  return newArray;
}
function checkBasket(basket, doll) {
  if (basket.slice().pop() === doll) {
    return true;
  } else {
    return false;
  }
}
console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
