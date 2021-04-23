# JS 알고리즘 코딩 테스트 대비

## 문자열

<br/>

### 자르기

- string.substr(index, length)
  index부터 length개 까지 자르기

- string.substring(a, b)
  a-b 사이로 자르기 ()

- string.slice(start, end)
  start부터 end까지 자르기

[substring, slice 차이](https://hianna.tistory.com/340)

<br/>

### 아스키 코드

- 문자 -> 아스키코드 s.charCodeAt(i)

- 아스키코드 -> 문자 String.fromCharCode(code)

[참고 문제](programmers/level_1/12926)

<br/>

## 배열

<br/>

### 정렬하기

- Array.sort((a-b)=>a-b(오름차) or b-a(내림차))
  sort의 콜백 함수의 return 값이 음수인지, 양수인지로 판별한다.

[배열 정렬하기](https://hianna.tistory.com/409)

[참고문제](programmers/level_1/12915)

<br/>

### 값으로 찾기

- Array.indexOf(value) : 해당 값의 index 반환. 없으면 -1 반환

<br/>

### 판별 함수로 찾기

- Array.find(fun) : f판별 함수가 true를 반환하는 첫 번째 값의 값 반환. 없으면 undefind 반환
- Array.findIndex(fun) : 판별 함수가 true를 반환하는 첫 번째 값의 인덱스 반환. 없으면 -1 반환

<br/>

### 해당 값이 있는지 없는지

- Array.includes(value)

<br/>

## 객체

### 해당 값이 있는지 없는지

- key in obj 

### 객체의 키, 값 추출

- 키 : Object.keys(obj)
- 값 : Object.values(obj)
- [키, 값] : Object.entries(obj)

<br/>

## 숫자

### 숫자인지 아닌지

- isNaN(target) (숫자형이 아니면 true, 숫자면 false)

<br/>

## How to

<br/>

### 2~n 까지 소수 갯수 구하기(에라토스테네스의 체)

```
funtion solution(n) {
    let arr = Array(n+1).fill(true).fill(false, 0, 2);
    for(let i=2; i*i<=n; i++){
        if(arr[i]){
            for(let j=i*i; j<=n; j+=i){
                arr[j] = false;
            }
        }
    }
    return arr.filter(e => e).length;
}
```

[참고문제](programmers/level_1/12921)

<br/>

### 해당 수가 소수인지 아닌지

```
function isPrime(n) {
	if (n <= 1) return false;
	if (n === 2 || n === 3) return true;
	if (n % 2 === 0) return false;

	let divisor = 3;
	while (n > divisor) {
		if (n % divisor === 0) return false;
		divisor += 2;
	}

	return true;
```

<br/>

### 약수 전체 구하기

```
function getDivisor(n){
    const divisor = []
    for(let i = 2; i<=n; i++){
        n%i ? null : divisor.push(i)
    }
    return divisor
}
```

약수의 절반만 구하고자 할 때는 for의 조건절을 i<=Math.sqrt(n)으로 바꾸면 된다.

<br/>

### 최대 공약수 구하기

```
function greatestCommonDivisor(a, b) {
    return b ? greatestCommonDivisor(b, a % b) : Math.abs(a);
}
```

유클리드 호제법

<br/>

[관련문제](programmers/level_2/12940)

### 최소 공배수 구하기

```
function leastCommonMultipleOfTwo(a, b) {
    return (a * b) / greatestCommonDivisor(a, b);
}
```

[관련문제](programmers/level_2/12940)

<br/>

### 최소, 최대값 찾기

- Math.min(...array), Math.max(...array)

<br/>

### 교집합, 차집합, 합집합 구하기

```
//교집합 
function getIntersection(el1, el2) {
  return el1.filter((el) => {
    if (el2.includes(el)) {
      el2.splice(el2.indexOf(el), 1);
      return true;
    }
    return false;
  });
}
//차집합 
arr1.filter((el=>!arr2.includes(el)))

//합집합 
function getUnion(el1, el2) {
  el1.forEach((el) => {
    if (el2.includes(el)) {
      el2.splice(el2.indexOf(el), 1);
    }
  });
  return [...el1, ...el2];
}
```

### 멱집합 구하기

#### n개의 요소만 추출해서 조합 만들기

```
function combination(arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);
  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr.slice(idx + 1);
    const combinationArr = combination(restArr, selectNum - 1);
    const combineFix = combinationArr.map((v) => [fixed, ...v]);
    result.push(...combineFix);
  });
  return result;
}
```

#### 모든 조합 만들기(멱집합)

```
function powerSet(arr) {
  let check = new Array(arr.length).fill(0);
  let powerSetArr = [];
  const dfs = (depth) => {
    if (depth === check.length) {
      powerSetArr.push(arr.filter((v, idx) => check[idx]));
    } else {
      check[depth] = 1;
      dfs(depth + 1);
      check[depth] = 0;
      dfs(depth + 1);
    }
  };
  dfs(0);
  return powerSetArr;
}
```

[관련문제](programmers/level_2/17677)
[관련문제](programmers/level_2/42890)
