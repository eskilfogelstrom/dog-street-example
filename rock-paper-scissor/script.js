import { increaseScore } from '../store.js';
import { goToScore, goToDoors } from '../navigation.js';

const choices = ['dog', 'cat', 'mouse'];

function win() {
  increaseScore();
  goToDoors();
}

function lose() {
  window.location.href = '/scoreboard';
  goToScore();
}

function play(choice) {
  // If we assume that:
  // Dog = 0
  // Cat = 1
  // Mouse = 2
  // the smaller number will always win unless someone is mouse and someone is dog
  // So we make an exception for that

  const player = choices.indexOf(choice);
  const computer = Math.floor(Math.random() * 3); // Random number 0-2

  if (player === computer) {
    // Draw
    play();
  } else if (player === 2 && computer === 0) {
    // Mouse vs. dog
    win();
  } else if (player === 0 && player === 2) {
    // Dog vs. mouse
    lose();
  } else if (player < computer) {
    win();
  } else {
    lose();
  }
}

function renderChoices(choices) {
  const choicesEl = document.getElementById('choices');

  for (const choice of choices) {
    const choiceEl = document.createElement('div');
    choiceEl.innerText = choice;

    choiceEl.onclick = function () {
      play(choice);
    };

    choicesEl.append(choiceEl);
  }
}

renderChoices(choices);
