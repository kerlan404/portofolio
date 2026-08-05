/* ==========================================================================
   KONFIGURASI & KONTEN — SILAKAN EDIT SEMUA TEKS DI SINI
   ========================================================================== */

/* ----- Identitas (placeholder — ganti dengan data Anda) ----- */
const CONFIG = {
  name: 'NAMA LENGKAP',        // Nama besar di hero (efek mengetik)
  nameShort: 'NAMA',           // Nama di navbar & footer
  role: 'Software Developer',  // Peran di terminal hero
  github: 'https://github.com/username',
  instagram: 'https://instagram.com/username',
  whatsapp: '6281234567890',   // Nomor WA, format internasional tanpa '+'
  email: 'email@example.com',
};

/* ----- Loading screen: kata "halo" dari berbagai bahasa ----- */
const LOADER_WORDS = [
  'Hai', 'Hello', 'Hola', 'Привет', 'Bonjour', 'Hallo',
  'Ciao', 'こんにちは', '你好', 'Merhaba', '안녕', 'Olá',
  'مرحبا', 'Zdravo', 'Hej', 'Namaste', 'สวัสดี',
];

/* ----- Kamus dwibahasa (label mono & nama teknologi tidak diterjemahkan) ----- */
const I18N = {
  id: {
    'meta.title': '{name} — Portofolio',
    'nav.about': 'Tentang',
    'nav.experience': 'Pengalaman',
    'nav.now': 'Sekarang',
    'nav.projects': 'Proyek',
    'nav.contact': 'Kontak',
    'nav.aboutLabel': 'TENTANG SAYA',
    'nav.expLabel': 'PENGALAMAN',
    'nav.nowLabel': 'SEDANG APA SEKARANG?',
    'nav.projLabel': 'PROYEK',
    'nav.contactLabel': 'KONTAK',
    'theme.toLight': 'Mode terang',
    'theme.toDark': 'Mode gelap',

    'hero.tagline': 'Software Developer — membangun produk web yang rapi, cepat, dan bermanfaat.',
    'hero.ctaProjects': 'Lihat Proyek →',
    'hero.scroll': '↓ scroll',
    'hero.meta.ready': 'terbuka untuk kolaborasi',

    'about.stats.years': 'tahun pengalaman',
    'about.stats.projects': 'proyek selesai',
    'about.stats.clients': 'klien',

    'proj.tech': 'TEKNOLOGI',
    'proj.featured': 'PROYEK UNGGULAN',

    'now.build': 'sedang membangun',
    'now.learn': 'sedang mempelajari',
    'now.open': 'terbuka untuk',
    'now.buildVal': 'aplikasi kasir & stok dengan Flutter',
    'now.learnVal': 'Flutter, Dart, dan CI/CD mobile',
    'now.openVal': 'kolaborasi & proyek freelance',
    'now.updated': 'diperbarui: Agustus 2026',

    'contact.response': 'biasanya membalas dalam 1×24 jam',

    'about.p1': 'Saya seorang software developer yang menikmati proses membangun produk dari nol: merancang database, menulis API, sampai merapikan antarmuka pengguna. Saya percaya kode yang baik adalah kode yang mudah dibaca, dan produk yang baik adalah produk yang terasa sederhana bagi penggunanya.',
    'about.p2': 'Fokus saya saat ini adalah pengembangan web full-stack dan pengalaman pengguna. Di waktu luang, saya suka mengeksplorasi tools developer baru, berkontribusi ke open source, dan sesekali menulis artikel teknis.',

    'exp.now': 'SEKARANG',
    'exp1.role': 'Frontend Developer — PT Digital Nusantara',
    'exp1.desc': 'Memimpin pengembangan ulang dashboard internal, memangkas waktu muat halaman hingga 40%, dan membangun design system komponen bersama tim desain.',
    'exp2.role': 'Full-Stack Developer — Startup Lokal',
    'exp2.desc': 'Membangun aplikasi kasir dan manajemen stok untuk 50+ UMKM — dari perancangan database MySQL hingga antarmuka pengguna yang mudah dipakai.',
    'exp3.role': 'Freelance Web Developer — Berbagai Klien',
    'exp3.desc': 'Membuat website company profile, toko online, dan landing page untuk klien lintas industri, dari brief hingga serah terima.',

    'proj1.name': 'Toko Online — CMS E-Commerce',
    'proj1.desc': 'Platform toko online lengkap: kelola produk, promo, pelanggan, dan pesanan lewat dashboard admin.',
    'proj2.name': 'Aplikasi Kasir & Stok',
    'proj2.desc': 'Aplikasi point-of-sale offline untuk UMKM dengan laporan penjualan harian dan pencatatan stok.',
    'proj3.name': 'Landing Page Agency',
    'proj3.desc': 'Landing page berperforma tinggi dengan skor Lighthouse 98+, animasi ringan, dan pendekatan mobile-first.',
    'proj4.name': 'Website Portofolio Ini',
    'proj4.desc': 'Portofolio dengan mode terang/gelap, dwibahasa ID/EN, dan easter egg dino-run di bagian footer.',

    'contact.name': 'Nama',
    'contact.email': 'Email',
    'contact.message': 'Pesan',
    'contact.send': 'Kirim',
    'contact.sending': 'Mengirim…',
    'contact.sent': 'Pesan terkirim.',
    'contact.error': 'Gagal terkirim, coba lagi.',
    'contact.socialLabel': 'LINK',
    'contact.fastest': 'paling cepat: WhatsApp',

    'footer.made': 'dibuat dengan kopi ☕',
    'footer.thanks': 'terima kasih sudah mampir',
    'footer.backTop': 'kembali ke atas',

    'game.hint1': 'Koneksi ke rekruter terputus?',
    'game.hint2': 'Sambil nunggu, main dulu ↓',
    'game.control': 'SPASI / TAP — LOMPAT',
    'game.over': 'GAME OVER',
    'game.restart': 'MAIN LAGI',
    'game.restartHint': 'atau tekan spasi',
    'game.score': 'SKOR',
    'game.best': 'BEST',
    'game.status.idle': 'SIAP',
    'game.status.run': 'BERJALAN',
    'game.status.over': 'SELESAI',
    'game.status.static': 'REDUCED MOTION',
    'game.aria': 'Game Dino Run bertema developer. Tekan spasi atau tap untuk melompati rintangan.',
  },

  en: {
    'meta.title': '{name} — Portfolio',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.now': 'Now',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.aboutLabel': 'ABOUT ME',
    'nav.expLabel': 'EXPERIENCE',
    'nav.nowLabel': "WHAT I'M DOING NOW",
    'nav.projLabel': 'PROJECTS',
    'nav.contactLabel': 'CONTACT',
    'theme.toLight': 'Switch to light mode',
    'theme.toDark': 'Switch to dark mode',

    'hero.tagline': 'Software Developer — building clean, fast, useful web products.',
    'hero.ctaProjects': 'View Projects →',
    'hero.scroll': '↓ scroll',
    'hero.meta.ready': 'open to collaboration',

    'about.stats.years': 'years of experience',
    'about.stats.projects': 'projects completed',
    'about.stats.clients': 'clients',

    'proj.tech': 'STACK',
    'proj.featured': 'FEATURED PROJECT',

    'now.build': 'currently building',
    'now.learn': 'currently learning',
    'now.open': 'open to',
    'now.buildVal': 'POS & inventory app with Flutter',
    'now.learnVal': 'Flutter, Dart, mobile CI/CD',
    'now.openVal': 'collaboration & freelance work',
    'now.updated': 'updated: August 2026',

    'contact.response': 'usually replies within 24h',

    'about.p1': 'I am a software developer who enjoys building products from scratch: designing databases, writing APIs, and polishing user interfaces. I believe good code is code that is easy to read, and a good product is one that feels simple to its users.',
    'about.p2': 'My current focus is full-stack web development and user experience. In my spare time, I like exploring new developer tools, contributing to open source, and occasionally writing technical articles.',

    'exp.now': 'NOW',
    'exp1.role': 'Frontend Developer — PT Digital Nusantara',
    'exp1.desc': 'Led a full redesign of the internal dashboard, cutting page load time by 40%, and built a component design system together with the design team.',
    'exp2.role': 'Full-Stack Developer — Local Startup',
    'exp2.desc': 'Built a point-of-sale and inventory app for 50+ small businesses — from MySQL database design to an easy-to-use interface.',
    'exp3.role': 'Freelance Web Developer — Various Clients',
    'exp3.desc': 'Delivered company profile websites, online stores, and landing pages for clients across industries, from brief to handover.',

    'proj1.name': 'Online Store — E-Commerce CMS',
    'proj1.desc': 'Full online store platform: manage products, promos, customers, and orders through an admin dashboard.',
    'proj2.name': 'POS & Inventory App',
    'proj2.desc': 'Offline point-of-sale app for small businesses with daily sales reports and stock tracking.',
    'proj3.name': 'Agency Landing Page',
    'proj3.desc': 'High-performance landing page with a 98+ Lighthouse score, lightweight animations, and a mobile-first approach.',
    'proj4.name': 'This Portfolio Website',
    'proj4.desc': 'Portfolio with light/dark mode, ID/EN bilingual support, and a dino-run easter egg in the footer.',

    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send',
    'contact.sending': 'Sending…',
    'contact.sent': 'Message sent.',
    'contact.error': 'Failed to send, try again.',
    'contact.socialLabel': 'LINKS',
    'contact.fastest': 'fastest: WhatsApp',

    'footer.made': 'made with coffee ☕',
    'footer.thanks': 'thanks for stopping by',
    'footer.backTop': 'back to top',

    'game.hint1': 'Connection to recruiter lost?',
    'game.hint2': 'Play while you wait ↓',
    'game.control': 'SPACE / TAP — JUMP',
    'game.over': 'GAME OVER',
    'game.restart': 'PLAY AGAIN',
    'game.restartHint': 'or press space',
    'game.score': 'SCORE',
    'game.best': 'BEST',
    'game.status.idle': 'READY',
    'game.status.run': 'RUNNING',
    'game.status.over': 'OVER',
    'game.status.static': 'REDUCED MOTION',
    'game.aria': 'Developer-themed Dino Run game. Press space or tap to jump over obstacles.',
  },

  ja: {
    'meta.title': '{name} — ポートフォリオ',
    'nav.about': 'プロフィール',
    'nav.experience': '経歴',
    'nav.now': '今',
    'nav.projects': '作品',
    'nav.contact': 'お問い合わせ',
    'nav.aboutLabel': 'プロフィール',
    'nav.expLabel': '経歴',
    'nav.nowLabel': '今、何をしているか',
    'nav.projLabel': '作品',
    'nav.contactLabel': 'お問い合わせ',
    'theme.toLight': 'ライトモードへ',
    'theme.toDark': 'ダークモードへ',

    'hero.tagline': 'ソフトウェア開発者 — きれいで、速くて、便利なウェブプロダクトを開発しています。',
    'hero.ctaProjects': '作品を見る →',
    'hero.scroll': '↓ スクロール',
    'hero.meta.ready': 'コラボレーション歓迎',

    'about.p1': '私はソフトウェア開発者で、データベース設計からAPI、ユーザーインターフェースの仕上げまで、ゼロからプロダクトを作る過程を楽しんでいます。良いコードとは読みやすいコードであり、良いプロダクトとはユーザーにとってシンプルに感じられるものだと信じています。',
    'about.p2': '現在の注力分野はフルスタックウェブ開発とユーザー体験です。空き時間には新しい開発ツールを試したり、オープンソースに貢献したり、技術記事を書いたりしています。',

    'about.stats.years': '年の経験',
    'about.stats.projects': '完了プロジェクト',
    'about.stats.clients': 'クライアント',

    'exp.now': '現在',
    'exp1.role': 'フロントエンド開発者 — PT Digital Nusantara',
    'exp1.desc': '社内ダッシュボードの全面リニューアルを主導し、ページ読み込み時間を40%短縮。デザインチームとコンポーネントのデザインシステムを構築。',
    'exp2.role': 'フルスタック開発者 — ローカルスタートアップ',
    'exp2.desc': '50以上の小規模事業者向けPOS・在庫管理アプリを構築 — MySQLデータベース設計から使いやすいUIまで。',
    'exp3.role': 'フリーランスウェブ開発者 — 各種クライアント',
    'exp3.desc': '企業サイト、オンラインストア、ランディングページを様々な業界のクライアント向けに制作。',

    'proj1.name': 'オンラインストア — EC CMS',
    'proj1.desc': '製品・プロモ・顧客・注文を管理画面で操作できる本格的なECプラットフォーム。',
    'proj2.name': 'POS & 在庫アプリ',
    'proj2.desc': '小規模事業者向けオフラインPOSアプリ。日次売上レポートと在庫管理機能付き。',
    'proj3.name': 'エージェンシー用ランディングページ',
    'proj3.desc': 'Lighthouse 98+ の高パフォーマンスLP。軽量なアニメーションとモバイルファースト。',
    'proj4.name': 'このポートフォリオサイト',
    'proj4.desc': 'ライト/ダークモード、ID/EN/日本語、フッターの恐竜ランイースターエッグ付きポートフォリオ。',

    'proj.tech': '技術',
    'proj.featured': '注目作品',

    'now.build': '開発中',
    'now.learn': '学習中',
    'now.open': '募集中',
    'now.buildVal': 'FlutterのPOS・在庫アプリ',
    'now.learnVal': 'Flutter, Dart, モバイルCI/CD',
    'now.openVal': 'コラボレーション & フリーランス',
    'now.updated': '更新: 2026年8月',

    'contact.name': '名前',
    'contact.email': 'メール',
    'contact.message': 'メッセージ',
    'contact.send': '送信',
    'contact.sending': '送信中…',
    'contact.sent': 'メッセージを送信しました。',
    'contact.error': '送信に失敗しました。もう一度お試しください。',
    'contact.socialLabel': 'リンク',
    'contact.fastest': '最速: WhatsApp',
    'contact.response': '通常24時間以内に返信します',

    'footer.made': 'コーヒーと一緒に ☕',
    'footer.thanks': 'ご覧いただきありがとうございます',
    'footer.backTop': 'トップへ ↑',

    'game.hint1': '採用担当者との接続が切れましたか？',
    'game.hint2': '待っている間に遊んでください ↓',
    'game.control': 'SPACE / TAP — ジャンプ',
    'game.over': 'ゲームオーバー',
    'game.restart': 'もう一度',
    'game.restartHint': 'またはスペースキー',
    'game.score': 'スコア',
    'game.best': 'ベスト',
    'game.status.idle': '準備完了',
    'game.status.run': '実行中',
    'game.status.over': '終了',
    'game.status.static': 'REDUCED MOTION',
    'game.aria': '開発者テーマの恐竜ランゲーム。スペースキーまたはタップで障害物を飛び越えます。',
  },
};

/* ----- Helper terjemahan (global agar bisa dipakai main.js & game.js) ----- */
let CURRENT_LANG = 'id';

function t(key) {
  const dict = I18N[CURRENT_LANG];
  if (dict && dict[key] !== undefined) {
    return String(dict[key]).replace('{name}', CONFIG.name);
  }
  return key;
}
