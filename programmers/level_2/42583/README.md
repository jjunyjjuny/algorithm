# programmers Lv2

## 다리를 지나는 트럭

[문제 링크](https://programmers.co.kr/learn/courses/30/lessons/42583#)

## 풀이

다리 배열, 지나온 트럭들 배열 선언
다리 위 총 무게와 지난 시간 변수 선언

while문 1번당 1초로 잡고 time++
다리 맨 끝 요소를 pop해서 트럭이면 passed에 넣고 총 무게를 줄인다.

총무게 + 다음 트럭 무게가 다리가 감당할 수 있는 무게보다 적으면
트럭 리스트에서 shift해서 다리에 넣고 총 무게 업

아니면 다리에 0을 shift해서 한칸씩 밀기. 

passed가 처음 트럭 리스트의 길이와 같아질때 까지 반복 

## 후기

'너무 수학적인 공식을 찾으려고'하다보니 시간이 어어어엄청나게 걸린다.
무게제한이 걸리지 않는 상황이면 다리길이 + 트럭 수로 기본값을 정하고 
무게 제한이 걸리는 상황에 따라 각 요소를 다리 길이만큼 잘라서 다시 배열화하고, 
그 배열화한 것 들중 요소를 더해서 총 무게보다 적으면 +1시키고 ..하는 공식을 얼추 찾아서 적용하니
절반만 통과돼서 걍 큐/스택 문제니까 이렇게 풀자해서 풀었더니 잘 됐다..

너무 공식적이고, 수학적으로 풀려고 하니까 오히려 문제인 것 같다. 일단 단순하게 풀어보고
효율성에서 잡히면 시도하는 방식으로 해야할 것 같다 ..

## 다른 사람의 풀이