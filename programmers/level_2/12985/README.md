# programmers Lv2

## 예상 대진표

[문제 링크](https://programmers.co.kr/learn/courses/30/lessons/12985)

## 풀이

주어진 n이 2의 몇승인지 구해서 최대 round를 구한다.
절반 씩 나누면서 pivot 기준 양쪽에 있다면 해당 round를 반환하고 
pivot보다 둘 다 작거나, 크다면 pivot을 이동시켜 반복하면서 round를 하나씩 -한다

## 후기

pivot을 단순히 반으로 나누거나 앞으로 보내거나 하는 식으로 짜서 몇 가지 fail이 떴다가
pivot 조정을 수정해서 통과했다.

## 다른 사람의 풀이

주어진 값을 2로 나누고 올림해서 두 값이 같아질때까지 반복하는.. 아주 깔끔한 풀이가 있다.
이건 쩌는군... 