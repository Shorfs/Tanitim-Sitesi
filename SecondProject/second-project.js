document.addEventListener("DOMContentLoaded", function () {
  const mailIcon = document.querySelector(".mail-icon");
  const mailForm = document.querySelector(".mail-form");

  // Mail iconuna tıklandığında formu aç/kapat
  mailIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    mailForm.classList.add("open"); // Formu aç
    mailIcon.classList.add("hidden"); // İkonu gizle
  });

  // Sayfanın herhangi bir yerine tıklandığında formu kapat
  document.addEventListener("click", () => {
    if (mailForm.classList.contains("open")) {
      mailForm.classList.remove("open"); // Formu kapat
      mailIcon.classList.remove("hidden"); // İkonu geri getir
    }
  });

  // Formun içindeyken tıklama olayını durdur
  mailForm.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const quote = document.querySelector(".quote");
  const aboutSection = document.querySelector(".about");
  let lastScrollY = window.scrollY;

  // Scroll olayını dinle
  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    // Yukarı kaydırıldığında animasyonları tetikle
    if (currentScrollY < lastScrollY) {
      navbar.classList.add("animate");
      quote.classList.add("animate");
    } else {
      navbar.classList.remove("animate");
      quote.classList.remove("animate");
    }

    // "About Me" kısmına ulaşıldığında animasyonları durdur
    const aboutTop = aboutSection.getBoundingClientRect().top + window.scrollY;
    if (currentScrollY >= aboutTop - window.innerHeight / 2) {
      navbar.classList.remove("animate");
      quote.classList.remove("animate");
    }

    lastScrollY = currentScrollY;
  });
});
