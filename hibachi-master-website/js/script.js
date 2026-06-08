/* ============================================================
   HIBACHI MASTER — script.js
   ============================================================ */

const T = {
  en: {
    /* NAV */
    'nav-menu':'Menu', 'nav-story':'Our Story', 'nav-hours':'Hours',
    'nav-order':'Order Now', 'nav-contact':'Contact',
    /* HERO */
    'hero-eyebrow':'Prosper, TX · Food Truck',
    'hero-h1-1':'Real Flame.', 'hero-h1-2':'Real Flavor.',
    'hero-desc':'Fresh hibachi grilled to order — chicken, steak, shrimp, and filet mignon. Right here in Prosper.',
    'hero-ai-def':'Hibachi Master is a Japanese hibachi food truck in Prosper, TX, serving fresh grilled chicken, steak, shrimp, and fried rice made to order daily. Walk-ins welcome.',
    'stat1-label':'Google Reviews', 'stat2-label':'Reviews', 'stat3-label':'TripAdvisor Rank',
    'cta-order':'Order Now', 'cta-menu':'See Menu',
    'badge-text':'Walk-ins\nWelcome',
    'sns-facebook':'📘 Follow on Facebook', 'sns-catering':'🥢 Catering Inquiry',
    /* MENU section */
    'menu-eyebrow':'What We Serve', 'menu-title':'Built for the Grill',
    'mc1-title':'Hibachi Chicken',
    'mc1-desc':'Tender chicken breast seared on the flat top with garlic butter, served with fried rice and fresh vegetables. The fan favorite that keeps regulars coming back.',
    'mc1-price':'From $12',
    'mc2-title':'Hibachi Steak',
    'mc2-desc':'Juicy teriyaki steak cooked to your preference on the open grill. Served alongside garlic fried rice, grilled zucchini and onion. A full meal at food-truck prices.',
    'mc2-price':'From $15',
    'mc3-title':'Hibachi Shrimp',
    'mc3-desc':'Large shrimp flamed and seasoned on the grill, served with savory fried rice and vegetables. Light, fresh, and packed with flavor — perfect for a quick lunch.',
    'mc3-price':'From $13',
    'mc4-title':'Filet Mignon',
    'mc4-desc':'The premium choice — tender filet mignon grilled to perfection alongside buttery fried rice. Restaurant-quality without the restaurant price. A Hibachi Master specialty.',
    'mc4-price':'From $18',
    'mc5-title':'Combo Plates',
    'mc5-desc':'Can\'t choose just one? Mix two proteins — chicken & shrimp, steak & chicken, or steak & shrimp. All combos come with garlic fried rice and grilled vegetables. Best value on the menu.',
    'mc5-price':'From $16',
    'mc6-title':'Hibachi Vegetables',
    'mc6-desc':'Zucchini, onion, mushrooms, and mixed vegetables grilled with garlic butter, served over fried rice. A satisfying vegetarian plate — just as flavorful as the rest of the menu.',
    'mc6-price':'From $10',
    /* STORY */
    'story-eyebrow':'Our Story', 'story-title':'Made to Order. Every Time.',
    'story-p1':'Hibachi Master started with one idea: Prosper deserved Benihana-quality hibachi without the Benihana prices. Parked at 640 N Preston Rd next to the Texaco, this family-owned food truck has been serving the community fresh, made-to-order hibachi since it first opened.',
    'story-p2':'Everything is prepared on the flat-top grill in front of you. No pre-cooked batches, no reheated rice. When you order, we cook. That\'s the promise — and it\'s why customers drive in from Frisco, McKinney, and beyond just for lunch.',
    'story-p3':'The owners are on-site at every single service. You\'ll see them at the window, at the grill, making sure every plate is right. That\'s what makes Hibachi Master a neighborhood favorite rather than just another food truck.',
    /* FEATURES */
    'feat-eyebrow':'Why Hibachi Master', 'feat-title':'Quality You Can Taste',
    'fc1-title':'Made Fresh to Order',
    'fc1-desc':'Nothing sits under a lamp here. Every plate — from the fried rice to the protein — goes on the flat top the moment you order. The result is food that\'s hot, fragrant, and genuinely fresh every single time. Regulars say it\'s the difference they can taste the second they open the box.',
    'fc2-title':'Generous Portions',
    'fc2-desc':'Hibachi Master is known for portions that actually fill you up. High-quality cuts — including real filet mignon — served in amounts you\'d expect from a sit-down restaurant. Reviewers consistently note the value: Benihana quality at half the price.',
    'fc3-title':'Family Owned, Owner Present',
    'fc3-desc':'The owners are at the truck every day of service — not managing from a distance. That means every order gets personal attention, and the standard never slips. It\'s the kind of accountability that chain restaurants can\'t replicate, and it\'s exactly why Hibachi Master has built such a loyal following in Prosper.',
    /* REVIEWS */
    'rev-eyebrow':'What Guests Say', 'rev-title':'Real Reviews',
    'rv1-text':'"Food is amazing. Customer service never disappoints. For being a food truck this place is 10/10. The fried rice is so flavorful and the steak is cooked perfectly every time."',
    'rv1-author':'Google Review', 'rv1-source':'via Google · 5 stars',
    'rv2-text':'"Great customer service. Super fast. Great food! Large portions! The yum yum sauce is amazing — a little spicy and just right. I drive 20 minutes just to come here."',
    'rv2-author':'Yelp Review', 'rv2-source':'via Yelp · 5 stars',
    'rv3-text':'"Think Benihana quality but at a much lower price and with a casual atmosphere. The filet mignon is real filet mignon — not some mystery cut. I bring my whole family here regularly."',
    'rv3-author':'TripAdvisor Review', 'rv3-source':'via TripAdvisor · #8 of 99 in Prosper',
    /* HOURS */
    'hours-eyebrow':'Find Us', 'hours-title':'Hours & Location',
    'hours-heading-sub':'Operating Hours',
    'day-mon':'Monday','day-tue':'Tuesday','day-wed':'Wednesday',
    'day-thu':'Thursday','day-fri':'Friday','day-sat':'Saturday',
    'day-sun':'Sunday','day-closed':'Closed',
    'addr-text':'640 N Preston Rd (beside the Texaco), Prosper, TX 75078',
    'map-link':'Get Directions on Google Maps →',
    /* FAQ */
    'faq-eyebrow':'Questions?', 'faq-title':'FAQ',
    'fq1-q':'What are your hours?',
    'fq1-a':'We\'re open Monday through Saturday, 11:00 AM to 8:00 PM. We\'re closed on Sundays. Check our Facebook page for any day-to-day schedule changes — we post updates there when we need to close unexpectedly.',
    'fq2-q':'Where exactly are you located?',
    'fq2-a':'We\'re parked at 640 N Preston Rd, Prosper, TX 75078 — right next to the Texaco gas station. There\'s plenty of parking in the lot, and we have outdoor picnic tables so you can eat on-site during nice weather.',
    'fq3-q':'Do I need to order in advance?',
    'fq3-a':'No reservation or advance order is needed for regular visits — just walk up to the window. For large group orders or catering requests (10+ people), calling ahead is recommended so we can make sure everything is ready for you.',
    'fq4-q':'Is takeout available?',
    'fq4-a':'Yes! Takeout is our main format — your order is packed ready to go. You\'re also welcome to eat at the picnic tables right next to the truck. We don\'t currently offer third-party delivery, so the best way is to come to us directly.',
    'fq5-q':'What\'s on the menu?',
    'fq5-a':'Our menu centers on hibachi-style grilled proteins: chicken, steak, shrimp, and filet mignon — all served with garlic fried rice and grilled vegetables. Combo plates let you mix two proteins. We also have a vegetable option for non-meat eaters. Everything is made fresh to order on the flat-top grill.',
    'fq6-q':'Do you have vegetarian options?',
    'fq6-a':'Yes — we offer a hibachi vegetable plate with fried rice that\'s fully vegetarian. Just let us know at the window and we\'ll make sure there\'s no cross-contamination with meat. It\'s a genuinely satisfying option that doesn\'t feel like an afterthought.',
    'fq7-q':'Do you cater events or large groups?',
    'fq7-a':'Yes, we welcome catering inquiries for corporate lunches, birthday parties, community events, and more. Please call us at (817) 899-0009 or reach out through Facebook Messenger to discuss your event needs, date, and headcount. We\'ll do our best to accommodate.',
    'fq8-q':'What\'s the price range?',
    'fq8-a':'Most plates range from $10 to $20 depending on your protein choice. We\'re known for offering Benihana-quality hibachi at food truck prices — generous portions, high-quality cuts, and nothing that feels like it was cut short to save money.',
    'fq9-q':'Do you accept credit cards?',
    'fq9-a':'Yes — we accept all major credit and debit cards as well as cash. No need to bring exact change or worry about hitting an ATM on the way.',
    'fq10-q':'Is Hibachi Master family-owned?',
    'fq10-a':'Yes — Hibachi Master is 100% family-owned and operated. The owners are personally on-site at every service, working the grill and the window. That direct involvement is what keeps the quality consistent and the service personal. When you visit, you\'re supporting a local family business, not a franchise.',
    /* CONTACT form */
    'contact-eyebrow':'Get in Touch', 'contact-title':'Questions & Catering',
    'form-name':'Name','form-name-ph':'Your name',
    'form-email':'Email','form-email-ph':'you@email.com',
    'form-phone':'Phone (optional)',
    'form-subject':'Subject',
    'form-opt-select':'Select...','form-opt-catering':'Catering Inquiry',
    'form-opt-menu':'Menu Question','form-opt-other':'Other',
    'form-message':'Message','form-message-ph':'Tell us about your event or question...',
    'form-submit':'Send Message',
  },

  ja: {
    'nav-menu':'メニュー','nav-story':'ストーリー','nav-hours':'営業時間',
    'nav-order':'注文する','nav-contact':'お問い合わせ',
    'hero-eyebrow':'テキサス州プロスパー · フードトラック',
    'hero-h1-1':'本物の炎。','hero-h1-2':'本物の味。',
    'hero-desc':'注文を受けてから鉄板で焼くヒバチ料理。チキン・ステーキ・シュリンプ・フィレミニョン。プロスパーで。',
    'hero-ai-def':'Hibachi Masterはテキサス州プロスパーのヒバチフードトラックです。毎日新鮮な鉄板焼き料理を提供しています。',
    'stat1-label':'Googleレビュー','stat2-label':'レビュー件数','stat3-label':'TripAdvisorランキング',
    'cta-order':'今すぐ注文','cta-menu':'メニューを見る',
    'badge-text':'ウォークイン\n歓迎',
    'sns-facebook':'📘 Facebookをフォロー','sns-catering':'🥢 ケータリング問い合わせ',
    'menu-eyebrow':'メニュー','menu-title':'ヒバチの定番',
    'mc1-title':'ヒバチチキン',
    'mc1-desc':'ガーリックバターで鉄板に焼いた柔らかいチキンブレスト。フライドライスと野菜を添えて。リピーターが絶えない人気メニューです。',
    'mc1-price':'$12〜',
    'mc2-title':'ヒバチステーキ',
    'mc2-desc':'照り焼きソースで仕上げたジューシーなステーキ。ガーリックフライドライス、ズッキーニ、オニオンを添えたボリューム満点の一皿です。',
    'mc2-price':'$15〜',
    'mc3-title':'ヒバチシュリンプ',
    'mc3-desc':'大きなエビを鉄板で豪快に焼き上げ、フライドライスと野菜とともに。あっさりしていながらしっかりした味わい。ランチにぴったりです。',
    'mc3-price':'$13〜',
    'mc4-title':'フィレミニョン',
    'mc4-desc':'最高級の選択肢。フィレミニョンを鉄板で完璧に焼き上げ、バター風味のフライドライスとともに。レストランクオリティをフードトラック価格で。',
    'mc4-price':'$18〜',
    'mc5-title':'コンボプレート',
    'mc5-desc':'一つだけでは決められない方に。チキン＆シュリンプ、ステーキ＆チキン、ステーキ＆シュリンプの組み合わせから選べます。ガーリックフライドライスと野菜付き。',
    'mc5-price':'$16〜',
    'mc6-title':'ヒバチ野菜',
    'mc6-desc':'ズッキーニ・オニオン・マッシュルームなどをガーリックバターで香ばしく炒め、フライドライスとともに。ベジタリアンの方にも満足いただける一皿です。',
    'mc6-price':'$10〜',
    'story-eyebrow':'ストーリー','story-title':'注文を受けてから、毎回丁寧に。',
    'story-p1':'Hibachi Masterは一つのアイデアから始まりました。プロスパーにも、Benihanaクオリティのヒバチ料理をもっと手軽な価格で。Texacoの隣、640 N Preston Rdに構えるこのフードトラックは、開業以来ずっと地域の皆様に出来立てのヒバチを届けてきました。',
    'story-p2':'全ての料理は、注文を受けてから目の前の鉄板で焼き上げます。事前調理なし、温め直しなし。ご注文いただいた瞬間に調理が始まります。だからFrisco、McKinneyから車を走らせてくる常連さんが後を絶たないのです。',
    'story-p3':'オーナーは毎回のサービスに必ず立ち会っています。窓口でも、鉄板の前でも、一皿一皿を確認しながら。それが、Hibachi Masterが「ただのフードトラック」ではなく、地域に愛される存在である理由です。',
    'feat-eyebrow':'選ばれる理由','feat-title':'素材とこだわり',
    'fc1-title':'注文後に焼き上げる',
    'fc1-desc':'ランプの下で保温するものは何もありません。フライドライスもタンパク質も、ご注文をいただいた瞬間に鉄板にのせます。だから毎回、熱くて香ばしく、本当に新鮮な状態でお届けできます。常連さんが「箱を開けた瞬間に分かる」とおっしゃる理由です。',
    'fc2-title':'満足できるボリューム',
    'fc2-desc':'Hibachi Masterはボリュームの多さでも知られています。本物のフィレミニョンを含む高品質な食材を、レストランで出てくるような量でご提供。「Benihanaの半額でBenihanaクオリティ」というレビューが繰り返し寄せられています。',
    'fc3-title':'家族経営・オーナー常駐',
    'fc3-desc':'オーナーはサービスのたびにトラックに立ち会っています。遠隔管理ではありません。だからすべての注文に目が届き、品質が落ちることがない。チェーン店には真似できないこの誠実さが、プロスパーで熱狂的なファンを生んでいる理由です。',
    'rev-eyebrow':'お客様の声','rev-title':'実際のレビュー',
    'rv1-text':'「料理は最高。サービスも毎回期待を裏切らない。フードトラックとは思えない完成度10/10。フライドライスの風味が格別で、ステーキはいつも完璧に焼き上がっています。」',
    'rv1-author':'Googleレビュー','rv1-source':'Google · ★5',
    'rv2-text':'「接客が素晴らしく、出てくるのも早い。ボリューム満点！ヤムヤムソースが絶品でした。少しスパイシーでちょうどいい。20分かけて来る価値があります。」',
    'rv2-author':'Yelpレビュー','rv2-source':'Yelp · ★5',
    'rv3-text':'「Benihanaクオリティを、ずっとリーズナブルな価格で。フィレミニョンは本物のフィレミニョン。家族全員を連れてきています。」',
    'rv3-author':'TripAdvisorレビュー','rv3-source':'TripAdvisor · プロスパー99店中第8位',
    'hours-eyebrow':'アクセス','hours-title':'営業時間・場所',
    'hours-heading-sub':'営業時間',
    'day-mon':'月曜','day-tue':'火曜','day-wed':'水曜',
    'day-thu':'木曜','day-fri':'金曜','day-sat':'土曜',
    'day-sun':'日曜','day-closed':'定休日',
    'addr-text':'640 N Preston Rd（Texaco隣）, Prosper, TX 75078',
    'map-link':'Google マップで道順を見る →',
    'faq-eyebrow':'よくある質問','faq-title':'FAQ',
    'fq1-q':'営業時間は何時ですか？',
    'fq1-a':'月曜〜土曜の午前11時〜午後8時に営業しています。日曜は定休日です。臨時休業などの情報はFacebookページでお知らせしています。',
    'fq2-q':'場所はどこですか？',
    'fq2-a':'640 N Preston Rd, Prosper, TX 75078、Texacoガソリンスタンドの隣です。駐車場も広く、屋外ピクニックテーブルもあります。',
    'fq3-q':'事前注文は必要ですか？',
    'fq3-a':'通常ご来店の場合は予約不要です。窓口まで直接お越しください。10名以上の大人数注文やケータリングの場合は、事前にお電話いただけるとスムーズです。',
    'fq4-q':'テイクアウトはできますか？',
    'fq4-a':'はい。テイクアウトがメインのスタイルです。トラック横のピクニックテーブルで食べていただくことも可能です。現在、デリバリーサービスへの対応はしておりません。',
    'fq5-q':'メニューには何がありますか？',
    'fq5-a':'チキン・ステーキ・シュリンプ・フィレミニョンのヒバチグリル料理が中心です。全てガーリックフライドライスと野菜付き。コンボプレートで2種類のタンパク質を組み合わせることもできます。ベジタリアン向けの野菜プレートもあります。',
    'fq6-q':'ベジタリアン対応はありますか？',
    'fq6-a':'はい。ヒバチ野菜プレート＋フライドライスのベジタリアンメニューがあります。お肉との混在が気になる方は窓口でお申し付けください。',
    'fq7-q':'ケータリング・大人数対応はできますか？',
    'fq7-a':'はい。法人ランチ、誕生日パーティー、地域イベントなど承っております。(817) 899-0009へのお電話またはFacebookメッセンジャーでご相談ください。',
    'fq8-q':'価格帯はどのくらいですか？',
    'fq8-a':'タンパク質の種類によって異なりますが、ほとんどのプレートは$10〜$20程度です。フードトラックの価格でBenihanaクオリティと言われるコスパの高さが自慢です。',
    'fq9-q':'クレジットカードは使えますか？',
    'fq9-a':'はい。主要クレジットカード・デビットカード・現金すべてご利用いただけます。',
    'fq10-q':'家族経営のお店ですか？',
    'fq10-a':'はい。Hibachi Masterは完全に家族経営のフードトラックです。オーナーは毎回のサービスに立ち会い、鉄板の前と窓口で直接対応しています。',
    'contact-eyebrow':'お問い合わせ','contact-title':'ケータリング・お問い合わせ',
    'form-name':'お名前','form-name-ph':'お名前をご入力ください',
    'form-email':'メールアドレス','form-email-ph':'メールアドレス',
    'form-phone':'電話番号（任意）',
    'form-subject':'件名',
    'form-opt-select':'選択してください','form-opt-catering':'ケータリング問い合わせ',
    'form-opt-menu':'メニューについて','form-opt-other':'その他',
    'form-message':'メッセージ','form-message-ph':'イベントの詳細やご質問をご記入ください',
    'form-submit':'送信する',
  },

  zh: {
    /* 多语言文本：原生审核未完成 — 发布前需替换 */
    'nav-menu':'菜单','nav-story':'我们的故事','nav-hours':'营业时间',
    'nav-order':'立即订餐','nav-contact':'联系我们',
    'hero-eyebrow':'德州普罗斯珀 · 美食车',
    'hero-h1-1':'真正的火焰。','hero-h1-2':'真正的味道。',
    'hero-desc':'现点现做的铁板烧——鸡肉、牛排、虾和菲力牛排。就在普罗斯珀。',
    'hero-ai-def':'Hibachi Master是德州普罗斯珀的日式铁板烧美食车，每天提供新鲜烧烤料理。',
    'stat1-label':'Google 评价','stat2-label':'评价数量','stat3-label':'TripAdvisor 排名',
    'cta-order':'立即订餐','cta-menu':'查看菜单',
    'badge-text':'欢迎\n直接光临',
    'sns-facebook':'📘 关注Facebook','sns-catering':'🥢 外烩咨询',
    'menu-eyebrow':'菜单','menu-title':'铁板烧经典',
    'mc1-title':'铁板烧鸡肉',
    'mc1-desc':'用蒜香黄油在铁板上煎制的嫩鸡胸肉，配炒饭和新鲜蔬菜。人气最旺的菜品，回头客络绎不绝。',
    'mc1-price':'$12起',
    'mc2-title':'铁板烧牛排',
    'mc2-desc':'在明火铁板上烹制的多汁照烧牛排，搭配蒜香炒饭、烤西葫芦和洋葱。一份顶餐厅水准的美食车佳肴。',
    'mc2-price':'$15起',
    'mc3-title':'铁板烧虾',
    'mc3-desc':'大虾在铁板上豪爽炙烤，配鲜美炒饭和蔬菜。清爽鲜美，风味十足，是快餐午餐的完美之选。',
    'mc3-price':'$13起',
    'mc4-title':'菲力牛排',
    'mc4-desc':'顶级之选——嫩滑菲力牛排在铁板上完美烹制，配奶油炒饭。餐厅级品质，美食车价格，是本店的招牌菜。',
    'mc4-price':'$18起',
    'mc5-title':'组合套餐',
    'mc5-desc':'难以抉择？可以选择两种蛋白质的组合——鸡肉＆虾、牛排＆鸡肉，或牛排＆虾。全部套餐均配蒜香炒饭和烤蔬菜，性价比最高。',
    'mc5-price':'$16起',
    'mc6-title':'铁板烧蔬菜',
    'mc6-desc':'西葫芦、洋葱、蘑菇等多种蔬菜用蒜香黄油炒香，搭配炒饭。素食者也能完全满足的一道菜，风味不逊于荤菜。',
    'mc6-price':'$10起',
    'story-eyebrow':'我们的故事','story-title':'现点现做，每次如此。',
    'story-p1':'Hibachi Master源于一个简单的想法：普罗斯珀也应该有Benihana品质的铁板烧，而且价格更实惠。停靠在640 N Preston Rd的Texaco加油站旁，这辆家族经营的美食车自开业以来一直为社区提供新鲜现做的铁板烧。',
    'story-p2':'所有料理都在您面前的铁板上即时烹制。没有预先做好的批量食物，没有重新加热的米饭。您点餐，我们就开始烹制。正因如此，来自Frisco、McKinney等地的顾客专程驱车前来只为吃顿午饭。',
    'story-p3':'老板亲自参与每一次服务——不是远程管理。这意味着每个订单都有专人照料，品质从不打折。这种负责任的态度是连锁餐厅无法复制的，也是Hibachi Master在普罗斯珀拥有众多忠实粉丝的原因。',
    'feat-eyebrow':'为何选择我们','feat-title':'品质可尝',
    'fc1-title':'现点现做',
    'fc1-desc':'这里没有保温灯下候着的食物。无论是炒饭还是蛋白质，一旦您下单就立刻上铁板。每次都能吃到热气腾腾、香味扑鼻的新鲜料理。常客们说，打开盒子的瞬间就能感受到那份不同。',
    'fc2-title':'丰盛的分量',
    'fc2-desc':'Hibachi Master以分量足著称。包括真正的菲力牛排在内的高品质食材，以您在正式餐厅期望的分量呈现。评论者们不断提到的价值感："Benihana的品质，一半的价格。"',
    'fc3-title':'家族经营，老板亲力亲为',
    'fc3-desc':'老板每次服务都亲自在场——不是远程管理。这意味着每个订单都能得到个人关注，品质从不下滑。这种连锁餐厅无法复制的责任感，正是Hibachi Master在普罗斯珀积累了大量忠实粉丝的原因。',
    'rev-eyebrow':'顾客评价','rev-title':'真实评价',
    'rv1-text':'"食物太棒了。服务从不令人失望。作为一辆美食车，这里绝对是10/10。炒饭风味绝佳，牛排每次都完美烹制。"',
    'rv1-author':'Google评价','rv1-source':'via Google · ★5',
    'rv2-text':'"服务非常好，出餐超快，食物很棒！分量充足！芋芋酱很赞——微辣恰到好处。我专程开车20分钟来这里。"',
    'rv2-author':'Yelp评价','rv2-source':'via Yelp · ★5',
    'rv3-text':'"Benihana的品质，价格实惠得多，气氛轻松。菲力牛排是真正的菲力牛排——不是什么不知名的肉。我经常带全家人来。"',
    'rv3-author':'TripAdvisor评价','rv3-source':'via TripAdvisor · 普罗斯珀99家餐厅第8名',
    'hours-eyebrow':'找到我们','hours-title':'营业时间与地址',
    'hours-heading-sub':'营业时间',
    'day-mon':'周一','day-tue':'周二','day-wed':'周三',
    'day-thu':'周四','day-fri':'周五','day-sat':'周六',
    'day-sun':'周日','day-closed':'休息',
    'addr-text':'640 N Preston Rd（Texaco加油站旁），普罗斯珀，德州 75078',
    'map-link':'在Google地图上获取路线 →',
    'faq-eyebrow':'常见问题','faq-title':'问答',
    'fq1-q':'营业时间是什么？',
    'fq1-a':'我们周一至周六上午11点至晚上8点营业，周日休息。如有临时调整，请关注我们的Facebook主页获取最新通知。',
    'fq2-q':'你们在哪里？',
    'fq2-a':'我们停靠在640 N Preston Rd，普罗斯珀，德州75078——就在Texaco加油站旁边。停车位充裕，天气好的时候还有室外野餐桌可以就餐。',
    'fq3-q':'需要提前预约吗？',
    'fq3-a':'日常用餐无需预约，直接来窗口点餐即可。如果是10人以上的大型团体订餐或外烩，建议提前致电，以便我们做好充分准备。',
    'fq4-q':'可以打包带走吗？',
    'fq4-a':'当然！打包外带是我们的主要用餐方式。您也可以在美食车旁的野餐桌上就餐。目前暂不提供第三方外卖配送服务，欢迎直接光临。',
    'fq5-q':'菜单上有什么？',
    'fq5-a':'菜单以铁板烧蛋白质为主：鸡肉、牛排、虾和菲力牛排——全部配蒜香炒饭和烤蔬菜。组合套餐可以搭配两种蛋白质。也有素食蔬菜套餐可供选择。所有料理均现点现做。',
    'fq6-q':'有素食选项吗？',
    'fq6-a':'有的——铁板烧蔬菜配炒饭是完全素食的选项。如有荤素分开的需求，请在窗口告知我们，我们会确保不交叉污染。',
    'fq7-q':'提供外烩或大型团体服务吗？',
    'fq7-a':'提供！欢迎企业午餐、生日派对、社区活动等各类外烩咨询。请拨打(817) 899-0009或通过Facebook Messenger与我们联系，告知活动需求、日期和人数，我们将尽力安排。',
    'fq8-q':'价格区间是多少？',
    'fq8-a':'根据蛋白质种类不同，大多数套餐价格在$10至$20之间。以美食车的价格提供Benihana级别的品质——分量足、食材优，从不缩水。',
    'fq9-q':'接受信用卡付款吗？',
    'fq9-a':'接受。我们接受主要信用卡、借记卡及现金，无需担心零钱问题。',
    'fq10-q':'Hibachi Master是家族经营吗？',
    'fq10-a':'是的，Hibachi Master是100%的家族经营美食车。老板每次服务都亲自在场，在铁板前和窗口直接为您服务。这种亲力亲为的投入保证了持续的品质和真诚的服务。',
    'contact-eyebrow':'联系我们','contact-title':'问询与外烩',
    'form-name':'姓名','form-name-ph':'请输入您的姓名',
    'form-email':'电子邮件','form-email-ph':'您的电子邮件',
    'form-phone':'电话（选填）',
    'form-subject':'主题',
    'form-opt-select':'请选择...','form-opt-catering':'外烩咨询',
    'form-opt-menu':'菜单问题','form-opt-other':'其他',
    'form-message':'留言','form-message-ph':'请描述您的活动或问题...',
    'form-submit':'发送留言',
  },

  ko: {
    /* 다국어 텍스트: 네이티브 리뷰 미완료 — 공개 전 수정 필요 */
    'nav-menu':'메뉴','nav-story':'스토리','nav-hours':'영업시간',
    'nav-order':'주문하기','nav-contact':'문의하기',
    'hero-eyebrow':'텍사스 프로스퍼 · 푸드 트럭',
    'hero-h1-1':'진짜 불꽃.','hero-h1-2':'진짜 맛.',
    'hero-desc':'주문 즉시 철판에서 구워내는 히바치 — 치킨, 스테이크, 새우, 필레 미뇽.',
    'hero-ai-def':'Hibachi Master는 텍사스 프로스퍼의 일본식 히바치 푸드 트럭입니다.',
    'stat1-label':'Google 리뷰','stat2-label':'리뷰 수','stat3-label':'TripAdvisor 순위',
    'cta-order':'지금 주문','cta-menu':'메뉴 보기',
    'badge-text':'워크인\n환영',
    'sns-facebook':'📘 Facebook 팔로우','sns-catering':'🥢 케이터링 문의',
    'menu-eyebrow':'메뉴','menu-title':'철판 위의 클래식',
    'mc1-title':'히바치 치킨',
    'mc1-desc':'마늘 버터로 철판에 구운 부드러운 닭가슴살. 볶음밥과 신선한 채소를 곁들여 제공합니다. 단골이 끊이지 않는 인기 메뉴입니다.',
    'mc1-price':'$12부터',
    'mc2-title':'히바치 스테이크',
    'mc2-desc':'오픈 그릴에서 취향에 맞게 구운 데리야키 스테이크. 마늘 볶음밥, 구운 주키니와 양파를 곁들인 든든한 한 끼입니다.',
    'mc2-price':'$15부터',
    'mc3-title':'히바치 새우',
    'mc3-desc':'철판에 화끈하게 구운 큼직한 새우. 고소한 볶음밥과 채소를 곁들여 가볍고 신선하며 풍미가 가득합니다. 점심으로 딱입니다.',
    'mc3-price':'$13부터',
    'mc4-title':'필레 미뇽',
    'mc4-desc':'최고의 선택 — 부드러운 필레 미뇽을 철판에서 완벽하게 구워 버터 볶음밥과 함께 제공합니다. 레스토랑 퀄리티를 푸드 트럭 가격으로. Hibachi Master의 대표 메뉴.',
    'mc4-price':'$18부터',
    'mc5-title':'콤보 플레이트',
    'mc5-desc':'하나로는 부족하신가요? 치킨&새우, 스테이크&치킨, 스테이크&새우 중 두 가지 단백질을 선택할 수 있습니다. 마늘 볶음밥과 구운 채소 포함. 가장 가성비 좋은 메뉴입니다.',
    'mc5-price':'$16부터',
    'mc6-title':'히바치 채소',
    'mc6-desc':'주키니, 양파, 버섯 등 다양한 채소를 마늘 버터로 볶아 볶음밥과 함께 제공합니다. 고기 메뉴 못지않은 풍미의 채식 플레이트입니다.',
    'mc6-price':'$10부터',
    'story-eyebrow':'스토리','story-title':'주문 즉시, 매번 정성껏.',
    'story-p1':'Hibachi Master는 하나의 아이디어에서 시작됐습니다. 프로스퍼에도 Benihana 수준의 히바치 요리를 더 합리적인 가격으로. Texaco 옆 640 N Preston Rd에 자리 잡은 이 가족 경영 푸드 트럭은 개업 이후 지역 사회에 신선한 주문형 히바치를 꾸준히 제공해왔습니다.',
    'story-p2':'모든 요리는 눈앞의 철판에서 주문 후 즉시 조리됩니다. 미리 만들어둔 음식도, 다시 데운 밥도 없습니다. 주문하시면 바로 조리를 시작합니다. Frisco, McKinney에서 점심 한 끼를 위해 일부러 찾아오는 단골이 생기는 이유입니다.',
    'story-p3':'오너는 매번 서비스에 직접 참여합니다. 원거리 관리가 아닙니다. 창구와 철판 앞에서 모든 접시를 직접 확인합니다. 그것이 Hibachi Master가 단순한 푸드 트럭이 아닌 지역 명소가 된 이유입니다.',
    'feat-eyebrow':'선택하는 이유','feat-title':'맛으로 증명합니다',
    'fc1-title':'주문 즉시 조리',
    'fc1-desc':'여기서는 보온등 아래에서 기다리는 음식이 없습니다. 볶음밥부터 단백질까지 주문과 동시에 철판에 올라갑니다. 그 결과는 매번 뜨겁고 향긋하며 진짜 신선한 음식입니다. 단골들이 "박스를 여는 순간부터 다르다"고 말하는 이유입니다.',
    'fc2-title':'넉넉한 양',
    'fc2-desc':'Hibachi Master는 포만감 있는 양으로 유명합니다. 실제 필레 미뇽을 포함한 고품질 재료를 정식 레스토랑에서 기대할 수 있는 양으로 제공합니다. 리뷰어들이 반복적으로 언급하는 가성비: "Benihana 퀄리티에 절반 가격".',
    'fc3-title':'가족 경영, 오너 상주',
    'fc3-desc':'오너는 매 서비스마다 트럭에 직접 나와 있습니다. 원격 관리가 아닙니다. 모든 주문에 개인적인 주의를 기울이며 기준이 절대 떨어지지 않습니다. 체인점이 흉내 낼 수 없는 이 책임감이 바로 Hibachi Master가 프로스퍼에서 열성 팬을 만들어온 이유입니다.',
    'rev-eyebrow':'고객 후기','rev-title':'실제 리뷰',
    'rv1-text':'"음식이 놀랍습니다. 서비스는 언제나 기대를 저버리지 않습니다. 푸드 트럭치고는 정말 10점 만점에 10점. 볶음밥 풍미가 뛰어나고 스테이크는 매번 완벽하게 구워집니다."',
    'rv1-author':'Google 리뷰','rv1-source':'via Google · ★5',
    'rv2-text':'"서비스가 훌륭하고 빠릅니다. 음식도 최고! 양이 많아요! 얌얌 소스가 정말 맛있습니다 — 약간 매콤한데 딱 좋습니다. 20분 운전해서 올 가치가 있습니다."',
    'rv2-author':'Yelp 리뷰','rv2-source':'via Yelp · ★5',
    'rv3-text':'"Benihana 퀄리티인데 훨씬 저렴하고 분위기도 캐주얼합니다. 필레 미뇽은 진짜 필레 미뇽 — 정체불명의 고기가 아닙니다. 온 가족을 데리고 정기적으로 옵니다."',
    'rv3-author':'TripAdvisor 리뷰','rv3-source':'via TripAdvisor · 프로스퍼 99개 식당 중 8위',
    'hours-eyebrow':'찾아오시는 길','hours-title':'영업시간 및 위치',
    'hours-heading-sub':'영업시간',
    'day-mon':'월요일','day-tue':'화요일','day-wed':'수요일',
    'day-thu':'목요일','day-fri':'금요일','day-sat':'토요일',
    'day-sun':'일요일','day-closed':'휴무',
    'addr-text':'640 N Preston Rd (Texaco 옆), Prosper, TX 75078',
    'map-link':'Google 지도에서 길찾기 →',
    'faq-eyebrow':'자주 묻는 질문','faq-title':'FAQ',
    'fq1-q':'영업시간이 어떻게 되나요?',
    'fq1-a':'월요일부터 토요일, 오전 11시부터 오후 8시까지 영업합니다. 일요일은 휴무입니다. 임시 휴업 등 변동 사항은 Facebook 페이지에서 공지합니다.',
    'fq2-q':'위치가 어디인가요?',
    'fq2-a':'640 N Preston Rd, Prosper, TX 75078 — Texaco 주유소 바로 옆입니다. 주차 공간이 넓고, 날씨가 좋으면 야외 피크닉 테이블에서 드실 수 있습니다.',
    'fq3-q':'사전 예약이 필요한가요?',
    'fq3-a':'일반 방문은 예약 없이 창구에서 바로 주문하시면 됩니다. 10명 이상 단체 주문이나 케이터링은 미리 전화 주시면 더욱 원활하게 준비할 수 있습니다.',
    'fq4-q':'포장 가능한가요?',
    'fq4-a':'네! 포장이 주요 방식입니다. 트럭 옆 피크닉 테이블에서 드셔도 좋습니다. 현재 제3자 배달 서비스는 제공하지 않으며, 직접 방문을 권장합니다.',
    'fq5-q':'메뉴에는 어떤 것이 있나요?',
    'fq5-a':'치킨, 스테이크, 새우, 필레 미뇽 등 철판 히바치 요리가 중심입니다. 모두 마늘 볶음밥과 구운 채소와 함께 제공됩니다. 두 가지 단백질을 선택하는 콤보 플레이트도 있습니다. 채식주의자를 위한 채소 플레이트도 제공합니다.',
    'fq6-q':'채식 메뉴가 있나요?',
    'fq6-a':'있습니다 — 볶음밥과 함께 제공되는 히바치 채소 플레이트는 완전 채식입니다. 고기와의 교차오염이 걱정되신다면 창구에서 말씀해 주세요.',
    'fq7-q':'케이터링이나 단체 주문도 가능한가요?',
    'fq7-a':'네, 기업 점심, 생일파티, 지역 행사 등 다양한 케이터링 문의를 환영합니다. (817) 899-0009로 전화하시거나 Facebook 메신저로 행사 일정, 인원 등을 알려 주세요.',
    'fq8-q':'가격대는 어느 정도인가요?',
    'fq8-a':'단백질 종류에 따라 대부분의 플레이트는 $10~$20 선입니다. 푸드 트럭 가격으로 Benihana 퀄리티를 제공하는 것이 자랑입니다.',
    'fq9-q':'신용카드로 결제할 수 있나요?',
    'fq9-a':'네 — 주요 신용카드, 체크카드, 현금 모두 가능합니다. 잔돈 걱정 없이 편하게 오세요.',
    'fq10-q':'Hibachi Master는 가족 경영인가요?',
    'fq10-a':'네 — Hibachi Master는 100% 가족 경영 푸드 트럭입니다. 오너가 매 서비스마다 직접 나와 철판 앞과 창구에서 일합니다. 이런 헌신이 품질과 서비스를 일정하게 유지하는 비결입니다.',
    'contact-eyebrow':'문의하기','contact-title':'케이터링 및 문의',
    'form-name':'이름','form-name-ph':'이름을 입력하세요',
    'form-email':'이메일','form-email-ph':'이메일 주소',
    'form-phone':'전화번호 (선택)',
    'form-subject':'문의 유형',
    'form-opt-select':'선택하세요...','form-opt-catering':'케이터링 문의',
    'form-opt-menu':'메뉴 문의','form-opt-other':'기타',
    'form-message':'메시지','form-message-ph':'행사 내용이나 질문을 적어주세요...',
    'form-submit':'메시지 보내기',
  },

  es: {
    'nav-menu':'Menú','nav-story':'Nuestra Historia','nav-hours':'Horario',
    'nav-order':'Ordenar Ahora','nav-contact':'Contacto',
    'hero-eyebrow':'Prosper, TX · Camión de Comida',
    'hero-h1-1':'Fuego Real.','hero-h1-2':'Sabor Real.',
    'hero-desc':'Hibachi a la plancha, hecho a pedido — pollo, bistec, camarones y filete. Aquí en Prosper.',
    'hero-ai-def':'Hibachi Master es un camión de comida japonesa hibachi en Prosper, TX, que sirve pollo, bistec y mariscos frescos a la plancha todos los días.',
    'stat1-label':'Reseñas Google','stat2-label':'Reseñas','stat3-label':'Ranking TripAdvisor',
    'cta-order':'Ordenar Ahora','cta-menu':'Ver Menú',
    'badge-text':'Sin Reserva\nBienvenido',
    'sns-facebook':'📘 Seguir en Facebook','sns-catering':'🥢 Consulta de Catering',
    'menu-eyebrow':'Lo Que Servimos','menu-title':'Hecho para la Parrilla',
    'mc1-title':'Pollo Hibachi',
    'mc1-desc':'Pechuga de pollo tierna sellada en la plancha con mantequilla de ajo, servida con arroz frito y verduras frescas. El favorito de los clientes habituales que siguen regresando.',
    'mc1-price':'Desde $12',
    'mc2-title':'Bistec Hibachi',
    'mc2-desc':'Jugoso bistec teriyaki cocinado a su gusto en la parrilla abierta. Servido con arroz frito al ajo, calabacín y cebolla a la plancha. Una comida completa a precios de food truck.',
    'mc2-price':'Desde $15',
    'mc3-title':'Camarones Hibachi',
    'mc3-desc':'Camarones grandes flambeados y sazonados en la parrilla, servidos con arroz frito sabroso y verduras. Ligero, fresco y lleno de sabor — perfecto para un almuerzo rápido.',
    'mc3-price':'Desde $13',
    'mc4-title':'Filete Mignon',
    'mc4-desc':'La elección premium — tierno filete mignon cocinado a la perfección junto con arroz frito mantecoso. Calidad de restaurante sin el precio de restaurante. Especialidad de Hibachi Master.',
    'mc4-price':'Desde $18',
    'mc5-title':'Platos Combinados',
    'mc5-desc':'¿No puede elegir uno solo? Mezcle dos proteínas — pollo y camarones, bistec y pollo, o bistec y camarones. Todos los combos incluyen arroz frito al ajo y verduras a la parrilla. El mejor valor del menú.',
    'mc5-price':'Desde $16',
    'mc6-title':'Verduras Hibachi',
    'mc6-desc':'Calabacín, cebolla, champiñones y verduras mixtas a la plancha con mantequilla de ajo, servidos sobre arroz frito. Un plato vegetariano satisfactorio — igual de sabroso que el resto del menú.',
    'mc6-price':'Desde $10',
    'story-eyebrow':'Nuestra Historia','story-title':'Hecho a Pedido. Siempre.',
    'story-p1':'Hibachi Master comenzó con una idea: Prosper merecía hibachi de calidad Benihana sin los precios de Benihana. Estacionado en 640 N Preston Rd junto al Texaco, este camión de comida familiar ha estado sirviendo hibachi fresco y hecho a pedido a la comunidad desde que abrió.',
    'story-p2':'Todo se prepara en la plancha frente a usted. Sin lotes precocinados, sin arroz recalentado. Cuando usted ordena, nosotros cocinamos. Esa es la promesa — y es por eso que los clientes vienen desde Frisco, McKinney y más lejos solo para almorzar.',
    'story-p3':'Los dueños están en el camión en cada servicio. Los verá en la ventana, en la parrilla, asegurándose de que cada plato esté perfecto. Eso es lo que hace de Hibachi Master un favorito del vecindario más que solo otro food truck.',
    'feat-eyebrow':'Por Qué Elegirnos','feat-title':'Calidad que se Saborea',
    'fc1-title':'Hecho Fresco al Pedido',
    'fc1-desc':'Aquí nada espera bajo una lámpara calefactora. Cada plato — desde el arroz frito hasta la proteína — va a la plancha en el momento en que usted ordena. El resultado es comida caliente, fragante y genuinamente fresca cada vez. Los habituales dicen que es la diferencia que se puede saborear desde que abren la caja.',
    'fc2-title':'Porciones Generosas',
    'fc2-desc':'Hibachi Master es conocido por porciones que realmente sacian. Cortes de alta calidad — incluyendo filete mignon real — servidos en cantidades que esperaría de un restaurante. Los clientes destacan consistentemente el valor: "Calidad Benihana a la mitad del precio".',
    'fc3-title':'Familiar, Dueño Presente',
    'fc3-desc':'Los dueños están en el camión cada día de servicio — no gestionando desde la distancia. Eso significa que cada pedido recibe atención personal y el estándar nunca baja. Es el tipo de compromiso que los restaurantes de cadena no pueden replicar, y es exactamente por qué Hibachi Master ha construido una base de seguidores leales en Prosper.',
    'rev-eyebrow':'Lo que Dicen','rev-title':'Reseñas Reales',
    'rv1-text':'"La comida es increíble. El servicio nunca decepciona. Para ser un food truck este lugar es un 10/10. El arroz frito tiene un sabor exquisito y el bistec está cocinado perfectamente cada vez."',
    'rv1-author':'Reseña Google','rv1-source':'via Google · ★5',
    'rv2-text':'"Excelente servicio al cliente. Super rápido. ¡Gran comida! ¡Porciones grandes! La salsa yum yum es increíble — un poco picante y perfecta. Manejo 20 minutos solo para venir aquí."',
    'rv2-author':'Reseña Yelp','rv2-source':'via Yelp · ★5',
    'rv3-text':'"Calidad Benihana pero a un precio mucho más bajo y con un ambiente casual. El filete mignon es filete mignon real — no algún corte misterioso. Traigo a toda mi familia regularmente."',
    'rv3-author':'Reseña TripAdvisor','rv3-source':'via TripAdvisor · #8 de 99 en Prosper',
    'hours-eyebrow':'Encuéntranos','hours-title':'Horario y Ubicación',
    'hours-heading-sub':'Horario de Atención',
    'day-mon':'Lunes','day-tue':'Martes','day-wed':'Miércoles',
    'day-thu':'Jueves','day-fri':'Viernes','day-sat':'Sábado',
    'day-sun':'Domingo','day-closed':'Cerrado',
    'addr-text':'640 N Preston Rd (junto al Texaco), Prosper, TX 75078',
    'map-link':'Cómo llegar en Google Maps →',
    'faq-eyebrow':'¿Preguntas?','faq-title':'FAQ',
    'fq1-q':'¿Cuál es su horario?',
    'fq1-a':'Estamos abiertos de lunes a sábado, de 11:00 AM a 8:00 PM. Cerramos los domingos. Revise nuestra página de Facebook para actualizaciones sobre cambios de horario inesperados.',
    'fq2-q':'¿Dónde están exactamente ubicados?',
    'fq2-a':'Estamos estacionados en 640 N Preston Rd, Prosper, TX 75078 — justo al lado de la gasolinera Texaco. Hay amplio estacionamiento y mesas de picnic al aire libre para comer en el lugar.',
    'fq3-q':'¿Necesito ordenar con anticipación?',
    'fq3-a':'No se necesita reserva para visitas regulares — solo acérquese a la ventana. Para pedidos de grupos grandes o catering (10+ personas), se recomienda llamar con anticipación.',
    'fq4-q':'¿Tienen servicio para llevar?',
    'fq4-a':'¡Sí! El servicio para llevar es nuestro formato principal. También puede comer en las mesas de picnic junto al camión. Actualmente no ofrecemos entrega a domicilio por terceros.',
    'fq5-q':'¿Qué hay en el menú?',
    'fq5-a':'Nuestro menú se centra en proteínas asadas al estilo hibachi: pollo, bistec, camarones y filete mignon — todos servidos con arroz frito al ajo y verduras a la parrilla. Los platos combinados permiten mezclar dos proteínas. También tenemos opción vegetariana.',
    'fq6-q':'¿Tienen opciones vegetarianas?',
    'fq6-a':'Sí — ofrecemos un plato de verduras hibachi con arroz frito que es completamente vegetariano. Solo avísenos en la ventana y nos aseguraremos de que no haya contaminación cruzada con carne.',
    'fq7-q':'¿Hacen catering para eventos o grupos grandes?',
    'fq7-a':'Sí, aceptamos consultas de catering para almuerzos corporativos, fiestas de cumpleaños, eventos comunitarios y más. Llámenos al (817) 899-0009 o contáctenos por Facebook Messenger para discutir sus necesidades.',
    'fq8-q':'¿Cuál es el rango de precios?',
    'fq8-a':'La mayoría de los platos oscilan entre $10 y $20 según su elección de proteína. Somos conocidos por ofrecer hibachi de calidad Benihana a precios de food truck — porciones generosas y cortes de alta calidad.',
    'fq9-q':'¿Aceptan tarjetas de crédito?',
    'fq9-a':'Sí — aceptamos todas las principales tarjetas de crédito y débito, así como efectivo. No se preocupe por el cambio exacto.',
    'fq10-q':'¿Hibachi Master es un negocio familiar?',
    'fq10-a':'Sí — Hibachi Master es 100% familiar. Los dueños están personalmente en el camión en cada servicio, trabajando en la parrilla y en la ventana. Esa participación directa mantiene la calidad constante y el servicio personal.',
    'contact-eyebrow':'Contáctanos','contact-title':'Consultas y Catering',
    'form-name':'Nombre','form-name-ph':'Su nombre',
    'form-email':'Correo electrónico','form-email-ph':'su@correo.com',
    'form-phone':'Teléfono (opcional)',
    'form-subject':'Asunto',
    'form-opt-select':'Seleccione...','form-opt-catering':'Consulta de Catering',
    'form-opt-menu':'Pregunta sobre el Menú','form-opt-other':'Otro',
    'form-message':'Mensaje','form-message-ph':'Cuéntenos sobre su evento o pregunta...',
    'form-submit':'Enviar Mensaje',
  },
};

