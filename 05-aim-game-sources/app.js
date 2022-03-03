const startButton = document.querySelector('.start');
const screens = document.querySelectorAll('.screen');

startButton.addEventListener('click', startGame);

function startGame(e) {
  e.preventDefault();
  screens[0].classList.add('up');
}