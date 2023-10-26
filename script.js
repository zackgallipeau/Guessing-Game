'use strict';

let secretNumber = Math.trunc(Math.random() * 100) + 1;

let score = 20;

let highScore = 0;

function displayMessage(message) {
  document.querySelector(`.message`).textContent = message;
}

console.log(secretNumber);

function checkScore() {
  const guess = Number(document.querySelector(`.guess`).value);

  //Makes sure that there is actually a number inputted
  if (!guess) {
    displayMessage('Please enter a number.');

    //When the guess is correct/the player wins
  } else if (guess === secretNumber) {
    score--;
    document.querySelector(`.score`).textContent = score;
    displayMessage('Correct Number!');
    document.querySelector(`body`).style.backgroundColor = '#60b347';
    document.querySelector(`.number`).style.width = '30rem';
    document.querySelector(`.number`).textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }

    //when the guess is wrong
  } else if (guess !== secretNumber && score > 1) {
    displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
    score--;
    document.querySelector(`.score`).textContent = score;
  } else {
    document.querySelector(`.message`).textContent = 'You lost the game! :(';
    document.querySelector(`.score`).textContent = 0;
  }
}

document.querySelector(`.guess`).addEventListener(`keyup`, function () {
  if (event.keyCode === 13) {
    document.getElementById(`check`).click();
  }
});
document.querySelector(`.check`).addEventListener(`click`, function () {
  checkScore();
});

//this resets the game when the "Again" button is pressed
document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`body`).style.backgroundColor = '#222222';
  document.querySelector(`.number`).style.width = '15rem';
  document.querySelector(`.message`).textContent = 'Start guessing...';
  document.querySelector(`.guess`).value = '';
  document.querySelector(`.number`).textContent = '?';
});
