/* Tokyo Teriyaki — script.js */

// ── Language switcher ──
const langData = {
  en: {
    'nav-menu': 'Menu',
    'nav-hours': 'Hours',
    'nav-contact': 'Contact',
    'nav-order': 'Order Now',
    'hero-eyebrow': 'Carrollton, TX · Lunch',
    'hero-h1': 'Real Japanese flavors. <strong>Lunch, done right.</strong>',
    'hero-desc': 'Teriyaki, katsu, yakisoba — made fresh, served fast.',
    'hero-stat-label-1': 'Google Reviews',
    'hero-stat-label-2': 'Yelp Reviews',
    'hero-stat-label-3': 'Years Open',
    'hero-cta-1': 'Order Now',
    'hero-cta-2': 'See Menu',
    'faq-q1': 'What are your hours?',
    'faq-a1': 'Monday through Friday, 10:00 AM – 3:00 PM. We are closed on Saturday and Sunday.',
    'faq-q2': 'Where are you located? Is there parking?',
    'faq-a2': 'We are at 1630 Valwood Pkwy, Ste 110, Carrollton, TX 75006. Free parking is available in the adjacent lot.',
    'faq-q3': 'Do you offer takeout?',
    'faq-a3': 'Yes — takeout is our specialty. Call ahead at (972) 620-0211 and your order will be ready when you arrive.',
    'faq-q4': 'Do you offer delivery?',
    'faq-a4': 'Yes, we are available on Uber Eats for delivery to nearby areas.',
    'faq-q5': 'What is on the menu?',
    'faq-a5': 'We serve teriyaki bowls (chicken, beef, pork, shrimp, short ribs), chicken katsu, yakisoba, stir fry plates, sushi rolls, egg rolls, and more.',
    'faq-q6': 'Do you have vegetarian options?',
    'faq-a6': 'Yes — we offer tofu teriyaki, tofu yakisoba, stir fry tofu, and vegetable-friendly sides.',
    'faq-q7': 'Can I order for a large group or catering?',
    'faq-a7': 'Yes, we welcome catering orders. Call us at (972) 620-0211 to discuss your needs and we will be happy to accommodate.',
    'faq-q8': 'Are your prices affordable?',
    'faq-a8': 'We pride ourselves on generous portions at honest prices. Most plates are under $15, making us one of the best-value Japanese lunches in Carrollton.',
    'faq-q9': 'Is the food freshly prepared?',
    'faq-a9': 'Yes. Everything is made fresh daily — our egg rolls are prepared every morning and our dishes are made to order.',
    'faq-q10': 'Do you accept credit cards?',
    'faq-a10': 'Yes, we accept all major credit cards as well as cash.',
    'contact-label': 'Contact Us',
    'contact-title': 'Let\'s make your lunch great.',
    'contact-sub': 'Catering inquiries, questions, or just want to say hi — we\'d love to hear from you.',
  },
  ja: {
    'nav-menu': 'メニュー',
    'nav-hours': '営業時間',
    'nav-contact': 'お問い合わせ',
    'nav-order': '注文する',
    'hero-eyebrow': 'キャロルトン、TX · ランチ',
    'hero-h1': '本格的な日本の味。<strong>ランチを、もっと楽しく。</strong>',
    'hero-desc': '照り焼き、カツ、焼きそば — 毎日新鮮に、素早くご提供。',
    'hero-stat-label-1': 'Googleレビュー',
    'hero-stat-label-2': 'Yelpレビュー',
    'hero-stat-label-3': '年の実績',
    'hero-cta-1': '今すぐ注文',
    'hero-cta-2': 'メニューを見る',
    'faq-q1': '営業時間を教えてください。',
    'faq-a1': '月曜〜金曜 10:00 AM〜3:00 PM。土日はお休みです。',
    'faq-q2': '場所と駐車場は？',
    'faq-a2': '1630 Valwood Pkwy, Ste 110, Carrollton, TX 75006。隣接の駐車場は無料でご利用いただけます。',
    'faq-q3': 'テイクアウトはできますか？',
    'faq-a3': 'はい、テイクアウトも承っています。お電話でご注文いただけば、到着時にご用意しております。',
    'faq-q4': '配達はしていますか？',
    'faq-a4': 'Uber Eatsでデリバリーに対応しています。',
    'faq-q5': 'どんなメニューがありますか？',
    'faq-a5': '照り焼き丼（チキン・牛肉・豚肉・エビ・ショートリブ）、チキンカツ、焼きそば、炒め物、寿司ロール、春巻きなどをご用意しています。',
    'faq-q6': 'ベジタリアン向けメニューはありますか？',
    'faq-a6': 'はい、豆腐照り焼き・豆腐焼きそば・豆腐炒めなどをご用意しています。',
    'faq-q7': '大人数やケータリングは対応できますか？',
    'faq-a7': 'はい、ケータリングも承っています。お電話でご相談ください。',
    'faq-q8': '価格帯はどのくらいですか？',
    'faq-a8': 'ほとんどのプレートは$15以下です。キャロルトンでコスパ最高の日本食ランチをお届けします。',
    'faq-q9': '料理は新鮮ですか？',
    'faq-a9': 'はい、毎日新鮮に作っています。春巻きは毎朝手作りし、料理は注文を受けてから作ります。',
    'faq-q10': 'クレジットカードは使えますか？',
    'faq-a10': 'はい、主要クレジットカードと現金に対応しています。',
    'contact-label': 'お問い合わせ',
    'contact-title': 'ランチのご予約・お問い合わせ',
    'contact-sub': 'ケータリングのご相談、ご質問はお気軽にどうぞ。',
  },
  zh: {
    'nav-menu': '菜单',
    'nav-hours': '营业时间',
    'nav-contact': '联系我们',
    'nav-order': '立即点餐',
    'hero-eyebrow': '卡罗尔顿，TX · 午餐',
    'hero-h1': '正宗日本风味。<strong>午餐，精心呈现。</strong>',
    'hero-desc': '照烧、炸猪排、炒面 — 每日新鲜制作，快速上桌。',
    'hero-stat-label-1': 'Google 评价',
    'hero-stat-label-2': 'Yelp 评价',
    'hero-stat-label-3': '年历史',
    'hero-cta-1': '立即点餐',
    'hero-cta-2': '查看菜单',
    'contact-label': '联系我们',
    'contact-title': '期待您的光临',
    'contact-sub': '承接团餐及外卖订单，欢迎随时咨询。',
  },
  ko: {
    'nav-menu': '메뉴',
    'nav-hours': '영업 시간',
    'nav-contact': '문의',
    'nav-order': '주문하기',
    'hero-eyebrow': '캐럴턴, TX · 런치',
    'hero-h1': '정통 일본 맛. <strong>점심, 제대로 즐기세요.</strong>',
    'hero-desc': '데리야키, 카츠, 야키소바 — 매일 신선하게 빠르게.',
    'hero-stat-label-1': 'Google 리뷰',
    'hero-stat-label-2': 'Yelp 리뷰',
    'hero-stat-label-3': '년 운영',
    'hero-cta-1': '지금 주문',
    'hero-cta-2': '메뉴 보기',
    'contact-label': '문의하기',
    'contact-title': '함께하는 점심이 기다립니다',
    'contact-sub': '케이터링 문의나 질문이 있으면 편하게 연락 주세요.',
  },
  es: {
    'nav-menu': 'Menú',
    'nav-hours': 'Horario',
    'nav-contact': 'Contacto',
    'nav-order': 'Ordenar Ahora',
    'hero-eyebrow': 'Carrollton, TX · Almuerzo',
    'hero-h1': 'Sabores japoneses auténticos. <strong>El almuerzo perfecto.</strong>',
    'hero-desc': 'Teriyaki, katsu, yakisoba — fresco todos los días, rápido en el mostrador.',
    'hero-stat-label-1': 'Reseñas Google',
    'hero-stat-label-2': 'Reseñas Yelp',
    'hero-stat-label-3': 'Años Abierto',
    'hero-cta-1': 'Ordenar Ahora',
    'hero-cta-2': 'Ver Menú',
    'contact-label': 'Contáctenos',
    'contact-title': 'Hagamos tu almuerzo increíble.',
    'contact-sub': 'Preguntas sobre catering o cualquier consulta — con gusto le atendemos.',
  }
};

let currentLang = 'en';

function applyLang(lang) {
  currentLang = lang;
  const data = langData[lang] || langData.en;
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.dataset.key;
    if (data[key] !== undefined) {
      el.innerHTML = data[key];
    } else if (langData.en[key] !== undefined) {
      el.innerHTML = langData.en[key];
    }
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

// ── Mobile nav ──
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('nav-open');
  hamburger.setAttribute('aria-expanded', String(open));
});
// close on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('nav-open'));
});

// mobile nav open style
const style = document.createElement('style');
style.textContent = `
  @media (max-width: 768px) {
    .nav-links.nav-open {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 62px; left: 0; right: 0;
      background: oklch(15% 0.02 50 / 0.98);
      padding: 16px 24px 24px;
      gap: 8px;
      border-bottom: 1px solid oklch(30% 0.01 60 / 0.4);
    }
  }
`;
document.head.appendChild(style);

// ── FAQ accordion ──
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});

// ── Smooth scroll for nav ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── Image onerror handler ──
document.querySelectorAll('img[data-fallback]').forEach(img => {
  img.onerror = function() { this.style.display = 'none'; };
});
