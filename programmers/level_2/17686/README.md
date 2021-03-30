# programmers Lv2

## [3차] 파일명 정렬

[문제 링크](https://programmers.co.kr/learn/courses/30/lessons/17686)

## 풀이

- 주어진 files의 각 요소를 먼저 배열화하면서 첫번째 숫자가 나오는 부분을 pivotA, 숫자가 5자리수를 넘어거나, 비었거나, 문자가 나오는 위치를 pivotB로 찾아서 head, number, tail을 구분한다. (정규표현식 사용)

- 나눈 부분을 비교하면서 sort함수 내부에서 처리한다. 


## 후기

처음에 25점이 나왔는데 number부분에서 끝나고 테일이 없거나, 끝까지 숫자로만 5자리를 넘어가는 경우를 처리하지 않아서였다. 



## 다른 사람의 풀이
