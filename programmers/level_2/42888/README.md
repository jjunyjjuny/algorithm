# programmers Lv2

## 오픈채팅방

[문제 링크](https://programmers.co.kr/learn/courses/30/lessons/42888)

## 풀이

- 각 라인을 명령어, 아이디, 이름으로 비구조화할당하고 
- Enter, Change의 경우 users 객체에 해당 id의 name을 할당 or 변경
- Enter, Leave의 경우 result 배열에 id, command를 남겨 ~가 ~했다는 동작을 기록함
- 이후 result에서 각 라인의 현재 id에 해당하는 name을 users 객체에서 가져오고, command에 해당하는 동작을 commands 객체에서 가져와 출력

## 후기

좀 더 깔끔하게 commands 객체를 이용해서 함수화하고 하려했으나 그냥 풀었다. 
처음에 한 두개 빼고 전부 fail이 떠서 뭔가했는데 leave의 경우에 name이 없는 경우를 고려하지 않아서였다.
해결하니까 통과 

## 다른 사람의 풀이
어쩜 나랑 거의 똑같이 한 사람이 많네 ... 좋은건가? ㅎㅎ 