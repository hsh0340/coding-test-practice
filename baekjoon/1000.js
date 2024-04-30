const fs = require('fs');
// const input = fs.readFileSync('input/1000.txt').toString().trim().split(' ');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const a = +input[0];
const b = +input[1];
const result = a + b;
console.log(result);