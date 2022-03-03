const startButton = document.querySelector('.start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('.time-list');
const timer = document.querySelector('#time');
const board = document.querySelector('.board');
let time = 0;
let score = 0;
let intervalID;

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
  clearInterval(intervalID)
  timer.parentElement.innerHTML = ``;
  board.innerHTML = `<h2>Счет: ${score}</h2>`;
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