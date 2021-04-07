// function solution(maps) {
//   const w = maps[0].length;
//   const h = maps.length;
//   if (isBlocked(maps, w - 1, h - 1)) {
//     return -1;
//   }
//   const goal = [];
//   move(maps, 0, 0, 0, goal);

//   function move(maps, x, y, moveCount, goal) {
//     moveCount++;
//     maps[y][x] = 0;
//     if (x === maps[0].length - 1 && y === maps.length - 1) {
//       goal.push(moveCount);
//       return;
//     }
//     const newMaps = deepCopyArray(maps);

//     if (newMaps[y][x - 1]) {
//       move(newMaps, x - 1, y, moveCount, goal);
//     }
//     if (newMaps[y][x + 1]) {
//       move(newMaps, x + 1, y, moveCount, goal);
//     }
//     if (newMaps[y - 1] ? newMaps[y - 1][x] : newMaps[y - 1]) {
//       move(newMaps, x, y - 1, moveCount, goal);
//     }
//     if (newMaps[y + 1] ? newMaps[y + 1][x] : false) {
//       move(newMaps, x, y + 1, moveCount, goal);
//     }
//   }

//   return Math.min(...goal);
// }
// function isBlocked(maps, x, y) {
//   return maps[y][x - 1] + maps[y - 1][x] === 0;
// }

// function deepCopyArray(array) {
//   return array.reduce((acc, curr) => {
//     return [...acc, curr.slice()];
//   }, []);
// }

function solution(maps) {
  
}
const maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];

const maps2 = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1],
];

solution(maps);
