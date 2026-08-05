/* ==========================================================================
   KONFIGURASI & KONTEN — SILAKAN EDIT SEMUA TEKS DI SINI
   ========================================================================== */

/* ----- Identitas (placeholder — ganti dengan data Anda) ----- */
const CONFIG = {
  name: 'Mochammad Rezy Alfarabi',  // Nama besar di hero (efek mengetik)
  nameShort: 'M.Rezy',              // Nama di navbar & footer
  role: 'Full Stack Developer',  // Peran di terminal hero
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

    'hero.tagline': 'Full Stack Developer — membangun produk web yang rapi, cepat, dan bermanfaat.',
    'hero.ctaProjects': 'Lihat Proyek →',
    'hero.scroll': '↓ scroll',
    'hero.meta.ready': 'terbuka untuk kolaborasi',

    'ticker.1': '$ npm install kesuksesan',
    'ticker.2': '404: rasa takut tidak ditemukan',
    'ticker.3': 'git commit -m "rapi"',
    'ticker.4': 'ping rekruter… time out — main dulu ↓',
    'ticker.5': 'SIGINT: cukup scroll',
    'ticker.6': 'syntax error: hidup tanpa kopi',

    'about.stats.years': 'tahun belajar coding',
    'about.stats.projects': 'proyek selesai',
    'about.stats.clubs': 'eskul & komunitas',

    'proj.tech': 'TEKNOLOGI',
    'proj.featured': 'PROYEK UNGGULAN',

    'cmd.exp': '$ ls ~/riwayat/',
    'cmd.now': '$ cat sekarang.md',
    'cmd.proj': '$ ls ~/proyek/',
    'cmd.contact': '$ ./kirim-pesan.js',
    'win.now': '~/sekarang.md',
    'win.contact': '~/kirim-pesan.js',
    'win.social': '~/kontak.txt',

    'now.build': 'sedang membangun',
    'now.learn': 'sedang mempelajari',
    'now.open': 'terbuka untuk',
    'now.buildVal': 'aplikasi kasir & stok dengan Flutter',
    'now.learnVal': 'Flutter, Dart, dan CI/CD mobile',
    'now.openVal': 'kolaborasi & proyek freelance',
    'now.updated': 'diperbarui: Agustus 2026',

    'contact.response': 'biasanya membalas dalam 1×24 jam',

    'about.p1': 'Saya seorang full stack developer yang menikmati proses membangun produk dari nol: merancang database, menulis API, sampai merapikan antarmuka pengguna. Saya percaya kode yang baik adalah kode yang mudah dibaca, dan produk yang baik adalah produk yang terasa sederhana bagi penggunanya.',
    'about.p2': 'Fokus saya saat ini adalah pengembangan web full-stack dan pengalaman pengguna. Di waktu luang, saya suka mengeksplorasi tools developer baru, berkontribusi ke open source, dan sesekali menulis artikel teknis.',

    'exp1.role': 'Siswa — SMK Jakarta Pusat 1',
    'exp1.desc': 'Siswa kelas XII RPL 2 di SMK Jakarta Pusat 1 — mendalami pengembangan web full stack dan belajar basis data (MySQL): merancang skema, menulis query, sampai mengintegrasikannya ke aplikasi web.',
    'exp.ongoing': 'berlangsung',
    'exp.done': 'selesai',
    'exp2.role': 'Anggota Ekstrakurikuler IT Preneur',
    'exp2.desc': 'Anggota ekstrakurikuler IT Preneur periode 2024–2025 — belajar dasar pengembangan web, kewirausahaan digital, dan membangun proyek teknologi bersama tim.',

    'proj1.name': 'Toko Online — CMS E-Commerce',
    'proj1.desc': 'Platform toko online lengkap: kelola produk, promo, pelanggan, dan pesanan lewat dashboard admin.',
    'proj2.name': 'Aplikasi Kasir & Stok',
    'proj2.desc': 'Aplikasi point-of-sale offline untuk UMKM dengan laporan penjualan harian dan pencatatan stok.',
    'proj3.name': 'Landing Page Agency',
    'proj3.desc': 'Landing page berperforma tinggi dengan skor Lighthouse 98+, animasi ringan, dan pendekatan mobile-first.',
    'proj4.name': 'Website Portofolio Ini',
    'proj4.desc': 'Portofolio dengan mode terang/gelap, trilingual ID/EN/JA, dan angka 404 3D animasi di bagian footer.',

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

    'e404.hint1': 'Halaman ini sengaja tidak ada.',
    'e404.hint2': 'Tapi kamu tidak tersesat — kamu di sini.',
    'e404.sub': '404 — HALAMAN TIDAK DITEMUKAN',
    'e404.aria': 'Angka 404 tiga dimensi melayang di atas lantai grid.',
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

    'hero.tagline': 'Full Stack Developer — building clean, fast, useful web products.',
    'hero.ctaProjects': 'View Projects →',
    'hero.scroll': '↓ scroll',
    'hero.meta.ready': 'open to collaboration',

    'ticker.1': '$ npm install success',
    'ticker.2': '404: fear not found',
    'ticker.3': 'git commit -m "clean"',
    'ticker.4': 'ping recruiter… time out — play later ↓',
    'ticker.5': 'SIGINT: enough scrolling',
    'ticker.6': 'syntax error: life without coffee',

    'about.stats.years': 'years of coding',
    'about.stats.projects': 'projects completed',
    'about.stats.clubs': 'clubs & communities',

    'proj.tech': 'STACK',
    'proj.featured': 'FEATURED PROJECT',

    'cmd.exp': '$ ls ~/history/',
    'cmd.now': '$ cat now.md',
    'cmd.proj': '$ ls ~/projects/',
    'cmd.contact': '$ ./send-message.js',
    'win.now': '~/now.md',
    'win.contact': '~/send-message.js',
    'win.social': '~/contact.txt',

    'now.build': 'currently building',
    'now.learn': 'currently learning',
    'now.open': 'open to',
    'now.buildVal': 'POS & inventory app with Flutter',
    'now.learnVal': 'Flutter, Dart, mobile CI/CD',
    'now.openVal': 'collaboration & freelance work',
    'now.updated': 'updated: August 2026',

    'contact.response': 'usually replies within 24h',

    'about.p1': 'I am a full stack developer who enjoys building products from scratch: designing databases, writing APIs, and polishing user interfaces. I believe good code is code that is easy to read, and a good product is one that feels simple to its users.',
    'about.p2': 'My current focus is full-stack web development and user experience. In my spare time, I like exploring new developer tools, contributing to open source, and occasionally writing technical articles.',

    'exp1.role': 'Student — SMK Jakarta Pusat 1',
    'exp1.desc': 'Grade XII student of RPL 2 at SMK Jakarta Pusat 1 — diving into full stack web development and learning databases (MySQL): designing schemas, writing queries, and integrating them into web apps.',
    'exp.ongoing': 'ongoing',
    'exp.done': 'completed',
    'exp2.role': 'Member — IT Preneur Extracurricular',
    'exp2.desc': 'Member of the IT Preneur extracurricular (2024–2025) — learned web development fundamentals, digital entrepreneurship, and built tech projects with a team.',

    'proj1.name': 'Online Store — E-Commerce CMS',
    'proj1.desc': 'Full online store platform: manage products, promos, customers, and orders through an admin dashboard.',
    'proj2.name': 'POS & Inventory App',
    'proj2.desc': 'Offline point-of-sale app for small businesses with daily sales reports and stock tracking.',
    'proj3.name': 'Agency Landing Page',
    'proj3.desc': 'High-performance landing page with a 98+ Lighthouse score, lightweight animations, and a mobile-first approach.',
    'proj4.name': 'This Portfolio Website',
    'proj4.desc': 'Portfolio with light/dark mode, ID/EN/JA trilingual support, and an animated 3D 404 in the footer.',

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

    'e404.hint1': 'This page intentionally does not exist.',
    'e404.hint2': 'But you are not lost — you are right here.',
    'e404.sub': '404 — PAGE NOT FOUND',
    'e404.aria': 'A floating three-dimensional 404 above a grid floor.',
  },

  ja: {
    'meta.title': '{name} — ポートフォリオ',
    'nav.about': '私について',
    'nav.experience': '職歴',
    'nav.now': '現在の活動',
    'nav.projects': '制作物',
    'nav.contact': 'お問い合わせ',
    'nav.aboutLabel': '私について',
    'nav.expLabel': '職歴',
    'nav.nowLabel': 'いま何をしているか',
    'nav.projLabel': '制作物',
    'nav.contactLabel': 'お問い合わせ',
    'theme.toLight': 'ライトモードに切り替え',
    'theme.toDark': 'ダークモードに切り替え',

    'hero.tagline': 'フルスタック開発者 — 美しく、速く、使いやすいWebプロダクトを開発しています。',
    'hero.ctaProjects': '制作物を見る →',
    'hero.scroll': '↓ スクロール',
    'hero.meta.ready': 'コラボレーション歓迎',

    'ticker.1': '$ npm install 成功',
    'ticker.2': '404: 恐怖は見つかりません',
    'ticker.3': 'git commit -m "きれい"',
    'ticker.4': 'ping リクルーター… タイムアウト — あとで遊ぼう ↓',
    'ticker.5': 'SIGINT: スクロールはここまで',
    'ticker.6': 'syntax error: コーヒーのない人生',

    'about.p1': '私はフルスタック開発者として、データベース設計からAPI、UIの仕上げまで、プロダクトをゼロから作り上げる過程を楽しんでいます。良いコードは読みやすいコードであり、良いプロダクトは使う人にとってシンプルに感じられるものだと考えています。',
    'about.p2': '現在はフルスタックなWeb開発とユーザー体験に注力しています。空き時間には新しい開発ツールを試したり、オープンソースへの貢献や技術記事の執筆をしたりしています。',

    'about.stats.years': '年のコーディング経験',
    'about.stats.projects': '件のプロジェクト',
    'about.stats.clubs': '部活・コミュニティ',

    'exp1.role': '学生 — SMK ジャカルタ中央 1',
    'exp1.desc': 'SMKジャカルタ中央1のRPL 2（ソフトウェアエンジニアリング科）12年生。フルスタックWeb開発を深め、データベース（MySQL）のスキーマ設計・クエリ・Webアプリへの統合を学んでいます。',
    'exp.ongoing': '在学中',
    'exp.done': '完了',
    'exp2.role': 'IT Preneur 部活動 メンバー',
    'exp2.desc': '2024〜2025年にIT Preneur部活動に参加し、Web開発の基礎、デジタル起業、チームでのテクノロジープロジェクト制作を学びました。',

    'proj1.name': 'オンラインストア — EC CMS',
    'proj1.desc': '商品・プロモーション・顧客・注文を管理画面でまとめて管理できる、本格的なECプラットフォーム。',
    'proj2.name': 'POS & 在庫管理アプリ',
    'proj2.desc': '小規模事業者向けのオフラインPOSアプリ。日々の売上レポートと在庫管理機能付き。',
    'proj3.name': 'エージェンシー用ランディングページ',
    'proj3.desc': 'Lighthouse 98点以上の高性能ランディングページ。軽量なアニメーションとモバイルファースト設計。',
    'proj4.name': 'このポートフォリオサイト',
    'proj4.desc': 'ライト/ダークモード、ID/EN/日本語対応。フッターには3Dアニメーションの「404」を配置しています。',

    'proj.tech': '使用技術',
    'proj.featured': '注目のプロジェクト',

    'cmd.exp': '$ ls ~/履歴/',
    'cmd.now': '$ cat 現在.md',
    'cmd.proj': '$ ls ~/制作物/',
    'cmd.contact': '$ ./send-message.js',
    'win.now': '~/現在.md',
    'win.contact': '~/send-message.js',
    'win.social': '~/連絡.txt',

    'now.build': '現在開発中',
    'now.learn': '現在学習中',
    'now.open': '募集中',
    'now.buildVal': 'FlutterでPOS・在庫管理アプリ',
    'now.learnVal': 'Flutter、Dart、モバイルCI/CD',
    'now.openVal': 'コラボレーション & フリーランス案件',
    'now.updated': '最終更新: 2026年8月',

    'contact.name': '名前',
    'contact.email': 'メールアドレス',
    'contact.message': 'メッセージ',
    'contact.send': '送信',
    'contact.sending': '送信中…',
    'contact.sent': 'メッセージを送信しました！',
    'contact.error': '送信に失敗しました。もう一度お試しください。',
    'contact.socialLabel': 'リンク',
    'contact.fastest': '一番早い連絡手段: WhatsApp',
    'contact.response': '通常24時間以内に返信します',

    'footer.made': 'コーヒーと一緒に ☕',
    'footer.thanks': 'ご覧いただきありがとうございます',
    'footer.backTop': 'トップへ戻る ↑',

    'e404.hint1': 'このページはわざと存在しません。',
    'e404.hint2': 'でも迷っていません — あなたはここにいます。',
    'e404.sub': '404 — ページが見つかりません',
    'e404.aria': 'グリッドの床の上に浮かぶ3Dの「404」。',
  },
};

/* ----- Helper terjemahan (global agar bisa dipakai main.js) ----- */
let CURRENT_LANG = 'id';

function t(key) {
  const dict = I18N[CURRENT_LANG];
  if (dict && dict[key] !== undefined) {
    return String(dict[key]).replace('{name}', CONFIG.name);
  }
  return key;
}
