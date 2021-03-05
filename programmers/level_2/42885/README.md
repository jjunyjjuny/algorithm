# programmers Lv1

## 구명보트

[문제 링크](https://programmers.co.kr/learn/courses/30/lessons/42885)

## 풀이
배열을 내림차순으로 정렬한 후 
while문으로 순회하면서 가장 무거운 사람(left) + 가장 가벼운 사람(right)이 limit를 초과하는지 여부에 따라
left, right를 ++, --해가면서 배열의 중간으로 점점 좁힌다.

## 후기

![](https://images.velog.io/images/jjunyjjuny/post/a02c7654-0c7b-4417-896c-9e3019dbf0f0/image.png)

처음에는 가장 무거운 사람들로만 먼저 최대한 태우고, 남은 자리를 가장 가벼운 사람들로 채우려고 했다.
그러다보니 중첩 while문이 되어 정확성은 다 통과됐지만 효율성에서 전부 fail이 되었다.

## 다른 사람의 풀이

논리는 같지만 더 짧고 깔끔한(?) 풀이가 있다.
for문에 변수 선언을 두 개 하는건 생각도 못 했는데 이런 방식도 가능하구나.. 

i와 j를 동시에 선언해서 for문 한번으로 처리하는건 참 신박하다 
