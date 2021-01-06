const fs = require("fs");

// const stdin = fs.readFileSync("/dev/stdin", "utf8");
const stdin = fs.readFileSync("./stdin", "utf8");
const stdout = fs.readFileSync("./stdout", "utf8");

const input = stdin.split(" ");
const answer = stdout.split(" ");

console.log(input);
const result = [];

const a = parseInt(input[0], 10);
const b = parseInt(input[1], 10);

// console.log(a + b);

function testCase(answer, answer) {}
