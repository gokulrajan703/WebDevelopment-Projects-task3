const slides = document.getElementById('slides');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

const totalSlides = document.querySelectorAll('.slide').length;
function updateSlidePosition() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function showNextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlidePosition();
}


function showPrevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlidePosition();
}


nextButton.addEventListener('click', showNextSlide);
prevButton.addEventListener('click', showPrevSlide);

setInterval(showNextSlide, 3000);
