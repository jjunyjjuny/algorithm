# leetcode

## Minimum Deletion Cost to Avoid Repeating Letters

[문제 링크](https://leetcode.com/problems/minimum-deletion-cost-to-avoid-repeating-letters/)

## 풀이

- 현재 문자열 묶음의 종류를 기억하는 type, 그 묶음 중 현재까지의 최대값을 기록하는 max
- 반복문을 돌면서 type이 변하면 해당 type으로 바꾸고 max를 0으로 리셋한다
- max값보다 현재 인덱스의 cost가 적으면 result에 현재 인덱스 cost를 추가하고
- 현재 인덱스 cost가 더 크면 max값을 추가하고 max를 현재 인덱스 cost로 교체한다

## 후기

가장 먼저 떠오른 방법은 문자열을 배열로 바꾸고, 
앞과 뒤를 비교하면서 cost가 적은 요소를 각자 배열과 cost 배열에서 제거하면서 result에 추가하는 것이었다.

하지만 배열을 조정하는데 낭비인거 같아서 index로 컨트롤 하려다보니 중간이 제거됐을 때 앞 뒤값이 떨어지게 되어 prevIndex, nextIndex 두 개를 썼다.

그랬더니 'aaaaaaaaaaaa'..가 엄청나게 긴 값이 들어왔을 때 타임 리미트에 걸려서 "묶음"이 필요하다고 생각했다. 이후에는 유튜브 영상에서 힌트를 얻었다.

유튜브 영상을 통해 type 변수를 컨트롤하는 방식을 알게 되었는데, 아마 영상을 보지 않았다면 s를 type별 배열로 나누고 있었을 듯 하다 ... 새로운 방식을 접해서 좋다! 


## 다른 사람의 풀이
