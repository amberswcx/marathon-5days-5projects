const startButton = document.querySelector('.start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('.time-list');
const timer = document.querySelector('#time');
const board = document.querySelector('.board');
let time = 0;
let score = 0;
let intervalID;
const COLORS = [
  '#e32636',
  '#a4c639',
  '#fdee00',
  '#007fff',
  '#8a2be2',
  '#c32148',
  '#00cc99',
  '#7fff00',
  '#ffa700',
  '#c154c1',
  '#d70a53',
  '#00bfff',
];

startButton.addEventListener('click', startGame);
timeList.addEventListener('click', startGameWithTimer);
board.addEventListener('click', isCircle);

function startGame(e) {
  e.preventDefault();
  screens[0].classList.add('up');
}

function startGameWithTimer(e) {
  if (e.target.classList.contains('time-btn')) {
    time = +(e.target.dataset.time);
    screens[1].classList.add('up');
    runGame();
  }
}

function runGame() {
  timer.innerHTML = `00:${time}`;
  createRandomCircle();
  intervalID = setInterval(decreaseTime, 1000);
}

function decreaseTime() {
  if (time === 0) {
    finishGame();
  } else {
    let currentTime = --time;
    if (currentTime < 10) {
      setTime(`0${currentTime}`);
    } else {
      setTime(currentTime);
    }
  }
}

function finishGame() {
  clearInterval(intervalID);
  timer.parentElement.classList.add('hide');
  board.innerHTML = `<h2>Счет: ${score} </h2>
<a href="#" class="start">Начать новую игру</a>`;
  board.style.flexDirection = 'column';
  const restartLink = board.querySelector('.start');
  restartLink.addEventListener('click', restart);
}

function setTime(time) {
  timer.innerHTML = `00:${time}`;
}

function createRandomCircle() {
  const {width, height} = board.getBoundingClientRect();
  const size = getRandomNumber(10, 100);
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);
  const circle = document.createElement('div');
  circle.classList.add('circle');
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
  circle.style.background = COLORS[getRandomNumber(0, COLORS.length)];
  board.append(circle);
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function isCircle(e) {
  if (e.target.classList.contains('circle')) {
    score++;
    e.target.remove();
    createRandomCircle();
  }
}

function restart(e) {
  e.preventDefault();
  score = 0;
  screens[1].classList.remove('up');
  board.innerHTML = '';
  board.style.flexDirection = 'row';
  timer.parentElement.classList.remove('hide');
}