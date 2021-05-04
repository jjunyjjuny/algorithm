/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 var maximumUnits = function(boxTypes, truckSize) {
  const sorted = boxTypes.sort((a,b)=>b[1]-a[1])
  let max = 0
  
  for(let i = 0; i<truckSize; i++){
      if(sorted[0][0] === 0) sorted.shift()
      if(sorted.length === 0) break
      max += sorted[0][1]
      sorted[0][0]--
  }
  return max
};