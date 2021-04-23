const N = 5;
const road = [
  [1, 2, 1],
  [2, 3, 3],
  [5, 2, 2],
  [1, 4, 2],
  [5, 3, 1],
  [5, 4, 2],
];
const K = 3;

function solution(N, road, K) {}
function def(graph, startNode) {
  let needVisitStack = [];
  let visitedQueue = [];

  needVisitStack.push(startNode);

  while (needVisitStack.length > 0) {
    const node = needVisitStack.pop();
    if (!visitedQueue.includes(node)) {
      visitedQueue.push(node);
      needVisitStack = [...needVisitStack, ...graph[node]];
    }
  }
  return visitedQueue;
}
solution(N, road, K);
