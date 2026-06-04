/* ============================================================
   SNACKIE VIET — script.js
   UNA Consulting / 青木
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── LANGUAGE TOGGLE ─────────────────────────────────────
  const langBtns = document.querySelectorAll('.lang-btn');
  const body = document.body;

  const langMap = { en: '', vi: 'lang-vi', zh: 'lang-zh', ko: 'lang-ko', es: 'lang-es' };

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      Object.values(langMap).forEach(cls => { if (cls) body.classList.remove(cls); });
      if (langMap[lang]) body.classList.add(langMap[lang]);
      langBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // ── HAMBURGER MENU ──────────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.remove('open'));
    });
  }

  // ── FAQ ACCORDION ────────────────────────────────────────
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-btn');
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      faqItems.forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // ── CONTACT FORM ─────────────────────────────────────────
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('.form-submit');
      btn.disabled = true;
      btn.textContent = 'Sending...';
      setTimeout(() => {
        btn.textContent = '✓ Message Sent!';
        form.reset();
      }, 1400);
    });
  }

  // ── SMOOTH SCROLL ────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ── IMAGE FALLBACK ───────────────────────────────────────
  document.querySelectorAll('img[onerror]').forEach(img => {
    img.addEventListener('error', function() { this.style.display = 'none'; });
  });

});
