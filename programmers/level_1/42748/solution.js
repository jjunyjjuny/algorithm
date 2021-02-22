
// before
var answer = [];
    for(let i=0; i<commands.length; i++){
        const arr = array.slice(commands[i][0]-1, commands[i][1]).sort((a,b)=>a-b)
        answer.push(arr[commands[i][2]-1])
    }
    return answer;

// after 2021.01.20
function solution(array, commands) {
    return commands.map(el => {
        const [i,j,k] = el;
        return array.slice(i-1,j).sort((a,b) => a-b)[k-1]
    })
    
}
