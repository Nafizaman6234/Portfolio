// Loader
window.addEventListener('load', () => {
  document.getElementById('loading').style.display = 'none';
  document.getElementById('main-content').style.display = 'block';
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      scrollTopBtn.style.display = "block";
  } else {
      scrollTopBtn.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Image Slider (for portfolio images)
let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slider-image');
  if (index >= slides.length) {
      currentIndex = 0;
  } else if (index < 0) {
      currentIndex = slides.length - 1;
  } else {
      currentIndex = index;
  }

  // Move the slider container to show the current image
  const sliderContainer = document.querySelector('.slider-container');
  sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Next and Previous Button Click Events
document.querySelectorAll('.next-btn').forEach(button => {
  button.addEventListener('click', () => {
      showSlide(currentIndex + 1);
  });
});

document.querySelectorAll('.prev-btn').forEach(button => {
  button.addEventListener('click', () => {
      showSlide(currentIndex - 1);
  });
});

// Initialize the first slide
showSlide(currentIndex);
