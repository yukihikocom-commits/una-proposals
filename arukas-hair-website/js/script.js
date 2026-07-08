/* ARUKAS HAIR — interactions
   NOTE: The contact form submits natively to Netlify.
   Do NOT add onsubmit/e.preventDefault() — it cancels the Netlify submission. */

/* ---------- Year ---------- */
document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- Mobile menu ---------- */
(function () {
  var burger = document.querySelector('.hamburger');
  var menu = document.querySelector('.mobile-menu');
  if (!burger || !menu) return;
  burger.addEventListener('click', function () {
    var open = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!open));
    menu.hidden = open;
  });
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      burger.setAttribute('aria-expanded', 'false');
      menu.hidden = true;
    });
  });
})();

/* ---------- Gallery filter ---------- */
(function () {
  var filters = document.querySelectorAll('.gal-filter');
  var items = document.querySelectorAll('.gal-item');
  if (!filters.length || !items.length) return;

  filters.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var cat = btn.getAttribute('data-filter');

      filters.forEach(function (b) {
        var on = b === btn;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-pressed', String(on));
      });

      items.forEach(function (item) {
        var show = cat === 'all' || item.getAttribute('data-cat') === cat;
        item.hidden = !show;
        if (show) {
          // 再表示のたびにフェードインを流し直す
          item.style.animation = 'none';
          void item.offsetWidth;
          item.style.animation = '';
        }
      });
    });
  });
})();

/* ---------- Language switcher ----------
   English lives in the HTML and is captured on load.
   Japanese below requires NATIVE REVIEW before publishing. */
