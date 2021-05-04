# leetcode

## 841. Keys and Rooms


[문제 링크](https://leetcode.com/problems/keys-and-rooms/)

## 풀이

- 방문한 방을 기록하는 visited, 습득한 key를 모으는 keys를 준비한다. keys에 기본적으로 0을 넣어둔다

- keys에 요소가 있다면 while문을 돌며 해당 키로 방에 들어가고, 키를 습득한다

- 새로운 방에 들어가면 visited에 등록하고, 습득한 키가 이미 visited에 등록된 방의 것이라면 무시한다. 처음 습득한 키라면 keys에 추가한다

## 후기

- BFS / DFS 문제를 처음 인식하고 푼 문제.. 쉬운 문제라서 그냥 풀었는데 어려운 난이도라면 어찌해야할지 .. 벌써부터 걱정!

## 다른 사람의 풀이

