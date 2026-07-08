/* Nana Williams — ダラス不動産 | UNA Consulting
   ・言語トグルは 日本語 / English の2言語
   ・FAQはデータ駆動でアコーディオンとSchema.orgを常に一致
*/
(function () {
  "use strict";

  /* ---------- FAQ data (drives accordion + FAQPage schema) ---------- */
  var FAQ = {
    ja: [
      ["対応エリアはどこですか？", "プレイノ・フリスコ・プロスパーを中心に、ダラス・ノースダラス全域に対応しています。特に日系のご家族に人気のエリアは、学区や治安、生活のしやすさまで含めて詳しくご案内できます。ご希望のエリアがまだ決まっていない場合も、ご家族のご事情をうかがいながら一緒に候補を整理していきますので、ご安心ください。"],
      ["日本語だけで相談できますか？", "はい。最初のご相談から物件のご案内、契約、お引き渡しまで、すべて日本語で対応いたします。英語での書類ややり取りに不安がある方も、内容をかみ砕いてご説明しますのでご安心ください。分からない点は、ご納得いただけるまで何度でもおうかがいします。"],
      ["どんなサービスがありますか？", "マイホームの購入・お買い替え、賃貸・お引越し、そして帰国に伴うご売却まで、住まいに関わることをトータルでサポートしています。単発のご相談から購入後のお住み替えまで、ライフステージに合わせて長くお付き合いいただけます。「まだ具体的に決まっていない」という段階のご相談も歓迎しています。"],
      ["はじめての住宅購入でも相談できますか？", "もちろんです。ご予算の考え方やローンの流れ、アメリカならではの購入プロセスまで、順を追って丁寧にご説明します。はじめての方が不安に感じやすいポイントは、あらかじめお伝えするよう心がけていますので、最初の一歩でも安心して進めていただけます。"],
      ["学校区や治安についても相談できますか？", "はい。間取りや価格だけでなく、学校区の評判やエリアごとの治安の傾向、日々の生活のしやすさまで含めてご提案します。お子さまの学齢や通学のご希望、ご家族が大切にされたい暮らし方をうかがいながら、実際に住む視点でご案内します。"],
      ["転勤・赴任での引越しにも対応できますか？", "はい。赴任直後の賃貸探しから、入居手続き、その後のマイホーム購入まで、状況に合わせてサポートします。到着直後は手続きが重なって慌ただしい時期ですので、日本語で頼れる窓口として、優先順位を整理しながら進めていきます。"],
      ["帰国が決まりました。家の売却もお願いできますか？", "はい。帰国に伴うご売却も、価格設定の考え方から内覧の準備、お引き渡しまで一貫して対応します。ご帰国後は日本との時差が生じますので、やり取りの方法やスケジュールを事前にすり合わせ、離れていても安心して進められるよう配慮します。"],
      ["プレイノ・フリスコ以外のエリアも見てもらえますか？", "はい。ダラス・ノースダラス全域に対応しています。エリアごとに学区の評判や街の雰囲気、通勤のしやすさは大きく異なりますので、それぞれの違いを具体的にお伝えしながら、ご家族に合った地域を一緒に絞り込んでいきます。"],
      ["相談するにはどうすればいいですか？", "お電話（+1 360-594-8015）、またはこのページのお問い合わせフォームから、お気軽にご連絡ください。「まだ購入を決めていない」「情報だけ知りたい」という段階でも構いません。内容を確認のうえ、できるだけ早くご返信いたします。"],
      ["物件を見る前に、準備しておくと良いことはありますか？", "ご予算の目安、希望されるエリアや広さ、入居やご購入の時期の見通しを教えていただけると、ご提案がぐっとスムーズになります。まだ固まっていない部分があっても問題ありません。ご相談の中で一つずつ整理していきますので、今のお考えをそのままお聞かせください。"]
    ],
    en: [
      ["Which areas do you cover?", "Centered on Plano, Frisco, and Prosper, I cover all of Dallas and North Dallas. For the areas Japanese families favor, I can go into detail on school zones, safety, and everyday livability. If you haven't settled on an area yet, we'll sort through the options together based on your family's situation."],
      ["Can I do everything in Japanese?", "Yes. From the first consultation to showings, contracts, and handover, everything is handled in Japanese. If English documents or conversations feel daunting, I'll break them down plainly. I'll answer any unclear points as many times as it takes for you to feel comfortable."],
      ["What services do you offer?", "Buying a home, trading up, renting and moving, and selling when you return to Japan \u2014 I support everything about your home. From a one-off question to a later move up, you're welcome to work with me across life stages. Consultations at the \u201Cnothing decided yet\u201D stage are welcome, too."],
      ["Can first-time buyers consult you too?", "Absolutely. I'll walk you through budgeting, how loans work, and the U.S. buying process step by step. I make a point of flagging the parts first-timers tend to worry about in advance, so even a first step feels reassuring."],
      ["Can you advise on school zones and safety?", "Yes. Beyond layout and price, I advise on school-district reputations, area safety trends, and day-to-day livability. I'll ask about your children's ages, commute preferences, and how your family wants to live, then guide you from a resident's point of view."],
      ["Can you help with a relocation or assignment move?", "Yes. From rental hunting right after arrival to move-in paperwork and, later, buying a home, I support you as your situation evolves. The first days are hectic with overlapping errands, so I act as a reliable Japanese-speaking point of contact and help set priorities."],
      ["Our return home is set \u2014 can you handle the sale?", "Yes. For a return-home sale, I handle everything from pricing strategy to preparing showings and closing. After you return there's a time difference with Japan, so we'll agree on how and when to communicate in advance, so it moves smoothly even from afar."],
      ["Can you show areas beyond Plano and Frisco?", "Yes. I cover all of Dallas and North Dallas. School reputations, neighborhood feel, and commute convenience vary a lot by area, so I'll explain the differences concretely and help you narrow down the right fit for your family."],
      ["How do I get in touch?", "Please reach out by phone (+1 360-594-8015) or through the form on this page. The \u201Chaven't decided to buy\u201D or \u201Cjust want information\u201D stage is perfectly fine. I'll review your message and reply as soon as I can."],
      ["What should I prepare before viewing homes?", "Sharing your rough budget, preferred area and size, and target timing for moving or buying makes recommendations much smoother. It's fine if some of that isn't settled yet \u2014 we'll sort it out one piece at a time, so just tell me where your thinking is now."]
    ]
  };

  /* ---------- UI translations (ja captured from DOM; en professional) ---------- */
  var T = { ja: {}, en: {} };
  T.en = {
    nav_services:"Services", nav_about:"About", nav_areas:"Areas", nav_reviews:"Reviews", nav_faq:"FAQ", nav_contact:"Contact",
    hero_kicker:"Nana Williams \u2014 Dallas Real Estate",
    hero_h1:"Find your ideal home in Dallas,<br><strong>with real peace of mind.</strong>",
    hero_desc:"Centered on Plano, Frisco, and Prosper \u2014 buying, trading up, renting, and return-home sales. A Japanese-speaking agent by your side across DFW.",
    hero_cta1:"Request a free consultation",
    hero_tag1:"Japanese, end to end", hero_tag2:"Purchase to return-home sale", hero_tag3:"All of DFW",
    svc_eyebrow:"Services", svc_title:"From purchase to return-home sale — supported end to end",
    svc_lead:"Relocation and moving, buying and trading up, and selling when you head back to Japan. Everything about living in Dallas, handled from start to finish in Japanese.",
    svc1_h:"Buying a home", svc1_p:"Even for first-time buyers, I walk with you in Japanese — from budgeting to house-hunting, offers, contracts, and closing. New to the U.S. process? I explain each step carefully.",
    svc2_h:"Trading up", svc2_p:"I coordinate selling your current home and buying the next in a realistic order and timeline — minimizing double costs and the risk of temporary housing for a smooth move.",
    svc3_h:"Renting & moving", svc3_p:"From rental searches for an assignment to choosing apartments or townhouses and completing move-in paperwork. In the hectic first days after arrival, a reliable partner in Japanese.",
    svc4_h:"Return-home sale", svc4_p:"When your return to Japan is set, I handle the sale end to end — from pricing to handover — accounting for the time difference and coordination after you've left.",
    svc5_h:"Choosing an area", svc5_p:"The latest on popular areas like Plano, Frisco, and Prosper, through the lens of schools, safety, and daily life. We sort out where to live first, before the listings.",
    svc6_h:"First-timer support", svc6_p:"New to the U.S., or uneasy handling things in English? I break the process down plainly and answer even the smallest questions in Japanese, as many times as you need.",
    about_eyebrow:"About", about_h2:"Hello — nice to meet you.",
    about_p1:"I'm Nana, a real estate agent working across Dallas and North Dallas. Real estate abroad brings real anxiety — differences in language and systems. And with a family relocation or move, schools, safety, and the living environment are often exactly what weigh on your mind.",
    about_p2:"I support the whole journey — relocation and moving, buying, trading up, selling, and the sale when you return to Japan. Having gone through relocation myself, I can advise from the real perspective of daily life. For loans and the various procedures, I also coordinate closely with a team I trust to support you thoroughly.",
    about_p3:"\u201CI don't know where to begin.\u201D \u201CIs it okay to even ask this?\u201D — questions like these are more than welcome. I'll support you carefully in Japanese, so please reach out with complete peace of mind.",
    about_sign:"ダラス不動産 / Dallas Real Estate",
    area_eyebrow:"Area guide", area_title:"Dallas highlights & recommended areas",
    area_lead:"The Dallas area is remarkably livable for families. A big city, yet relatively safe, with room to breathe. Sports, concerts, and seasonal events abound — and once you live here, people are warm and friendly, making even a first life abroad easy to settle into.",
    area_sub:"Featured areas",
    area_plano:"Beautifully balanced between a calm atmosphere and convenience, a longtime favorite among families, with relatively stable safety. Schools rate highly, and with many Japanese companies, Asian groceries, and Japanese restaurants, it's especially easy living for Japanese residents.",
    area_frisco:"A fast-growing city drawing national attention, especially popular with families. Newly built throughout, with clean, safe neighborhoods. Schools rate highly, and shopping, dining, sports, and entertainment are all close at hand.",
    area_prosper:"An area of rising interest, popular even with out-of-state movers. Its school district is rated among the best in Texas, with appealing master-planned communities like the lagoon-beach Windsong Ranch and resort-style Mustang Lakes.",
    band_eyebrow:"Property search", band_title:"Find your dream home", band_lead:"Browse the latest listings, matched to your preferred areas and criteria.", band_cta:"View listings",
    map_sub:"Areas served — Plano \u00B7 Frisco \u00B7 Prosper",
    map_lead:"Centered on Frisco, from Plano in the south to Prosper in the north \u2014 the areas Japanese families love, covered broadly.",
    map_link:"Open in Google Maps \u2192",
    rev_eyebrow:"Client voices", rev_title:"After a first home search",
    rev1_p:"Thank you so much for everything. You always stood in our shoes, with quick responses and thoughtful care — my husband and I are deeply grateful. Even a difficult out-of-state relocation went remarkably smoothly, thanks to you. We can start life in a new place with real peace of mind.",
    rev1_who:"Miwa (out-of-state relocation · purchase)",
    rev2_p:"Buying a home in America for the first time, and newly moved to Texas, I was anxious about everything. You answered even my smallest questions carefully in Japanese, and my worries eased a great deal. Sincere and diligent, always quick to reply — I could consult you with complete peace of mind.",
    rev2_who:"Client (first-time purchase)",
    faq_eyebrow:"FAQ", faq_title:"Questions I'm often asked",
    ct_eyebrow:"Contact", ct_h2:"Start with a simple conversation.",
    ct_p:"\u201CNot sure I'll buy yet,\u201D \u201Cjust want information\u201D — that stage is perfectly fine. Reach out anytime, in Japanese, and I'll reply promptly once I've reviewed your message.",
    ct_tel_lbl:"Phone", ct_mail_lbl:"Email", ct_area_lbl:"Areas served",
    ct_line_lbl:"LINE", ct_line:"Consultations via LINE are welcome, too.",
    ct_addr_lbl:"Office", ct_dir_lbl:"Directions", ct_dir:"Get directions on Google Maps \u2192", ct_lic_lbl:"License",
    f_name:"Name", f_email:"Email", f_phone:"Phone (optional)", f_topic:"How can I help?",
    f_topic_o1:"Buying a home", f_topic_o2:"Trading up", f_topic_o3:"Renting / moving", f_topic_o4:"Return-home sale", f_topic_o5:"Area / other",
    f_area:"Area of interest (optional)", f_msg:"Message", f_submit:"Send message"
  };

  var keyed = Array.prototype.slice.call(document.querySelectorAll('[data-key]'));
  keyed.forEach(function (el) { T.ja[el.getAttribute('data-key')] = el.innerHTML; });

  function apply(lang) {
    keyed.forEach(function (el) {
      var k = el.getAttribute('data-key');
      var v = (T[lang] && T[lang][k]) || T.en[k] || T.ja[k];
      if (v == null) return;
      if (v.indexOf('<') !== -1) { el.innerHTML = v; } else { el.textContent = v; }
    });
    document.documentElement.setAttribute('lang', lang);
    document.body.setAttribute('data-lang', lang);
    document.querySelectorAll('[data-lang-btn]').forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-lang-btn') === lang ? 'true' : 'false');
    });
    renderFAQ(lang);
  }

  function renderFAQ(lang) {
    var list = document.getElementById('faqList');
    var data = FAQ[lang] || FAQ.ja;
    if (!list) return;
    list.innerHTML = '';
    data.forEach(function (item, i) {
      var wrap = document.createElement('div'); wrap.className = 'faq-item';
      var btn = document.createElement('button');
      btn.type = 'button'; btn.className = 'faq-q';
      btn.setAttribute('aria-expanded', 'false'); btn.setAttribute('aria-controls', 'faqa' + i);
      btn.innerHTML = '<span>' + item[0] + '</span><span class="pm" aria-hidden="true"></span>';
      var ans = document.createElement('div'); ans.className = 'faq-a'; ans.id = 'faqa' + i;
      var p = document.createElement('p'); p.textContent = item[1]; ans.appendChild(p);
      btn.addEventListener('click', function () {
        var open = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', open ? 'false' : 'true');
        ans.style.maxHeight = open ? null : (ans.scrollHeight + 'px');
      });
      wrap.appendChild(btn); wrap.appendChild(ans); list.appendChild(wrap);
    });
    var sc = document.getElementById('faqSchema');
    if (sc) {
      sc.textContent = JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": FAQ.ja.map(function (it) {
          return { "@type": "Question", "name": it[0], "acceptedAnswer": { "@type": "Answer", "text": it[1] } };
        })
      });
    }
  }

  document.querySelectorAll('[data-lang-btn]').forEach(function (b) {
    b.addEventListener('click', function () { apply(b.getAttribute('data-lang-btn')); });
  });

  var burger = document.getElementById('hamburger');
  var nav = document.getElementById('nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('.nav-link').forEach(function (a) {
      a.addEventListener('click', function () { nav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); });
    });
  }

  /* form: loading state only (no preventDefault — Netlify handles POST) */
  var form = document.querySelector('form[name="contact"]');
  if (form) {
    form.addEventListener('submit', function () {
      var btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.classList.add('is-loading'); btn.disabled = true; }
    });
  }

  apply('ja');
})();
