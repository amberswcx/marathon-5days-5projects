const startButton = document.querySelector('.start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('.time-list');
let time = 0;

startButton.addEventListener('click', startGame);
timeList.addEventListener('click', startGameWithTimer);

function startGame(e) {
  e.preventDefault();
  screens[0].classList.add('up');
}

function startGameWithTimer(e) {
  if (e.target.classList.contains('time-btn')) {
    time = +(e.target.dataset.time);
    screens[1].classList.add('up');
  }
}