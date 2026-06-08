/* ============================================
   VAN'S HAIR SALON — script.js
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---- NAV scroll state ----
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // ---- Hamburger menu ----
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });
  mobileMenu?.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // ---- Language switcher ----
  const langBtns = document.querySelectorAll('.lang-btn');
  let currentLang = 'en';

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang === currentLang) return;
      currentLang = lang;
      langBtns.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
      applyLang(lang);
    });
  });

  function applyLang(lang) {
    document.querySelectorAll('[data-en]').forEach(el => {
      const text = el.dataset[lang] || el.dataset.en;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = text;
      } else {
        el.innerHTML = text;
      }
    });
  }

  // ---- FAQ accordion ----
  document.querySelectorAll('.faq-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // ---- Highlight today's hours ----
  const days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
  const todayName = days[new Date().getDay()];
  const todayRow = document.querySelector(`.hours-row[data-day="${todayName}"]`);
  if (todayRow) todayRow.classList.add('today');

  // ---- Contact form (basic) ----
  const form = document.querySelector('.contact-form');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    btn.disabled = true;
    btn.textContent = 'Sending...';
    setTimeout(() => {
      btn.textContent = 'Message Sent ✓';
      btn.style.background = 'oklch(60% 0.13 72)';
    }, 1200);
  });

});
