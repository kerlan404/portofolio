# Portofolio — Website Pribadi

Website portofolio pribadi bergaya **"Terminal yang rapi"** — nuansa developer
yang presisi: palet biru/putih/hitam, font mono untuk metadata, loading screen
kata "Hai" multi-bahasa, mode terang/gelap, trilingual **ID/EN/JA**, dan angka
**404 tiga dimensi** animasi di bagian footer.

> Desain lengkap ada di [`desain.md`](desain.md).

## Teknologi

- **HTML + CSS + JavaScript murni** (tanpa framework) — ringan & langsung jalan
- Google Fonts: Space Grotesk, Inter, JetBrains Mono
- Netlify Forms untuk form kontak (tanpa backend)

## Struktur

```
├── index.html              # Halaman utama (semua section)
├── css/style.css           # Token warna, tema, tipografi, responsive
├── js/
│   ├── data.js             # ⭐ KONFIGURASI & semua teks (id/en/ja) — edit di sini
│   └── main.js             # Loader, typing, tema, bahasa, nav, form, parallax 404
├── assets/
│   ├── favicon.svg         # Favicon (prompt terminal >_)
│   ├── favicon-32.png      #   + versi PNG 32×32
│   ├── apple-touch-icon.png#   + ikon iOS 180×180
│   ├── og-image.svg        # Gambar OG 1200×630 (sumber, bisa diedit)
│   ├── og-image.png        #   + versi PNG untuk sosmed (dipakai meta OG)
│   └── images/             # Thumbnail proyek (SVG kustom siap pakai)
│       ├── proyek-1..4.svg #   Thumbnail proyek bertema terminal
│       └── placeholder.svg #   Cadangan jika file tidak ditemukan
├── netlify.toml            # Konfigurasi deploy Netlify
└── desain.md               # Dokumen desain awal
```

## Cara mengisi data Anda

1. **Nama & link sosial** → buka `js/data.js`, ubah objek `CONFIG`
   (`name`, `nameShort`, `github`, `instagram`, `whatsapp`, `email`).
   Nomor WhatsApp memakai format internasional tanpa `+` (contoh: `6281234567890`).
2. **Teks & terjemahan** → masih di `js/data.js`, kamus `I18N` (kunci `id`, `en`, `ja`).
3. **Ikon teknologi & AI tools** → di `index.html`, blok `<ul class="stack-chips">`
   dalam section `#stack` (grup BAHASA / FRAMEWORK / TOOLS / AI TOOLS) — tambah/hapus
   chip sesuai stack Anda. Ikon disimpan lokal di `assets/icons/`.
4. **Gambar proyek** → thumbnail SVG kustom sudah tersedia di
   `assets/images/`. Untuk memakai screenshot asli, simpan sebagai
   `proyek-1.png` lalu ubah `src` di `index.html` (lihat
   `assets/images/README.md`).
5. **Link proyek "live ↗"** → di `index.html`, ganti `href="#"` pada
   `.project-link` dengan URL proyek.
6. **Domain untuk OG/sosmed** → sudah terisi domain Netlify asli
   (`https://mochammadrezyalfaraby.netlify.app`) pada `og:url`, `og:image`,
   `canonical`, dan `twitter:image`. Jika nanti memakai custom domain, ganti
   semua URL tersebut di `index.html`.

## Menjalankan di lokal

Tinggal buka `index.html` di browser, atau jalankan server statis:

```bash
npx serve -l 4173
# buka http://localhost:4173
```

## Deploy ke Netlify

1. Push repo ini ke GitHub.
2. Di dashboard Netlify: **Add new site → Import an existing project → GitHub**,
   pilih repo ini.
3. Build setting tidak perlu diubah (situs statis), **publish directory**: `.`
4. Deploy — setiap push ke GitHub otomatis ter-deploy.
5. **Form kontak** aktif otomatis (Netlify Forms, gratis) — notifikasi
   submission ada di **Site settings → Forms**.
6. Domain OG sudah terisi — thumbnail preview WA/IG/Twitter tampil otomatis.
   Jika mengganti domain Netlify/custom, update URL pada meta OG di `index.html`.

## Fitur

- ⏳ Loading screen kata "halo" 17 bahasa + progres bar, hanya sekali per sesi
- ⌨️ Hero berupa **jendela terminal**: `$ whoami` + nama mengetik, lalu skrip
  `./status.sh` diketik baris demi baris dengan kursor berkedip
- 🛠️ **Panel STACK** di bawah hero: grup BAHASA / FRAMEWORK & UI / TOOLS & DB /
  AI TOOLS dengan ikon resmi (PHP, Flutter, Dart, JS, HTML, CSS, GitHub, MySQL, dll)
- 📟 **Ticker berjalan** berisi humor developer (`$ npm install kesuksesan`,
  `404: rasa takut tidak ditemukan`) sebagai pembatas antar-section
- 🖼️ Form kontak dibingkai **jendela terminal** (`~/kirim-pesan.js`)
- 💬 **WhatsApp & Instagram** di kontak (link otomatis dari `CONFIG`),
  ditambah **tombol WhatsApp mengambang** dengan animasi pulse
- 🧊 **404 3D** dalam jendela terminal `~/404.js`: angka raksasa dengan efek
  extrude tiga dimensi, melayang & berputar, lantai grid retrowave yang
  bergeser, bayangan elips dinamis, dan parallax mengikuti kursor
- 📊 **Progress bar scroll** tipis berwarna aksen di paling atas halaman
- 🌗 Mode terang/gelap (mengikuti sistem saat pertama kali, tersimpan di localStorage)
- 🌐 Trilingual ID/EN/JA tanpa reload (label mono & nama teknologi tetap universal)
- ♿ Aksesibilitas: kontras WCAG AA, fokus keyboard terlihat, `prefers-reduced-motion`
- 📱 Responsif: desktop 2 kolom → mobile 1 kolom + menu hamburger
- ⬆️ Tombol kembali ke atas mengambang
