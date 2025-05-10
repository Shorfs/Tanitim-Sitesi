document.querySelector(".navbar__toggle").addEventListener("click", () => {
  document
    .querySelector(".navbar__list")
    .classList.toggle("navbar__list--open");
});

const cards = document.querySelectorAll(".project-card, .package-card");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = `${index * 0.1}s`;
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

cards.forEach((card) => observer.observe(card));
