# programmers Lv2

## [3차] 압축

[문제 링크](https://programmers.co.kr/learn/courses/30/lessons/17684)

## 풀이

- 1. 주어진 문자를 배열화한 후 stack에 하나씩 담는다.
- 2. 현재 담은 스택 + 다음 array의 첫번째 요소가 dic에 없을 때까지 반복한다

- 3. 2에서 빠져나온 스택이 dic에 있는 가장 긴 요소이므로 해당 index를 answer에 추가한다.
- 4. 현재 stack에 array[0]을 더한 값을 dic에 추가한다.
- 5. array가 빌때까지 반복


## 후기

stack을 활용하니 생각보단 쉽게 풀렸다. fail없이 한 번에 통과!

## 다른 사람의 풀이

비슷한 논리가 많은데 사전을 객체로 사용하는 사람이 있다. 어차피 순서대로니까 배열이 더 편한것 같다. 
