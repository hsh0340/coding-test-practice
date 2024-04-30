const fs = require('fs');
// const input = fs.readFileSync('input/2525.txt').toString().split('\n');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [currentHour, currentMinute] = input[0].split(' ').map(Number);
let cookingMinute = +input[1];
let cookingHour = 0;

// 요리 끝나는 시간 계산
function calculateCookingTime(currentHour, currentMinute, cookingMinute) {
  let endHour = currentHour;
  let endMinute = currentMinute + cookingMinute;

  if (endMinute>= 60) {
    endHour += Math.floor(endMinute / 60);
    endMinute = endMinute % 60;
  }

  return { endHour, endMinute };
}

// 시간 보정하는 함수
function adjustHour(hour) {
  if (hour >= 24) {
    hour = hour % 24;
  }

  return hour;
}

const { endHour, endMinute } = calculateCookingTime(currentHour, currentMinute, cookingMinute);
const adjustedHour = adjustHour(endHour);

console.log(`${adjustedHour} ${endMinute}`);