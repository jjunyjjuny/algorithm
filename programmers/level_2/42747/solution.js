function solution(citations) {
    citations.sort((a,b)=>b-a)
    let h = 0
    for(let i = 1; i<citations.length+1; i++){
        if(citations[i-1]>=i ){
            h = i
        } else {
            break
        }
    }
    return h
}