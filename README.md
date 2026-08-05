# Portofolio — Website Pribadi

Website portofolio pribadi bergaya **"Terminal yang rapi"** — nuansa developer
yang presisi: palet biru/putih/hitam, font mono untuk metadata, loading screen
kata "Hai" multi-bahasa, mode terang/gelap, dwibahasa **ID/EN**, dan easter egg
**Dino Run** bertema developer di bagian footer (rintangan `{ }`, `404`, bug).

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
│   ├── data.js             # ⭐ KONFIGURASI & semua teks (id/en) — edit di sini
│   ├── main.js             # Loader, typing, tema, bahasa, nav, form
│   └── game.js             # Easter egg Dino Run (canvas)
├── assets/
│   ├── images/             # ⭐ Taruh semua gambar Anda di sini
│   │   ├── profil.jpg      #   Foto profil (section Tentang)
│   │   ├── proyek-1..4.jpg #   Thumbnail proyek
│   │   └── placeholder.svg #   Cadangan jika gambar belum diisi
│   └── CV.pdf              # ⭐ Ganti dengan CV asli Anda
├── netlify.toml            # Konfigurasi deploy Netlify
└── desain.md               # Dokumen desain awal
```

## Cara mengisi data Anda

1. **Nama & link sosial** → buka `js/data.js`, ubah objek `CONFIG`
   (`name`, `nameShort`, `github`, `linkedin`, `email`, `cv`).
2. **Teks & terjemahan** → masih di `js/data.js`, kamus `I18N` (kunci `id` & `en`).
3. **Gambar** → masukkan ke `assets/images/` dengan nama yang sama seperti
   di atas (lihat `assets/images/README.md`). Foto/proyek otomatis muncul.
4. **CV** → ganti `assets/CV.pdf` dengan CV asli Anda (tombol "Unduh CV").
5. **Link proyek "live ↗"** → di `index.html`, ganti `href="#"` pada
   `.project-link` dengan URL proyek.

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

## Fitur

- ⏳ Loading screen kata "halo" 12 bahasa + progres bar, hanya sekali per sesi
- ⌨️ Hero berupa **jendela terminal**: `$ whoami` + nama mengetik, lalu skrip
  `./status.sh` diketik baris demi baris dengan kursor berkedip
- 📟 **Ticker berjalan** berisi humor developer (`$ npm install kesuksesan`,
  `404: rasa takut tidak ditemukan`) sebagai pembatas antar-section
- 🔢 **Angka hantu** besar (01–04) di belakang tiap section
- 🖼️ Foto & form kontak dibingkai **jendela terminal** (`~/profile.jpg`,
  `~/kirim-pesan.js`) — identitas visual yang konsisten
- 🦖 **Easter egg Dino Run** dalam jendela terminal `~/dino-run.js`: rintangan
  `{ }`, `404`, bug; animasi kaki berlari; skor & BEST di bilah judul;
  overlay GAME OVER + tombol main lagi; lompat dengan spasi/tap; hanya
  berjalan saat section terlihat
- 🌗 Mode terang/gelap (mengikuti sistem saat pertama kali, tersimpan di localStorage)
- 🌐 Dwibahasa ID/EN tanpa reload (label mono & nama teknologi tetap universal)
- ♿ Aksesibilitas: kontras WCAG AA, fokus keyboard terlihat, `prefers-reduced-motion`
- 📱 Responsif: desktop 2 kolom → mobile 1 kolom + menu hamburger
- ⬆️ Tombol kembali ke atas mengambang
