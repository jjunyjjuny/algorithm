// https://programmers.co.kr/learn/courses/30/lessons/42748?language=javascript
// K번째 수
// before
var answer = [];
    for(let i=0; i<commands.length; i++){
        const arr = array.slice(commands[i][0]-1, commands[i][1]).sort((a,b)=>a-b)
        answer.push(arr[commands[i][2]-1])
    }
    return answer;

// after 2021.01.20

function solution(array, commands) {
    return commands.reduce((acc, curr)=>{
        const [i,j,k] = curr
        acc.push(array.slice(i-1,j).sort((a,b) => a-b)[k-1])
        return acc
    }, [])
}
