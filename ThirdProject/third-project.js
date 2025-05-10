// Nav elementini seç
const header = document.querySelector(".navbar-header");

// Debounce fonksiyonu
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

// Scroll handler
const handleScroll = debounce(() => {
  // Scroll pozisyonuna göre opacity ayarla
  if (window.scrollY > 50) {
    header.style.opacity = "0.5"; // 100 pikselden sonra opacity 0.5
  } else {
    header.style.opacity = "1"; // 100 pikselin altında opacity 1
  }
}, 10);

// Scroll event’ını dinle
window.addEventListener("scroll", handleScroll);
