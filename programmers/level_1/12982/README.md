# programmers Lv1

## 예산

[문제 링크](https://programmers.co.kr/learn/courses/30/lessons/12982)

## 풀이

오름차 순으로 변경한 뒤 앞에서부터 sum에 더해서 예산을 초과하지 않으면
count를 1씩 늘리다가 초과되면 break하고 count를 리턴

## 후기

처음에 몇몇 테스트케이스가 불통됐는데 아무리 봐도 머가 문제인지 모르다가
그냥 sort()를해서 문제였다. sort((a,b)=>a-b)로 바꾸니 통과됨
sort안에 compareFunction을 넣지 않으면 '문자열로 변환하고, 유니코드 포인트 순서로 정렬'되어서 문제가 생기는 듯!

## 다른 사람의 풀이

while 조건문에 reduce로 검사하고 통과되면 pop을 한다..
깔끔해보이지만 효율이 매우 안 좋다고 함.

~를 쓰는 문법이 보인다. ~는 대체 뭐지 ??

비트단위 부정
~a : 피연산자의 각 자리의 비트를 뒤집습니다.

비트..? 단위..? 처음 들어본다..
