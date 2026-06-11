// =============================================
// EMILLY VALENTINE SITE — main.js
// =============================================

// ---- Floating hearts ----
(function spawnHearts() {
  const container = document.getElementById('hearts');
  if (!container) return;

  const emojis = ['💕', '❤️', '🌸', '💗', '✨', '💖'];
  const count  = 18;

  for (let i = 0; i < count; i++) {
    const el = document.createElement('span');
    el.className        = 'heart-float';
    el.textContent      = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left            = Math.random() * 100 + '%';
    el.style.bottom          = '-2rem';
    el.style.animationDelay  = (Math.random() * 6) + 's';
    el.style.animationDuration = (4 + Math.random() * 4) + 's';
    container.appendChild(el);
  }
})();

// ---- Scroll-reveal (opcional) ----
// Adiciona a classe 'visible' quando o elemento entra no viewport
// Podes usar isto com animações CSS para revelar secções ao fazer scroll.
const revealEls = document.querySelectorAll('.msg-block, .letter, .photos-title');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // anima só uma vez
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));
