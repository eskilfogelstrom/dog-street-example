import { goToDoors } from './navigation.js';
import { setName, setScore } from './store.js';

const startButtonEl = document.getElementById('start');

startButtonEl.onclick = function () {
  const name = document.getElementById('name').value;

  setName(name);
  setScore(0);

  goToDoors();
};
