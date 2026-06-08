/* ============================================================
   HIBACHI MASTER — script.js
   ============================================================ */

/* ── Language Toggle ───────────────────────────────────────── */
const translations = {
  en: {
    'nav-menu':    'Menu',
    'nav-story':   'Our Story',
    'nav-hours':   'Hours',
    'nav-order':   'Order Now',
    'hero-eyebrow':'Prosper, TX · Food Truck',
    'hero-h1-1':   'Real Flame.',
    'hero-h1-2':   'Real Flavor.',
    'hero-desc':   'Fresh hibachi grilled to order — chicken, steak, shrimp, and filet mignon. Right here in Prosper.',
    'hero-ai-def': 'Hibachi Master is a Japanese hibachi food truck in Prosper, TX, serving fresh grilled chicken, steak, shrimp, and fried rice daily. Walk-ins welcome.',
    'stat1-label': 'Google Reviews',
    'stat2-label': 'Avg. Rating',
    'stat3-label': 'TripAdvisor Rank',
    'cta-order':   'Order Now',
    'cta-menu':    'See Menu',
    'menu-eyebrow':'What We Serve',
    'menu-title':  'Built for the Grill',
    'story-eyebrow':'Our Story',
    'story-title': 'Made to Order. Every Time.',
    'feat-eyebrow':'Why Hibachi Master',
    'feat-title':  'Quality You Can Taste',
    'rev-eyebrow': 'What Guests Say',
    'rev-title':   'Real Reviews',
    'hours-eyebrow':'Find Us',
    'hours-title': 'Hours & Location',
    'faq-eyebrow': 'Questions?',
    'faq-title':   'FAQ',
    'contact-eyebrow':'Get in Touch',
    'contact-title':'Questions & Catering',
  },
  ja: {
    'nav-menu':    'メニュー',
    'nav-story':   'ストーリー',
    'nav-hours':   '営業時間',
    'nav-order':   '注文する',
    'hero-eyebrow':'テキサス州プロスパー · フードトラック',
    'hero-h1-1':   '本物の炎。',
    'hero-h1-2':   '本物の味。',
    'hero-desc':   '注文を受けてから鉄板で焼くヒバチ料理。チキン・ステーキ・シュリンプ・フィレミニョン。',
    'hero-ai-def': 'Hibachi Masterはテキサス州プロスパーのヒバチフードトラックです。毎日新鮮な鉄板焼き料理を提供しています。',
    'stat1-label': 'Googleレビュー',
    'stat2-label': '平均評価',
    'stat3-label': 'TripAdvisorランキング',
    'cta-order':   '今すぐ注文',
    'cta-menu':    'メニューを見る',
    'menu-eyebrow':'メニュー',
    'menu-title':  'ヒバチの定番',
    'story-eyebrow':'ストーリー',
    'story-title': '注文を受けてから、毎回丁寧に。',
    'feat-eyebrow':'選ばれる理由',
    'feat-title':  '素材とこだわり',
    'rev-eyebrow': 'お客様の声',
    'rev-title':   'レビュー',
    'hours-eyebrow':'アクセス',
    'hours-title': '営業時間・場所',
    'faq-eyebrow': 'よくある質問',
    'faq-title':   'FAQ',
    'contact-eyebrow':'お問い合わせ',
    'contact-title':'ケータリング・お問い合わせ',
  },
  zh: {
    'nav-menu':    '菜单',
    'nav-story':   '我们的故事',
    'nav-hours':   '营业时间',
    'nav-order':   '立即订餐',
    'hero-eyebrow':'德州普罗斯珀 · 美食车',
    'hero-h1-1':   '真正的火焰。',
    'hero-h1-2':   '真正的味道。',
    'hero-desc':   '现点现做的铁板烧——鸡肉、牛排、虾和菲力牛排。就在普罗斯珀。',
    'hero-ai-def': 'Hibachi Master是德州普罗斯珀的日式铁板烧美食车，每天提供新鲜烧烤料理。',
    'stat1-label': 'Google 评价',
    'stat2-label': '平均评分',
    'stat3-label': 'TripAdvisor 排名',
    'cta-order':   '立即订餐',
    'cta-menu':    '查看菜单',
    'menu-eyebrow':'菜单',
    'menu-title':  '铁板烧经典',
    'story-eyebrow':'我们的故事',
    'story-title': '现点现做，每次如此。',
    'feat-eyebrow':'为何选择我们',
    'feat-title':  '品质可尝',
    'rev-eyebrow': '顾客评价',
    'rev-title':   '真实评价',
    'hours-eyebrow':'找到我们',
    'hours-title': '营业时间与地址',
    'faq-eyebrow': '常见问题',
    'faq-title':   '问答',
    'contact-eyebrow':'联系我们',
    'contact-title':'问询与外烩',
  },
  ko: {
    /* 다국어 텍스트: 네이티브 리뷰 미완료 — 공개 전 수정 필요 */
    'nav-menu':    '메뉴',
    'nav-story':   '스토리',
    'nav-hours':   '영업시간',
    'nav-order':   '주문하기',
    'hero-eyebrow':'텍사스 프로스퍼 · 푸드 트럭',
    'hero-h1-1':   '진짜 불꽃.',
    'hero-h1-2':   '진짜 맛.',
    'hero-desc':   '주문 즉시 철판에서 구워내는 히바치 — 치킨, 스테이크, 새우, 필레 미뇽.',
    'hero-ai-def': 'Hibachi Master는 텍사스 프로스퍼의 일본식 히바치 푸드 트럭입니다.',
    'stat1-label': 'Google 리뷰',
    'stat2-label': '평균 평점',
    'stat3-label': 'TripAdvisor 순위',
    'cta-order':   '지금 주문',
    'cta-menu':    '메뉴 보기',
    'menu-eyebrow':'메뉴',
    'menu-title':  '철판 위의 클래식',
    'story-eyebrow':'스토리',
    'story-title': '주문 즉시, 매번 정성껏.',
    'feat-eyebrow':'선택하는 이유',
    'feat-title':  '맛으로 증명합니다',
    'rev-eyebrow': '고객 후기',
    'rev-title':   '실제 리뷰',
    'hours-eyebrow':'찾아오시는 길',
    'hours-title': '영업시간 및 위치',
    'faq-eyebrow': '자주 묻는 질문',
    'faq-title':   'FAQ',
    'contact-eyebrow':'문의하기',
    'contact-title':'케이터링 및 문의',
  },
  es: {
    'nav-menu':    'Menú',
    'nav-story':   'Nuestra Historia',
    'nav-hours':   'Horario',
    'nav-order':   'Ordenar',
    'hero-eyebrow':'Prosper, TX · Camión de Comida',
    'hero-h1-1':   'Fuego Real.',
    'hero-h1-2':   'Sabor Real.',
    'hero-desc':   'Hibachi a la plancha, hecho a pedido — pollo, bistec, camarones y filete. Aquí en Prosper.',
    'hero-ai-def': 'Hibachi Master es un camión de comida japonesa hibachi en Prosper, TX, que sirve pollo, bistec y mariscos frescos a la plancha todos los días.',
    'stat1-label': 'Reseñas Google',
    'stat2-label': 'Calificación',
    'stat3-label': 'Ranking TripAdvisor',
    'cta-order':   'Ordenar Ahora',
    'cta-menu':    'Ver Menú',
    'menu-eyebrow':'Lo Que Servimos',
    'menu-title':  'Hecho para la Parrilla',
    'story-eyebrow':'Nuestra Historia',
    'story-title': 'Hecho a Pedido. Siempre.',
    'feat-eyebrow':'Por Qué Elegirnos',
    'feat-title':  'Calidad que se Saborea',
    'rev-eyebrow': 'Lo que Dicen',
    'rev-title':   'Reseñas Reales',
    'hours-eyebrow':'Encuéntranos',
    'hours-title': 'Horario y Ubicación',
    'faq-eyebrow': '¿Preguntas?',
    'faq-title':   'FAQ',
    'contact-eyebrow':'Contáctanos',
    'contact-title':'Consultas y Catering',
  },
};

