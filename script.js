// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav ul");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// ScrollReveal Animations
ScrollReveal({
  distance: '60px',
  duration: 1000,
  delay: 200,
  reset: true
});
ScrollReveal().reveal('.hero-text', { delay: 300, origin: 'bottom' });
ScrollReveal().reveal('.about-text', { delay: 200, origin: 'left' });
ScrollReveal().reveal('.about-image', { delay: 400, origin: 'right' });
ScrollReveal().reveal('.team-card', { delay: 200, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.media-grid img, .media-grid video', { delay: 100, origin: 'bottom', interval: 100 });
ScrollReveal().reveal('.news-card', { delay: 200, origin: 'bottom', interval: 150 });
ScrollReveal().reveal('.contact form', { delay: 300, origin: 'bottom' });
