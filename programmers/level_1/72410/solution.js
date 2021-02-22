const pipe = (...fns) => (...args) => fns.reduce((res, fn) => [fn.call(null, ...res)], args)[0];

function solution(new_id) {
    const pipeFun = pipe(toLower, removeEtc,removeDot,checkEmpty,checkLength,joinArray)
    return pipeFun(new_id)
}
function toLower(new_id){
    return new_id.toLowerCase().split('')
}
function removeEtc(array){
    const filter = [...'abcdefghijklnmopqrstuvwxyz'.split(''), '-', '_','.']
    return array.filter(el=>{
        return filter.includes(el) || !isNaN(el)
    })
}
function removeDot(array){
    const filter =  array.filter((el, index) =>{
        return el !== '.' || array[index-1] !=='.' 
    })
    if(filter[0]==='.') filter.shift()
    if(filter[filter.length-1]==='.') filter.pop()
    return filter
}
function checkEmpty(array){
    return array.length === 0 ? ['a'] : array
}
function checkLength(array){
    if(array.length>15){
      array.length=15
    if(array[array.length-1]==='.') array.pop()
    return array  
    } else if (array.length <3){
        array.push(array[array.length-1])
        array.push(array[array.length-1])
        array.length = 3
        return array
    }
    return array
}
function joinArray(array){
    return array.join('')
}