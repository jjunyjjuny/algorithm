# programmers Lv2

## N진수 게임

[문제 링크](https://programmers.co.kr/learn/courses/30/lessons/17687)

## 풀이

- 먼저 1부터 1씩 증가하며 n진수로 변환한 값을들 모두 result에 문자열로 더한다. 진법 변환은 toString(n)을 사용한다
- 해당 문자열이 t(미리 구할 수) * m(참가 인원)보다 커지면 멈춘다.
- 해당 result에서 참가인원, 튜브의 순서를 바탕으로 수를 골라내서 upperCase로 변환 후 리턴.


## 후기

toString이 없었다면 11~16진수를 구하는데 애좀 먹었을까 싶다. 
하나씩 해결하니 무난하게 fail 없이 해결됐다 

## 다른 사람의 풀이

언제나 짧게 푸는 사람은 있기마련... 