import { getName, getScore } from '../store.js';

const name = getName();
const score = getScore();

function renderScore(name, score) {
  const nameEl = document.getElementById('name');
  const scoreEl = document.getElementById('score');

  nameEl.innerText = name;
  scoreEl.innerText = score;
}

renderScore(name, score);
