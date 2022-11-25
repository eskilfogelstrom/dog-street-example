import { goToScore } from '../navigation.js';

const doors = ['rock-paper-scissor', 'quiz', 'game-over'].sort(function () {
  return 0.5 - Math.random();
});

function renderDoors(doors) {
  const doorsEl = document.getElementById('doors');

  for (const door of doors) {
    const doorEl = document.createElement('div');

    // Show open door for the game over
    if (door === 'game-over') {
      doorEl.innerHTML = 'Open';
    } else {
      doorEl.innerHTML = 'Closed';
    }

    doorEl.onclick = function () {
      switch (door) {
        case 'rock-paper-scissor':
          window.location.href = '/rock-paper-scissor';
          break;
        case 'quiz':
          window.location.href = `/quiz`;
          break;
        case 'game-over':
          goToScore();
          break;
      }
    };

    doorsEl.append(doorEl);
  }
}

renderDoors(doors);
