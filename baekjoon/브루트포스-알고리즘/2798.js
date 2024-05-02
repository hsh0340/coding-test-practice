const fs = require('fs');
const input = fs.readFileSync('input/2798.txt').toString().split('\n');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [numberOfCards, criteria ] = input[0].split(' ').map(Number);
const cards = input[1].split(' ').map(Number);

// cards 배열에 있는 카드 3장의 합이 criteria 를 넘지 않으면서 가장 큰 수를 반환
function findMaxSumOfCards(cards, criteria) {
  let maxSum = 0;

  for (let i = 0; i < cards.length; i++) {
    for (let j = i + 1; j < cards.length; j++) {
      for (let k = j + 1; k < cards.length; k++) {
        let sum = cards[i] + cards[j] + cards[k];
        if (sum <= criteria && sum > maxSum) {
          maxSum = sum;
        }
      }
    }
  }

  return maxSum;
}

console.log(findMaxSumOfCards(cards, criteria));