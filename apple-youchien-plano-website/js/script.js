/* あっぷる幼稚園 プレイノ園 — vanilla JS のみ。フォームには一切触れない（Netlify 送信を止めないため）
   言語切替は data-key の入れ替えではなく、日本語ページ(/) と 英語ページ(/en/) の実URL間リンクで行う。
   これにより日本語・英語それぞれのキーワードで検索・AIに拾われる。 */

/* ---------- モバイルメニュー（display:none を既定にして :not([hidden]) で開く） ---------- */
const burger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (burger && navLinks) {
  function syncMenu(){
    const desktop = window.matchMedia('(min-width: 769px)').matches;
    navLinks.hidden = desktop ? false : true;
    burger.setAttribute('aria-expanded','false');
  }
  syncMenu();
  window.addEventListener('resize', syncMenu);

  burger.addEventListener('click', () => {
    const open = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!open));
    navLinks.hidden = open;
  });

  navLinks.addEventListener('click', e => {
    if (e.target.matches('.nav-link') && !window.matchMedia('(min-width: 769px)').matches){
      navLinks.hidden = true;
      burger.setAttribute('aria-expanded','false');
    }
  });
}

/* ---------- FAQ アコーディオン ---------- */
document.querySelectorAll('.acc-q').forEach(q => {
  const panel = q.nextElementSibling;
  panel.hidden = true;
  q.addEventListener('click', () => {
    const open = q.getAttribute('aria-expanded') === 'true';
    q.setAttribute('aria-expanded', String(!open));
    panel.hidden = open;
  });
});

/* ---------- フッターの年 ---------- */
const yEl = document.getElementById('year');
if (yEl) yEl.textContent = new Date().getFullYear();