(function () {
  var translations = {
    ja: {
      nav_services:"サービス", nav_gallery:"施術例", nav_story:"当店について", nav_reviews:"口コミ", nav_visit:"アクセス", nav_faq:"よくある質問", nav_book:"ご予約",
      hero_kicker:"テキサス州プレイノ · 日本人ヘアサロン",
      hero_h1:"アジアの髪を、<strong>日本人の手</strong>で。",
      hero_desc:"縮毛矯正、バレイヤージュ、丁寧なカット。アジアの髪を知り尽くした日本人スタイリストだけのサロンです。",
      hero_cta1:"ご予約はこちら", hero_cta2:"サービスを見る",
      hero_aidef:"ARUKAS HAIRは、テキサス州プレイノの日本人ヘアサロン。縮毛矯正・カラー・カットが得意で、オンライン予約が可能です。",
      serv_eyebrow:"できること", serv_title:"あなたの髪に合わせたメニュー",
      serv_lead:"髪はひとりひとり違います。まずはご希望をお伺いし、髪質・普段のお手入れ・なりたいイメージに合う施術をご提案します。",
      serv1_h:"カット・スタイリング", serv1_p:"お顔立ち、髪の動き、ご自宅でのスタイリングまで考えたカット。クリーンで正確なラインが得意で、前髪やショートも丁寧に仕上げます。数日経っても決まる形をお約束します。",
      serv2_h:"カラー・バレイヤージュ", serv2_p:"ハイライト・バレイヤージュ・オンブレ・フルカラーはもちろん、鮮やかな個性派カラーも。ブリーチにはOlaplexを使い、髪の健康を守ります。写真をお持ちいただければ一緒に色味を作ります。",
      serv3_h:"縮毛矯正", serv3_p:"当店の看板メニュー。髪の状態に合わせて薬剤の強さを調整し、扱いやすくまとまる髪へ。ぺたんこにならず、自然で柔らかな仕上がりが長持ちします。",
      gal_eyebrow:"施術例", gal_title:"これまで手がけた髪",
      gal_lead:"すべて当店で実際に手がけた髪です。気になるメニューで絞り込んで、ご自分の髪に近い仕上がりをご覧ください。",
      gal_f_all:"すべて", gal_f_color:"カラー・バレイヤージュ", gal_f_perm:"縮毛矯正", gal_f_cut:"カット・スタイリング",
      gal_c_color:"バレイヤージュ", gal_c_perm:"縮毛矯正", gal_c_cut:"こだわりのカット",
      gal_c_high:"ハイライト", gal_c_vivid:"鮮やかカラー", gal_c_bangs:"前髪・ショート",
      gal_c_smooth:"トリートメント", gal_c_style:"日常のスタイリング",
      gal_cta_note:"気になる仕上がりがあれば、その写真をお持ちください。ご希望を伝える一番の近道です。",
      gal_cta_btn:"ご予約はこちら",
      story_eyebrow:"当店について", story_title:"プレイノに息づく、日本のサロン",
      story_p1:"ARUKASは2017年、カリフォルニア発のArukas Hairファミリーの一員としてプレイノに開店しました。スタッフは全員が日本人で、英語も話せ、日本のサロンならではの丁寧さと技術を大切にしています。",
      story_p2:"小さくてアットホームなお店です。温かいタオルや優しいヘッドマッサージも、当店ではあたりまえのおもてなし。可愛らしくも、上品にも、時間をかけてご希望を形にします。",
      rev_eyebrow:"お客様の声", rev_title:"Googleで4.4★、プレイノに愛されて",
      rev1:"希望をきちんと聞いて、ぴったりに仕上げてくれました。今の髪が大好きです。",
      rev2:"1年以上通っています。他の人には任せられません。とても親しみやすいお店です。",
      rev3:"アジアの髪を本当に扱えるサロンを探しているなら、ここです。",
      rev4:"今までで一番のカットとカラー。細部へのこだわりがすごい。",
      rev1_cite:"— Googleの口コミより", rev2_cite:"— Kristinaさん",
      rev3_cite:"— Googleの口コミより", rev4_cite:"— Googleの口コミより",
      visit_eyebrow:"ご来店", visit_title:"プレイノでお待ちしています",
      visit_hours_h:"営業時間", closed:"定休日",
      day_mon:"月曜", day_tue:"火曜", day_wed:"水曜", day_thu:"木曜", day_fri:"金曜", day_sat:"土曜", day_sun:"日曜",
      visit_find_h:"アクセス", map_dir:"Googleマップで道順を見る →",
      faq_eyebrow:"事前に知っておくと便利", faq_title:"よくいただくご質問",
      faq_q1:"営業時間は？", faq_a1:"火曜〜土曜は10:00〜19:00、日曜は9:00〜18:00です。月曜は定休日です。",
      faq_q2:"場所と駐車場は？", faq_a2:"住所は100 Legacy Dr, Suite 101, Plano, TX 75023。Mitsuwa Marketplace近くのLegacy Centralプラザ内で、駐車場もございます。",
      faq_q3:"予約は必要？ウォークインは？", faq_a3:"お一人おひとりに集中できるよう予約制です。オンラインでいつでもご予約いただけます。当日ご希望の場合はお電話ください、できる限り対応します。",
      faq_q4:"どんなサービスがありますか？", faq_a4:"カット・スタイリング、カラー、ハイライト、バレイヤージュ、オンブレ、Olaplexを使ったブリーチ、縮毛矯正など。あらゆる髪質に対応し、可愛くもクールにも仕上げます。",
      faq_q5:"得意なメニューは？", faq_a5:"縮毛矯正とカラーが看板メニューです。ブリーチやトリートメントも、髪の健康を守る優しい施術を心がけています。",
      faq_q6:"日本語で相談できますか？", faq_a6:"はい。スタッフは全員日本人で、日本語・英語どちらも対応します。ご希望を自然な言葉で安心してお伝えください。",
      faq_q7:"料金はどのくらい？", faq_a7:"メニュー・髪の長さ・仕上がりのご希望によって変わります。施術前に必ずご説明し、明確なお見積りをお出しするので安心です。",
      faq_q8:"アジアンヘアの経験はありますか？", faq_a8:"もちろんです。全スタッフが日本のサロン技術を学び、毎日アジアンヘアを扱っています。髪質や毛量、カラーやパーマへの反応まで理解しています。",
      faq_q9:"初回は何を持っていけば？", faq_a9:"参考写真をお持ちいただくのが一番です。好きなスタイルや色の写真があると、ご希望をすぐに把握できます。あとはそのままお越しください。",
      faq_q10:"ARUKASならではの良さは？", faq_a10:"2017年からプレイノで、日本人スタッフだけで営んできました。小さくてアットホームなお店で、正確な日本の技術と、温かいタオルやヘッドマッサージのおもてなしをお楽しみいただけます。",
      cta_eyebrow:"ご予約", cta_title:"ご希望をお聞かせください",
      cta_lead:"メッセージをお送りいただければ、ご予約の調整のためご連絡します。お電話は (972) 517-1350 まで。",
      f_name:"お名前", f_email:"メール", f_phone:"電話番号（任意）", f_service:"ご希望のメニュー", f_message:"メッセージ", f_submit:"送信する",
      foot_tag:"日本人ヘアサロン · テキサス州プレイノ · 2017年〜"
    }
  };

  // Capture the English source from the DOM on load.
  var en = {};
  document.querySelectorAll('[data-key]').forEach(function (el) {
    en[el.getAttribute('data-key')] = el.innerHTML;
  });
  translations.en = en;

  var langAttr = { en:'en', ja:'ja' };

  function setLang(lang) {
    var dict = translations[lang] || translations.en;
    document.querySelectorAll('[data-key]').forEach(function (el) {
      var key = el.getAttribute('data-key');
      if (dict[key] != null) el.innerHTML = dict[key];
    });
    document.documentElement.setAttribute('lang', langAttr[lang] || 'en');
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      b.classList.toggle('is-active', b.getAttribute('data-lang') === lang);
    });
  }

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLang(btn.getAttribute('data-lang'));
    });
  });
})();
