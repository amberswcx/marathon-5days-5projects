const container = document.querySelector('.container');
const SQUARES_NUMBER = 500;
const colors = ['#e52b50', '#e32636', '#ff033e', '#c41e3a', '#801818', '#f5f5dc', '#fff8e7', '#fffdd0'];

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseover', () => addColor(square));
  square.addEventListener('mouseleave', () => removeColor(square));
  container.append(square);
}

function addColor(elem) {
  const color = getColor();
  elem.style.background = color;
  elem.style.boxShadow = `0 0 2px red, 0 0 25px ${color}, 0 0 50px ${color}`;
}

function removeColor(elem) {
  elem.style.background = '#222222';
  elem.style.boxShadow = '0 0 2px #000000';
}

function getColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}