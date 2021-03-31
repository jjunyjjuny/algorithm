// before 

// function solution(reletion) {
//   const indexArr = Array.from(Array(reletion[0].length), (_, i) => i);
//   let remains = powerSet(indexArr);
//   let count = 0;
//   while (remains.length) {
//     const current = remains.shift();
//     if (isCandidateKey(current, reletion)) {
//       remains = remains.filter(
//         (remain) => !remain.join("").includes(current.join(""))
//       );
//       count++;
//     }
//   }
//   return count;
// }
// function isCandidateKey(key, reletion) {
//   const len = reletion.length;
//   const set = new Set();
//   reletion.forEach((row) => {
//     const combi = key.reduce((acc, curr) => {
//       return acc + row[curr];
//     }, "");
//     set.add(combi);
//   });
//   return set.size === len;
// }
// function powerSet(arr) {
//   let check = new Array(arr.length).fill(0);
//   let powerSetArr = [];
//   const dfs = (depth) => {
//     if (depth === check.length) {
//       powerSetArr.push(arr.filter((v, idx) => check[idx]));
//     } else {
//       check[depth] = 1;
//       dfs(depth + 1);
//       check[depth] = 0;
//       dfs(depth + 1);
//     }
//   };
//   dfs(0);
//   return powerSetArr.sort((a, b) => a.length - b.length);
// }

// 다른 사람 풀이 

function solution(reletion) {
  const indexArr = Array.from(Array(reletion[0].length), (_, i) => i);
  const keys = getSubsets(indexArr);

  const superKeys = keys.filter((key) => {
    const set = new Set();
    let isSuper = true;
    reletion.forEach((row) => {
      const tupleStr = tupleToString(row, key);
      if (set.has(tupleStr)) {
        isSuper = false;
      } else {
        set.add(tupleStr);
      }
    });
    return isSuper;
  });
  const candidateKeys = superKeys.filter((key, index) => {
    for (let i = 0; i < superKeys.length; i++) {
      if (i === index) continue;
      if (isSub(key, superKeys[i])) return false;
    }
    return true;
  });
  return candidateKeys;
}
function isSub(key, comparedKey) {
  return comparedKey.every((v) => key.includes(v));
}
function tupleToString(tuple, set) {
  return set.reduce((str, value) => str + tuple[value], "");
}

function getSubsets(arr) {
  let check = new Array(arr.length).fill(0);
  let subsets = [];
  const dfs = (depth) => {
    if (depth === check.length) {
      subsets.push(arr.filter((v, idx) => check[idx]).sort((a, b) => a - b));
    } else {
      check[depth] = 1;
      dfs(depth + 1);
      check[depth] = 0;
      dfs(depth + 1);
    }
  };
  dfs(0);
  return subsets.sort((a, b) => a.length - b.length);
}
