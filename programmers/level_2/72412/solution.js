const info = [
  "java backend junior pizza 150",
  "python frontend senior chicken 210",
  "python frontend senior chicken 150",
  "cpp backend senior pizza 260",
  "java backend junior chicken 80",
  "python backend senior chicken 50",
];

const query = [
  "java and backend and junior and pizza 100",
  "python and frontend and senior and chicken 200",
  "cpp and - and senior and pizza 250",
  "- and backend and senior and - 150",
  "- and - and - and chicken 100",
  "- and - and - and - 150",
];

// function solution(info, query) {
//   const infoObj = info.reduce((acc, curr) => {
//     const keys = curr.split(" ");
//     addProp(acc, keys);
//     return acc;
//   }, {});

//   return query.reduce((acc, curr) => {
//     const keys = curr.split(/ and | /);
//     const result = search(infoObj, keys);
//     return [...acc, result.length];
//   }, []);
// }
// function search(obj, targetKeys) {
//   const key = targetKeys.shift();
//   if (!isNaN(key)) {
//     return obj.filter((el) => +el >= key);
//   }
//   if (key === "-") {
//     const keys = Object.keys(obj);
//     return keys.reduce((acc, key) => {
//       const nextObj = obj[key];
//       return [...acc, ...search(nextObj, targetKeys.slice())];
//     }, []);
//   }

//   if (key in obj) {
//     const nextObj = obj[key];
//     return search(nextObj, targetKeys);
//   } else {
//     return [];
//   }
// }

// function addProp(obj, targetKeys) {
//   const key = targetKeys.shift();
//   const nextKey = targetKeys[0];
//   if (!isNaN(nextKey)) {
//     key in obj ? obj[key].push(nextKey) : (obj[key] = [nextKey]);
//     return;
//   }
//   if (key in obj) {
//     const nextObj = obj[key];
//     addProp(nextObj, targetKeys);
//   } else {
//     obj[key] = {};
//     addProp(obj[key], targetKeys);
//   }
// }

function solution(info, query) {
  const infoObj = info.reduce((acc, curr) => {
    const spl = curr.split(/ and | /);
    const value = spl.pop();
    const key = spl.join("");
    key in acc ? acc[key].push(value) : (acc[key] = [value]);
    return acc;
  }, {});

  for (const [key, values] of Object.entries(infoObj)) {
    infoObj[key] = values.sort((a, b) => a - b);
  }

  query.forEach((curr) => {
    const spl = curr.split(/ and | /);
    const value = spl.pop();
    const key = spl.join("");
    for (const [key, values] of Object.entries(infoObj)) {
    }
  }, []);
}
solution(info, query);
