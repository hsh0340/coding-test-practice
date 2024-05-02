const fs = require('fs');
const input = fs.readFileSync("input/2480.txt").toString().trim().split(' ');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const [num1, num2, num3] = input.map(Number);

// 3개의 숫자가 같은경우 같은 숫자를 반환
// 2개의 숫자가 같은경우 같은 숫자를 반환
// 모두 다른 숫자인 경우 가장 큰 숫자를 반환
function compareNumbers(num1, num2, num3) {
  if (num1 === num2 && num2  === num3) {
    return { compareResult: 'ALL_SAME', number: num1 };
  }

  if (num1 === num2 || num1 === num3 || num2 === num3) {
    return { compareResult: 'TWO_SAME', number: num1 === num2 ? num1 : num3 };
  }

  if (num1 !== num2 && num2 !== num3) {
    return { compareResult: 'ALL_DIFFERENT', number: Math.max(num1, num2, num3) };
  }
}

function calculateReward({ compareResult, number }) {
  let reward;
  switch (compareResult) {
    case 'ALL_SAME':
      reward = 10000 + number * 1000;
      break;
    case 'TWO_SAME':
      reward = 1000 + number * 100;
      break;
    case 'ALL_DIFFERENT':
      reward = number * 100;
      break;
  }
  return reward;
}

console.log(calculateReward(compareNumbers(num1, num2, num3)));