# programmers Lv1

## 실패율

[문제 링크](https://programmers.co.kr/learn/courses/30/lessons/42889ㅈ)

## 풀이

N+1 만큼 0으로 찬 배열 state를 만들고 stages를 순회하면서 state의 index를 stage 넘버로 삼아서
+1씩 추가한다.

해당 값과 인덱스를 통해 실패율을 계산하는 함수를 작성하고 
sort메소드의 매개변수에서 해당 함수를 활용해 정렬한다.


## 후기

처음에 object에 현재 플레이어 수, 지나친 모든 플레이어 수를 각 스테이지마다 담아서
불러내고 사용하려했는데 거의 모든 케이스에서 런타임에러가 났다.
0으로 나누거나, 없는 값에 접근하거나 무한 반복에 걸리거나 하면 런타임에러가 뜬다는데 
이 문제의 경우 실패율 계산시 0을 나누는 실수를 종종 한다고 한다.

하지만 나는 0으로 나눠질 경우를 미리 고려해뒀는데도 계속 런타임 에러가 나서 이유를 모르겠다..


아뉘 같은 lv1인데 다른 연습문제랑 수준차이 넘 심하잖아 .. lv2로 올리거나 다른 문제를 lv0으로 낮추라 ... 

## 다른 사람의 풀이