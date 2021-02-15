function solution(s) {
  return s
    .split(" ")
    .map((str) => {
      return str
        .split("")
        .map((el, index) => {
          return index % 2 === 0 ? el.toUpperCase() : el.toLowerCase();
        })
        .join("");
    })
    .join(" ");
}
