# programmers Lv2

## 게임 맵 최단거리

[문제 링크](https://programmers.co.kr/learn/courses/30/lessons/1844)

## 풀이

실패한 풀이

현재 지점에서 상하좌우를 살펴 막히지 않은 곳을 찾아 move하고 moveCount를 증가시킨다 (재귀)

재귀로 진행되면서 4방향이 모두 막히면 return

x,y값이 목표지점에 도달하면  moveCount를 배열에 push한다.

모든 재귀가 종료되면 배열에서 최소값을 리턴한다


## 후기

효율성에서 fail이 나왔다. 재귀가 아니라 bfs를 써야한다는 것 같다..
bfs를 공부하고 다음에 다시 도전해보도록 하자

## 다른 사람의 풀이

검색을 해보았는데 참.. 신기한듯.. 공부해야겠다 탐색! 