/* ── applyLang ───────────────────────────────────────────────── */
function applyLang(lang) {
  const t = T[lang];
  if (!t) return;

  /* textContent 対象 */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  /* placeholder 対象 */
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  /* lang-btn active */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.documentElement.lang = lang;
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

/* ── Hamburger ───────────────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger?.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
  const spans = hamburger.querySelectorAll('span');
  spans[0].style.transform = isOpen ? 'rotate(45deg) translate(5px,5px)' : '';
  spans[1].style.opacity   = isOpen ? '0' : '1';
  spans[2].style.transform = isOpen ? 'rotate(-45deg) translate(5px,-5px)' : '';
});

mobileMenu?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
    hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  });
});

/* ── FAQ Accordion ───────────────────────────────────────────── */
document.querySelectorAll('.faq-item').forEach(item => {
  item.querySelector('.faq-q')?.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

/* ── Fade-in ─────────────────────────────────────────────────── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

/* ── Smooth Scroll ───────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

/* ── Contact form ────────────────────────────────────────────── */
const form = document.getElementById('contact-form');
form?.addEventListener('submit', e => {
  e.preventDefault();
  const btn = form.querySelector('.form-submit');
  btn.textContent = '✓ Sent!';
  btn.disabled = true;
  btn.style.background = 'oklch(55% 0.14 145)';
});
