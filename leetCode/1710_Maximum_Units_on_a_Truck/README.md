# leetcode

## 1710. Maximum Units on a Truck

[문제 링크](https://leetcode.com/problems/maximum-units-on-a-truck/submissions/)

## 풀이

- 내림차 정렬
- truckSize 만큼 반복하면서 sorted의 요소 중 첫 번째 요소(개수)가 0이면 제거, 아니면 두 번째 요소를 max에 더하고 개수를 -1 한다
- 끝까지 반복하거나, sorted의 길이가 0이 되면 멈추고 max를 반환한다

## 후기

오랜만에 알고리즘.. 무난..

## 다른 사람의 풀이