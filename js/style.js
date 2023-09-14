'use strict';
// selections
const checkBtn = document.querySelector('.check');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const display = document.querySelector('.display');
const highScoreEl = document.querySelector('.highScore');
const scoreEl = document.querySelector('.score');
const head = document.querySelector('.head');
const again = document.querySelector('.again');

// initialization
let guessMyNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let playing=true;
checkBtn.addEventListener('click', () => {
  if(playing){
  let num = Number(guess.value);
  //When there is no input
  if (!num) {
    message.textContent = 'No Number !!!';
  }
  //When the guess number not between (1 and 20)
  else if (num > 20 || num < 0) {
    message.textContent = 'Bro from 1 to 20 !!';
  }

  // when the player wins
  else if (num === guessMyNumber) {
    playing=false;
    head.textContent = 'You Win !';
    message.textContent = '🎉 Right Guess';
    display.textContent = guessMyNumber;
    if (score > highScore) {
      highScoreEl.textContent = score;
    }
  }
  // when the guess is wrong
  else if (num !== guessMyNumber) {
    if (score > 1) {
      message.innerHTML =
        num > guessMyNumber
          ? '<i class="fa-solid fa-circle-arrow-up me-2 fa-xl" style="color: #198754;"></i> Too high'
          : `<i class="fa-solid fa-circle-arrow-down  me-2 fa-xl" style="color: #198754;"></i>Too low`;
      score--;
      scoreEl.textContent = score;
    } else {
      playing=false;
      head.textContent = 'Game Over !';
      message.textContent = '💥YOU LOST !';
      scoreEl.textContent = 0;
    }
  }
}
}
);

again.addEventListener('click', function () {
  guessMyNumber = Math.trunc(Math.random() * 20) + 1;
  playing=true;
  score = 20;
  scoreEl.textContent = 20;
  message.textContent = 'Start guessing ...';
  guess.value = '';
  display.innerHTML = '<i class="fa-solid fa-question fa-2xl"></i>';
});
