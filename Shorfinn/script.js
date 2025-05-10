document.addEventListener("DOMContentLoaded", () => {
  const slideshowContainer = document.querySelector(".slideshow-container");
  const slides = document.querySelectorAll(".slideshow");
  const totalSlides = slides.length;

  // Slideshow kapsayıcısının genişliğini ayarla
  slideshowContainer.style.width = `${totalSlides * 100}%`;

  // Her bir resmin genişliğini ayarla
  slides.forEach((slide) => {
    slide.style.width = `${100 / totalSlides}%`;
  });

  let currentIndex = 0;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    slideshowContainer.style.transform = `translateX(-${
      currentIndex * (100 / totalSlides)
    }%)`;
  }, 6000); // Her 3 saniyede bir kaydır
});

const slider = document.getElementById("textSlider");
let pos = window.innerWidth;

function slideText() {
  pos -= 2; // hız
  slider.style.transform = `translateX(${pos}px)`;

  if (pos < -slider.offsetWidth) {
    pos = window.innerWidth;
  }

  requestAnimationFrame(slideText);
}

slideText();
