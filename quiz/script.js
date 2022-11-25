import { increaseScore } from '../store.js';
import { goToScore, goToDoors } from '../navigation.js';

async function getQuestion() {
  const res = await fetch(
    'https://the-trivia-api.com/api/questions?categories=food_and_drink,music&limit=1'
  );
  const data = await res.json();

  return data[0];
}

function win() {
  increaseScore();
  goToDoors();
}

function lose() {
  goToScore();
}

function renderQuestion(question) {
  const questionEl = document.getElementById('question');
  questionEl.innerText = question;
}

function renderAnswers(answers, answerClick) {
  const answersEl = document.getElementById('answers');

  for (const answer of answers) {
    const answerEl = document.createElement('div');
    answerEl.innerText = answer;
    answerEl.onclick = function () {
      answerClick(answer);
    };

    answersEl.append(answerEl);
  }
}

async function play() {
  const question = await getQuestion();

  renderQuestion(question.question);

  // Create array of all answersEl
  const answers = question.incorrectAnswers.concat([question.correctAnswer]);

  // Randomize answer order
  answers.sort(function () {
    return 0.5 - Math.random();
  });
  renderAnswers(answers, function (answer) {
    if (answer === question.correctAnswer) {
      win();
    } else {
      lose();
    }
  });
}

play();
