# programmers Lv2

## 이진 변환 반복하기

[문제 링크](https://programmers.co.kr/learn/courses/30/lessons/70129)

## 풀이

- 입력받은 스트링을 배열로 변환하고 안에 요소를 숫자로 변경한다.

- convert 요소가 하나 남을 때까지 while문을 순회한다.

- count를 1 올리고 array의 길이를 prveLen 변수에 저장해둔다

- filter로 0을 제거하고 난후의 길이를 nextLen 변수에 저장해둔다.

- prevLen - nextLen으로 제거된 0의 갯수를 removed에 추가한다.

- nextLen을 이진법으로 변경 후 while문을 반복한다.

- while문이 끝나면 출력

## 후기

오랜만에 레벨2답지 않은 쉬운 문제.. 그 동안 카카오 문제들이 너무 어려웠던건가..? 

## 다른 사람의 풀이

정규표현식으로 깔끔하게 해결하신 분도 있다 전체적인 논리는 같은듯!

