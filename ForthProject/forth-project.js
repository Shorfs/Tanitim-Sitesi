document.addEventListener("DOMContentLoaded", () => {
  const mainText = document.querySelector(".main-text");
  const mainVideo = document.querySelector(".main-video");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          mainText.classList.add("visible");
        } else {
          mainText.classList.remove("visible");
        }
      });
    },
    { threshold: 0.5 } // Görünürlüğün %50'si tetikleme için yeterli
  );

  observer.observe(mainVideo); // Artık .main-video gözlemleniyor
});
