function solution(cacheSize, cities) {
  const cache = {};
  if (cacheSize === 0) {
    return cities.length * 5;
  }
  return cities
    .map((city) => city.toLowerCase())
    .reduce((acc, city, index) => {
      if (city in cache) {
        cache[city] = index;
        return acc + 1;
      } else {
        if (Object.keys(cache).length === cacheSize) {
          const old = getMinOfObj(cache);
          delete cache[old];
        }
        cache[city] = index;
        return acc + 5;
      }
    }, 0);
}

function getMinOfObj(obj) {
  return Object.keys(obj).reduce((min, key) =>
    obj[min] < obj[key] ? min : key
  );
}
