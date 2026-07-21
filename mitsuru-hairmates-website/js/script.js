/* Mitsuru Hairmates — interactions */
(function () {
  'use strict';

  /* ---------- year ---------- */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* ---------- mobile menu ---------- */
  var burger = document.querySelector('.hamburger');
  var menu = document.getElementById('mobile-menu');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      var open = menu.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- gallery filter ---------- */
  var filterBtns = document.querySelectorAll('.filter-btn');
  var galItems = document.querySelectorAll('.gal-item');
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('is-active'); });
      btn.classList.add('is-active');
      var f = btn.getAttribute('data-filter');
      galItems.forEach(function (item) {
        var show = (f === 'all' || item.getAttribute('data-cat') === f);
        item.classList.toggle('is-hidden', !show);
      });
    });
  });

  /* ---------- language toggle (EN default + JA) ---------- */
  var JA = {
    nav_services:'メニュー', nav_gallery:'ギャラリー', nav_story:'お店について',
    nav_reviews:'お客様の声', nav_visit:'アクセス', nav_faq:'よくある質問', nav_book:'予約する',

    hero_kicker:'プラノ・完全予約制',
    hero_h1:'一つひとつ、<br>手で仕上げる。',
    hero_desc:'縮毛矯正、ハサミによる丁寧なカット、髪を傷めないカラー。おひとりずつ、Phenix Salon Suites の一室で。',
    hero_cta1:'予約する', hero_cta2:'メニューを見る',
    hero_meta_rating:'★ Google 4.7 ・ 86件のレビュー',

    svc_eyebrow:'メニュー', svc_title:'メニューと料金',
    svc_lead:'カット・カラー・パーマ・縮毛矯正。どのメニューも短いカウンセリングから始め、なりたい仕上がりに合わせます。以下は料金の目安です。',
    svc_cat_straight:'パーマ・縮毛矯正',
    svc_jstraight:'縮毛矯正', svc_jstraight_bw:'縮毛矯正＋毛先ワンカール', svc_digital:'デジタルパーマ', svc_menperm:'メンズパーマ',
    svc_cat_cut:'カット',
    svc_women:'レディースカット（シャンプー・ブロー込）', svc_men:'メンズカット（シャンプー・ブロー込）', svc_bang:'前髪カット',
    svc_cat_color:'カラー',
    svc_roots:'リタッチカラー', svc_single:'ワンカラー', svc_hl:'ハイライト（ブリーチなし）',
    svc_cat_students:'学生カット',
    svc_hs_b:'高校生・男子', svc_hs_g:'高校生・女子', svc_jh_b:'中学生・男子', svc_jh_g:'中学生・女子', svc_el_b:'小学生・男子', svc_el_g:'小学生・女子',
    svc_note:'料金は髪の長さや状態により変わります。カウンセリング時にご案内します。',

    gal_eyebrow:'施術ギャラリー', gal_title:'仕上がりを見る',
    gal_lead:'ハサミで仕上げるカット、低ダメージのカラー、なめらかな縮毛矯正。ご希望の施術で絞り込めます。',
    gal_all:'すべて', gal_cut:'カット', gal_color:'カラー', gal_straight:'縮毛矯正', gal_salon:'店内',
    gal_book:'予約する',

    story_eyebrow:'お店について',
    story_title:'髪が、人と人をつなぐなら',
    story_p1:'店名の由来はそこにあります——hair mates。ミツルはほとんどのカットを手で行い、一線ずつハサミを入れていきます。だから伸びてきても形が保たれます。',
    story_p2:'細い髪、多い髪、直毛、くせ毛、そして黒髪まで。あらゆる髪質と向き合ってきた経験が一回一回の施術の裏にあります。縮毛矯正とデジタルパーマは看板メニュー。カラーは髪を健やかに保ちながら色を出します。',
    story_p3:'完全予約制だから、席にはおひとりずつ。しっかりカウンセリングし、お持ちいただいた写真をもとに仕上げます。',

    rev_eyebrow:'お客様の声', rev_title:'Google 4.7・86件のレビュー',
    rev1:'今までで一番のスタイリストです。なりたい髪型の写真を見せたら、その通りに仕上げてくれました。しかも早くて、ひとり30分ほど。',
    rev1_by:'— Googleレビュー',
    rev2:'まさに逸材。とてもプロフェッショナルで、仕事への情熱が伝わってきます。手早いのに、仕上がりは一切妥協なし。次回が待ち遠しいです。',
    rev2_by:'— Googleレビュー',
    rev3:'余計な演出がない、だからこそカットの技術が際立ちます。初めての来店でしたが大満足。また伺います。',
    rev3_by:'— Googleレビュー',
    rev_note:'口コミはGoogleでのお客様の声です。仕上がりには個人差があります。',

    visit_eyebrow:'アクセス', visit_title:'サロンへの行き方',
    visit_addr1:'5964 W Parker Rd, Suite 116 / Room 114',
    visit_addr2:'Phenix Salon Suites 内',
    visit_dir:'Googleマップで経路を見る →',
    day_mon:'月', day_tue:'火', day_wed:'水', day_thu:'木', day_fri:'金', day_sat:'土', day_sun:'日',
    closed:'定休日',

    faq_eyebrow:'ご来店の前に', faq_title:'よくある質問',
    faq_q1:'営業時間は？',
    faq_a1:'月・木・金は10:00〜20:00、土・日は10:00〜19:00です。火・水は定休日。ご予約制です。',
    faq_q2:'場所と駐車場は？',
    faq_a2:'Phenix Salon Suites 内、5964 W Parker Rd, Suite 116 / Room 114, Plano, TX 75093 です。店の目の前のショッピングセンター駐車場が無料でご利用いただけます。',
    faq_q3:'予約は必要ですか？ウォークインでも大丈夫ですか？',
    faq_a3:'おひとりずつゆっくり対応するため予約制です。予約が埋まりやすいので、事前のご予約をおすすめします。空きがあればウォークインでもご案内できる場合があります。',
    faq_q4:'どんなメニューがありますか？',
    faq_a4:'レディース・メンズ・学生のカット、リタッチ・ワンカラー・ハイライトなどのカラー、デジタルパーマ・メンズパーマ、そして縮毛矯正です。',
    faq_q5:'縮毛矯正やパーマは得意ですか？',
    faq_a5:'はい。縮毛矯正とデジタルパーマは当店の看板メニューです。髪の状態を守りながら、なめらかに仕上げます。',
    faq_q6:'日本語で相談できますか？',
    faq_a6:'はい。日本語でも英語でも承ります。話しやすい言葉で、なりたいイメージをそのままお伝えください。',
    faq_q7:'料金はどのくらいですか？',
    faq_a7:'カットはメンズ50ドル・レディース60ドルほどから。カラーやパーマは長さやメニューにより変わり、縮毛矯正は260〜350ドルです。最終的な料金はカウンセリング時にご案内します。',
    faq_q8:'アジア系の髪やくせ毛の経験はありますか？',
    faq_a8:'はい。細い髪から多い髪、直毛からくせ毛まで、幅広い髪質を長年扱ってきました。黒髪のカラーも得意です。',
    faq_q9:'電話以外の予約方法はありますか？',
    faq_a9:'はい。このページのフォーム、またはメールでご希望をお送りいただければ、空き時間をお返事します。施術中で電話が繋がりにくいときにも便利です。',
    faq_q10:'初めての来店で準備しておくことは？',
    faq_a10:'なりたい髪型の写真を1〜2枚お持ちください。ミツルはその写真をもとに仕上げるので、はっきりした画像があると助かります。',

    ct_eyebrow:'ご予約・お問い合わせ', ct_title:'ご予約リクエスト',
    ct_lead:'ご希望のメニューと、都合のよい時間をいくつか添えてお送りください。確認のうえお返事します。お電話は 469-910-2456 まで。',
    ct_name:'お名前', ct_phone:'電話番号', ct_email:'メールアドレス', ct_service:'メニュー',
    ct_opt_cut:'カット', ct_opt_color:'カラー', ct_opt_perm:'パーマ', ct_opt_straight:'縮毛矯正', ct_opt_other:'その他・相談したい',
    ct_msg:'ご希望の日時・ご相談内容', ct_submit:'送信する'
  };

  // 初期(英語)テキストを退避
  var nodes = document.querySelectorAll('[data-i18n]');
  nodes.forEach(function (el) { el.setAttribute('data-en', el.innerHTML); });

  function setLang(lang) {
    document.documentElement.setAttribute('lang', lang);
    nodes.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (lang === 'ja' && JA[key] != null) el.innerHTML = JA[key];
      else el.innerHTML = el.getAttribute('data-en');
    });
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      b.classList.toggle('is-active', b.getAttribute('data-lang') === lang);
    });
  }

  document.querySelectorAll('.lang-btn').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); });
  });
})();
