function slidesPlugin(active) {
  const slides = document.querySelectorAll('.slide');
  slides.forEach(slide => slide.addEventListener('click', showSlide))

  slides[active].classList.add('active');

  function showSlide() {
    clearActive();
    this.classList.add('active');
  }

  function clearActive() {
    slides.forEach(slide => slide.classList.remove('active'))
  }
}

slidesPlugin(Math.floor(Math.random() * 4));