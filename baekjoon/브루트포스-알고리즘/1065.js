const fs = require('fs');
const criteria = +fs.readFileSync('../input/1065.txt').toString();
// const input = fs.readFileSync('/dev/stdin').toString().toString();

function seperateDigits(number) {
  return number.toString().split('').map(Number);
}
function getNumberOfHanNumber(criteria) {
  let numberOfHanNumber = 0;
  if (criteria <= 99) {
    numberOfHanNumber = criteria;
    return numberOfHanNumber;
  } else {
    numberOfHanNumber = 99;
    for (let i = 100; i <= criteria; i++) {
      const digits = seperateDigits(i);
      if (digits[0] - digits[1] === digits[1] - digits[2]) {
        numberOfHanNumber++;
      }
    }
    return numberOfHanNumber;
  }
}

console.log(getNumberOfHanNumber(criteria));