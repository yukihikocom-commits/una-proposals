/* ========================================
   THE INS HAIR SALON — js/script.js
   ======================================== */

(function() {
  'use strict';

  /* ===== Language Switcher ===== */
  let currentLang = 'en';

  function applyLang(lang) {
    currentLang = lang;

    // Text nodes (data-{lang} attributes)
    document.querySelectorAll('[data-en]').forEach(el => {
      const text = el.getAttribute('data-' + lang) || el.getAttribute('data-en');
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT') {
        el.placeholder = text;
      } else {
        el.innerHTML = text;
      }
    });

    // Placeholder-specific attributes (data-placeholder-{lang})
    document.querySelectorAll('[data-placeholder-en]').forEach(el => {
      const ph = el.getAttribute('data-placeholder-' + lang) || el.getAttribute('data-placeholder-en');
      el.placeholder = ph;
    });

    // Select options
    document.querySelectorAll('select option[data-en]').forEach(el => {
      const text = el.getAttribute('data-' + lang) || el.getAttribute('data-en');
      el.textContent = text;
    });

    // Update active lang button
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      applyLang(btn.getAttribute('data-lang'));
    });
  });

  /* ===== Scroll: NAV background ===== */
  const nav = document.getElementById('nav');
  function updateNav() {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  /* ===== Hamburger Menu ===== */
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open);
      mobileMenu.classList.toggle('open', open);
    });
    // Close on mobile link click
    mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', false);
        mobileMenu.classList.remove('open');
      });
    });
  }

  /* ===== FAQ Accordion ===== */
  document.querySelectorAll('.faq-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      // Close all
      document.querySelectorAll('.faq-btn').forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        const ans = b.nextElementSibling;
        if (ans) ans.classList.remove('open');
      });
      // Toggle current
      if (!expanded) {
        btn.setAttribute('aria-expanded', 'true');
        const answer = btn.nextElementSibling;
        if (answer) answer.classList.add('open');
      }
    });
  });

  /* ===== Smooth scroll for anchor links ===== */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 72; // nav height
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ===== Scroll-reveal (IntersectionObserver) ===== */
  if ('IntersectionObserver' in window) {
    const style = document.createElement('style');
    style.textContent = `
      .reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.5s ease, transform 0.5s ease; }
      .reveal.visible { opacity: 1; transform: translateY(0); }
    `;
    document.head.appendChild(style);

    const revealTargets = document.querySelectorAll(
      '.service-card, .review-card, .faq-item, .story-img, .hero-stat'
    );
    revealTargets.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 50);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealTargets.forEach(el => observer.observe(el));
  }

  /* ===== prefers-reduced-motion ===== */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.strip-track, .hero-photo').forEach(el => {
      el.style.animation = 'none';
    });
  }

})();
