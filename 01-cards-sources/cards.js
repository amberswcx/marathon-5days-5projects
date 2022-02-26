const slides = document.querySelectorAll('.slide');
slides.forEach(slide => slide.addEventListener('click', showSlide))

function showSlide() {
  clearActive();
  this.classList.add('active');
}

function clearActive() {
  slides.forEach(slide => slide.classList.remove('active'))
}