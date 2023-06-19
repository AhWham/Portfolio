const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentSlide = 0;

function hideSlides() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  dots.forEach((dot) => {
    dot.classList.remove('active-dot');
  });
}

function nextSlide() {
  hideSlides();
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide();
  setActiveDot(nextIndex);
}

function previousSlide() {
  hideSlides();
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide();
  setActiveDot(prevIndex);
}

function setActiveDot(index) {
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle('active-dot', dotIndex === index);
    });
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
    });
  });
  

prevBtn.addEventListener('click', previousSlide);
nextBtn.addEventListener('click', nextSlide);

showSlide(0); // Show the initial slide
setActiveDot(0);

function showSlide(index) {
  hideSlides();
  slides[index].classList.add('active');
  dots[index].classList.add('active-dot');
}

function nextSlide() {
  const currentSlide = document.querySelector('.slide.active');
  const currentIndex = Array.from(slides).indexOf(currentSlide);
  const nextIndex = (currentIndex + 1) % slides.length;
  showSlide(nextIndex);
  setActiveDot(nextIndex);
}

function previousSlide() {
  const currentSlide = document.querySelector('.slide.active');
  const currentIndex = Array.from(slides).indexOf(currentSlide);
  const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(prevIndex);
  setActiveDot(prevIndex);
}

function setActiveDot(index) {
  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle('active-dot', dotIndex === index);
  });
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
    setActiveDot(index);
  });
});

