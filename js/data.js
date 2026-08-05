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

    'hero.tagline': 'ソフトウェア開発者 — 美しく、速く、使いやすいWebプロダクトを開発しています。',
    'hero.ctaProjects': '制作物を見る →',
    'hero.scroll': '↓ スクロール',
    'hero.meta.ready': 'コラボレーション歓迎',

    'about.p1': '私はソフトウェア開発者として、データベース設計からAPI、UIの仕上げまで、プロダクトをゼロから作り上げる過程を楽しんでいます。良いコードは読みやすいコードであり、良いプロダクトは使う人にとってシンプルに感じられるものだと考えています。',
    'about.p2': '現在はフルスタックなWeb開発とユーザー体験に注力しています。空き時間には新しい開発ツールを試したり、オープンソースへの貢献や技術記事の執筆をしたりしています。',

    'about.stats.years': '年以上の経験',
    'about.stats.projects': '件のプロジェクト',
    'about.stats.clients': '社のクライアント',

    'exp.now': '現在',
    'exp1.role': 'フロントエンド開発者 — PT Digital Nusantara',
    'exp1.desc': '社内ダッシュボードの全面リニューアルを主導し、ページの読み込み時間を40%短縮。デザインチームと共にコンポーネントのデザインシステムも構築しました。',
    'exp2.role': 'フルスタック開発者 — 地元のスタートアップ',
    'exp2.desc': '50以上の小規模事業者向けにPOS・在庫管理アプリを開発 — MySQLでのデータベース設計から、使いやすいUIまで一貫して担当しました。',
    'exp3.role': 'フリーランスWeb開発者 — さまざまなクライアント',
    'exp3.desc': '企業サイト、オンラインストア、ランディングページを、さまざまな業界のクライアント向けに要件定義から納品まで制作しました。',

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
