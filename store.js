export function setName(name) {
  localStorage.setItem('name', JSON.stringify(name));
}

export function getName() {
  return JSON.parse(localStorage.getItem('name'));
}

export function setScore(score) {
  localStorage.setItem('score', JSON.stringify(score));
}

export function getScore() {
  return JSON.parse(localStorage.getItem('score'));
}

export function increaseScore() {
  const score = getScore();
  setScore(score + 1);
}