let currentLang = 'en';

function applyLang(lang) {
  currentLang = lang;
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang;
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

/* ── Hamburger Menu ─────────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger?.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
  hamburger.querySelectorAll('span')[0].style.transform = isOpen ? 'rotate(45deg) translate(5px,5px)' : '';
  hamburger.querySelectorAll('span')[1].style.opacity = isOpen ? '0' : '1';
  hamburger.querySelectorAll('span')[2].style.transform = isOpen ? 'rotate(-45deg) translate(5px,-5px)' : '';
});

mobileMenu?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
    hamburger.querySelectorAll('span').forEach(s => s.style.transform = s.style.opacity = '');
  });
});

/* ── FAQ Accordion ──────────────────────────────────────────── */
document.querySelectorAll('.faq-item').forEach(item => {
  item.querySelector('.faq-q')?.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

/* ── Fade-in on Scroll ──────────────────────────────────────── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

/* ── Smooth Scroll ──────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ── Image onerror ──────────────────────────────────────────── */
document.querySelectorAll('img[data-fallback]').forEach(img => {
  img.addEventListener('error', () => { img.style.display = 'none'; });
});

/* ── Contact form (client-side only) ────────────────────────── */
const form = document.getElementById('contact-form');
form?.addEventListener('submit', e => {
  e.preventDefault();
  const btn = form.querySelector('.form-submit');
  btn.textContent = 'Sent! We\'ll be in touch.';
  btn.disabled = true;
  btn.style.background = 'oklch(55% 0.14 145)';
});
