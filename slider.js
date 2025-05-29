const slides = document.getElementById('slides');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const dotsContainer = document.getElementById('dots');

const totalSlides = document.querySelectorAll('.slide').length;
let currentIndex = 0;
let autoSlideInterval;

function updateSlidePosition() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  updateDots();
}

function showNextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlidePosition();
}

function showPrevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlidePosition();
}

function createDots() {
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('span');
    dot.addEventListener('click', () => {
      currentIndex = i;
      updateSlidePosition();
    });
    dotsContainer.appendChild(dot);
  }
  updateDots();
}

function updateDots() {
  const dots = dotsContainer.querySelectorAll('span');
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

function startAutoSlide() {
  autoSlideInterval = setInterval(showNextSlide, 3000);
}

function pauseAutoSlide() {
  clearInterval(autoSlideInterval);
}

prevButton.addEventListener('click', showPrevSlide);
nextButton.addEventListener('click', showNextSlide);
slides.addEventListener('mouseover', pauseAutoSlide);
slides.addEventListener('mouseout', startAutoSlide);

document.querySelector('.slider').addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') showNextSlide();
  if (e.key === 'ArrowLeft') showPrevSlide();
});

createDots();
updateSlidePosition();
startAutoSlide();
