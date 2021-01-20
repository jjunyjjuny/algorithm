// https://programmers.co.kr/learn/courses/30/lessons/12930?language=javascript
// 이상한 문자 만들기

function solution(s) {
    return s.split(' ').map(str=>{
        return str.split('').map((el, index)=>{
            return index%2 === 0 ? el.toUpperCase() : el.toLowerCase()
        }).join('')
    }).join(' ')
}
