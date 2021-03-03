function solution(orders, course) {
    let result = []
    const courseMenu = {}
    const maxLen = Math.max(...orders.map(el=>el.length))
    course.forEach(selectNum=>{
        if(selectNum > maxLen) return
        orders.forEach(order=>{
            const array = order.split('').sort()
            getCombinations(array, selectNum).forEach(el=>{
                selectNum in courseMenu ? '' : courseMenu[selectNum] = {}
                el in courseMenu[selectNum] ? courseMenu[selectNum][el]++ : courseMenu[selectNum][el] = 1
            })
        })
        result = [...result, ...findMax(courseMenu[selectNum])]
    })
    return result.sort()
}
function findMax(courseMenu){
    const result = []
    const max = Math.max(...Object.values(courseMenu))
    for(const key in courseMenu){
        courseMenu[key] === max && max>1 ? result.push(key): ''
    }
    return result
    
}
function getCombinations(arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNum - 1);
    const attached = combinations.map((combination) =>
      [fixed, ...combination].join("")
    );
    result.push(...attached);
  });

  return result;
}