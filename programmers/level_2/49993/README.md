# programmers Lv2

## 스킬트리

[문제 링크](https://programmers.co.kr/learn/courses/30/lessons/49993?language=javascript)

## 풀이

skill에 있는 요소 외에는 고려 대상이 아니므로 스킬트리에서 삭제한다.

남은 스킬트리의 각 요소의 길이만큼 반복하면서 같은 index를 가진 skill 배열의 요소가

다르다면 선행 스킬을 배우지 않은 것이므로 false 같으면 true로 변환해서 true 갯수 = 선행 스킬 지킨 갯수 

## 후기

map filter reduce같은 고차함수를 너무 많이 쓰는건 아닌가 싶긴 하다. 
중복만 되지 않는다면 효율성에서 크게 걸리진 않나보다. 

## 다른 사람의 풀이

정규표현식도 있고 나와 비슷한 논리지만 조금은 다른 것들도 보인다 .
나는 스킬트리를 먼저 filter하고, 반환값으로 다시 map, reduce를 하는 등 조금씩 변화시키면서 접근했지만
이 사람은 for문을 통해 continue로 넘기거나 하면서 실제적으로 반복문 1번, filter 한 번으로 끝냈다.

좀 더 빠를듯! 