/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const visited = new Set();
  const keys = [0];

  while (keys.length > 0) {
    const key = keys.shift();
    visited.add(key);
    const items = rooms[key];
    items.forEach((el) => {
      if (!visited.has(el)) {
        keys.push(el);
      }
    });
  }
  return visited.size === rooms.length;
};
