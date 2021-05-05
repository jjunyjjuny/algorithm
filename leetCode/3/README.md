# leetcode

## Longest Substring Without Repeating Characters

[문제 링크](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

## 풀이

- s[i]를 스택에 하나씩 넣는데, 이미 스택에 있는지 / 없는지에 따라 동작을 달리한다.
- 스택에 없는 요소면 push하고 longest보다 커졌는지 확인해서 longest를 업데이트한다.
- 스택에 있는 요소면 스택을 해당 요소 이후값만 남기도록 업데이트하고, 요소를 추가한다.
이후 스택의 요소가 longest보다 커지는지 확인한다. 

## 후기

- 은근 간단해 보이는걸 대체 얼마나 오래 잡고 있는지 ㅜㅜ 속도가 99.72%로 거의 탑티어로 나왔다. 근데 메모리가 25% ㅋㅋ.. 
- 강의를 보면 stack보다는 index를 두개 사용해서 컨트롤하는 듯. 속도도 속도고 메모리 측면에서 더 효율적일듯하다 

## 다른 사람의 풀이
