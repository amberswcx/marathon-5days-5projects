const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const downButton = document.querySelector('.down-button');
const upButton = document.querySelector('.up-button');
const slidesCount = mainSlide.querySelectorAll('div').length;
let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

downButton.addEventListener('click', () => changeSlide('down'));
upButton.addEventListener('click', () => changeSlide('up'));

function changeSlide(direction) {
  const height = mainSlide.clientHeight;

  if (direction === 'down') {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }

  } else if (direction === 'up') {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  }

  mainSlide.style.transform = `translateY(-${height * activeSlideIndex}px)`;
  sidebar.style.transform = `translateY(${height * activeSlideIndex}px)`;
}