# Desain UI — Website Portofolio

## 1. Ringkasan Brief

- **Subjek:** Website portofolio pribadi (developer/kreator)
- **Audiens:** Recruiter, klien, kolaborator yang menilai kredibilitas & karya
- **Tugas utama halaman:** Meyakinkan pengunjung dalam <10 detik bahwa pemilik portofolio kompeten, lalu mengarahkan ke Proyek dan Kontak
- **Palet:** Biru, putih, hitam
- **Fitur wajib:** Landing, Tentang Saya, Pengalaman, Proyek, Kontak, easter egg dino-run di bagian paling bawah, loading screen kata "Hai" multi-bahasa, mode terang/gelap, ganti bahasa ID/EN

## 2. Filosofi Desain

Arah yang diambil: **"Terminal yang rapi"** — nuansa developer yang presisi, bukan portofolio kreatif yang penuh gradasi. Elemen khas dunia developer (kursor berkedip, label `~/path`, prompt `$`, monospace untuk metadata) dipakai secara konsisten sebagai *structural device*, bukan dekorasi kosong — karena subjeknya memang seorang pembuat perangkat lunak.

Dua hal yang sengaja dihindari agar tidak terasa generik: latar krem hangat dengan aksen terracotta, dan hitam pekat + hijau neon tunggal. Sebagai gantinya: hitam yang sedikit kebiruan (bukan `#000000` murni) dan biru sinyal yang tegas sebagai satu-satunya aksen berwarna di seluruh halaman.

**Elemen signature:** game dino-run di footer bukan sekadar tiruan lucu dari "no internet" Chrome, tapi dikonsep ulang sebagai *"koneksi ke rekruter terputus? sambil nunggu, main dulu"* — dino berbentuk siluet piksel biru yang melompati rintangan berbentuk ikon `{ }`, bug, dan `404`. Ini menutup halaman dengan humor yang relevan dengan identitas developer, bukan easter egg acak.

## 3. Palet Warna

Token warna didefinisikan sebagai CSS variables agar mode terang/gelap tinggal switch nilai.

| Token | Mode Terang | Mode Gelap | Fungsi |
|---|---|---|---|
| `--bg` | `#FFFFFF` | `#0B0F14` | Latar utama |
| `--bg-soft` | `#F3F5F8` | `#121826` | Latar section/card |
| `--ink` | `#0B0F14` | `#F5F7FA` | Teks utama |
| `--ink-muted` | `#5B6572` | `#8C96A3` | Teks sekunder/caption |
| `--border` | `#E2E6EB` | `#1F2733` | Garis pembatas, kartu |
| `--accent` | `#1447E6` | `#4C82FF` | Aksen biru (CTA, link, highlight) |
| `--accent-ink` | `#FFFFFF` | `#0B0F14` | Teks di atas elemen `--accent` |

Catatan pemakaian:
- Biru (`--accent`) **hanya** dipakai untuk elemen interaktif/penting: tombol utama, link aktif, kursor terminal, garis timeline, highlight kata kunci. Jangan dipakai sebagai warna dekoratif berulang agar tetap terasa "sinyal", bukan tema warna biasa.
- Hitam tidak pernah pekat 100% di layar besar (gunakan `#0B0F14`) — lebih nyaman di mata dan terasa lebih disengaja daripada `#000000`.
- Putih di mode terang memakai dua tingkat (`#FFFFFF` untuk kartu, `#F3F5F8` untuk latar section) supaya ada kedalaman tanpa bayangan berat.

## 4. Tipografi

| Peran | Font | Alasan |
|---|---|---|
| Display (judul besar) | **Space Grotesk** (600–700) | Geometris, sedikit teknikal, kontras baik dengan body |
| Body (paragraf, UI) | **Inter** (400–500) | Netral, sangat terbaca di ukuran kecil, mendukung ID & EN dengan baik |
| Utility/mono (label, tanggal, tag, prompt) | **JetBrains Mono** (400–500) | Memperkuat identitas developer, dipakai di elemen kecil saja |

Skala tipe (contoh, `rem`):
```
--fs-hero:   clamp(2.5rem, 6vw, 5rem)   /* Space Grotesk 700 */
--fs-h2:     clamp(1.75rem, 3vw, 2.5rem) /* Space Grotesk 600 */
--fs-body:   1rem                        /* Inter 400 */
--fs-small:  0.875rem                    /* Inter 500 */
--fs-mono:   0.8125rem                   /* JetBrains Mono, uppercase, letter-spacing 0.04em */
```

Aturan: font mono **hanya** untuk label pendek (mis. `NAV.01`, `2022 — SEKARANG`, `$ lihat-proyek`), tidak pernah untuk paragraf panjang.

## 5. Struktur Halaman & Wireframe

Navigasi tetap (fixed) di atas, transparan lalu jadi solid saat scroll:

```
┌───────────────────────────────────────────────────┐
│  [NAMA]        Tentang  Pengalaman  Proyek  Kontak │
│                                     [ID/EN] [☀/☾]  │
└───────────────────────────────────────────────────┘
```

### 5.1 Loading Screen (sebelum landing)
Full-screen overlay warna `--bg`, di tengah teks besar (Space Grotesk) yang berganti tiap ±350ms menampilkan kata "halo" dari berbagai bahasa, dengan animasi fade + sedikit slide-up:

```
Hai → Hello → Hola → Bonjour → Hallo → Ciao →
こんにちは → 你好 → 안녕 → Olá → مرحبا → Namaste
```
Di bawah kata, garis progres tipis warna `--accent` yang penuh seiring animasi selesai. Overlay lalu wipe ke atas (bukan fade biasa) untuk transisi yang lebih berkarakter, memperlihatkan Landing Page di baliknya.

### 5.2 Landing / Hero
```
┌───────────────────────────────────────────┐
│  (kursor berkedip) $ whoami                │
│                                             │
│  NAMA LENGKAP                              │  ← --fs-hero, Space Grotesk
│  Peran / tagline singkat                   │  ← Inter, --ink-muted
│                                             │
│  [Lihat Proyek →]   [Unduh CV]             │  ← primer biru, sekunder outline
│                                             │
│  ↓ scroll                                  │
└─────────────────────────────────────────────┘
```
Latar hero memakai pola titik/grid sangat samar warna `--border` (opacity rendah), memberi tekstur "papan sirkuit" tanpa ramai. Kursor terminal berkedip sebelum nama mengetik sendiri (typing effect) sekali saat halaman pertama dibuka — animasi ini tidak diulang saat scroll kembali ke atas, agar tidak berlebihan.

### 5.3 Tentang Saya
Layout dua kolom di desktop (foto/ilustrasi minimal di kiri, teks di kanan), satu kolom di mobile. Judul section pakai label mono kecil di atasnya:
```
NAV.01 — TENTANG SAYA
```
Isi: paragraf singkat, lalu daftar skill sebagai "tag" kecil bergaya mono dengan border tipis (bukan progress bar — progress bar skill terasa template dan sulit dipertanggungjawabkan angkanya).

### 5.4 Pengalaman
Ini satu-satunya section yang **layak** pakai timeline bernomor/kronologis, karena kontennya memang urutan waktu nyata:
```
2024 — SEKARANG   │ Judul Peran — Perusahaan
                   │ Deskripsi singkat pencapaian
                   │
2022 — 2024        │ Judul Peran — Perusahaan
                   │ Deskripsi singkat pencapaian
```
Garis vertikal `--accent` tipis di kiri, titik penanda di tiap entri. Tanggal dalam font mono.

### 5.5 Proyek
Grid kartu (2 kolom desktop, 1 kolom mobile). Tiap kartu:
```
┌───────────────────────────────┐
│ [thumbnail/screenshot]         │
│ Nama Proyek          [live↗]  │
│ Deskripsi 1 baris               │
│ `React`  `Node.js`  `Postgres`  │  ← tag mono
└───────────────────────────────┘
```
Hover: gambar sedikit zoom, border berubah ke `--accent`. Tidak ada bayangan drop-shadow tebal — cukup border 1px yang berubah warna, konsisten dengan gaya "terminal rapi".

### 5.6 Kontak
Form sederhana (Nama, Email, Pesan) + daftar link sosial di sisi kanan bergaya list mono (`→ GitHub`, `→ LinkedIn`, `→ Email`). Tombol kirim primer warna `--accent`. Status kirim/gagal ditulis dalam gaya "sistem", bukan berbunyi seperti manusia minta maaf — misalnya "Pesan terkirim." / "Gagal terkirim, coba lagi." Jelas dan tanpa basa-basi.

### 5.7 Footer — Easter Egg Dino Run
```
┌───────────────────────────────────────────┐
│  © 2026 Nama — dibuat dengan kopi ☕        │
│                                             │
│  [ Koneksi ke rekruter terputus? ]         │
│  [ Sambil nunggu, main dulu ↓ ]            │
│                                             │
│  ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂ │
│   🦖            { }        404      { }    │  ← rintangan berbentuk kode
└─────────────────────────────────────────────┘
```
Detail:
- Dino berupa siluet piksel-art warna `--ink`/`--accent` (bukan abu-abu default Chrome), garis tanah putus-putus.
- Rintangan bukan kaktus, tapi ikon kecil `{ }`, `404`, `bug` — konsisten dengan tema developer.
- Kontrol: spasi/tap untuk lompat, skor tersimpan sementara di halaman (tidak perlu backend).
- Game hanya render/berjalan ketika section ini masuk viewport (lazy), supaya tidak membebani performa saat load awal.
- Ini elemen paling "berani" di halaman — sisanya sengaja dibuat tenang agar dino ini yang paling diingat pengunjung.

## 6. Mode Terang & Gelap

- Toggle berupa ikon matahari/bulan kecil di navbar, transisi warna 200ms ease pada `background-color`, `color`, `border-color` (bukan transisi semua properti agar tidak lag).
- Preferensi disimpan di memori sesi/`localStorage` browser pengunjung (bukan di storage server), default mengikuti `prefers-color-scheme` sistem saat kunjungan pertama.
- Aksen biru sedikit dinaikkan brightness-nya di mode gelap (`#4C82FF` vs `#1447E6`) agar kontrasnya tetap nyaman di atas latar gelap, tanpa berubah "identitas" birunya.

## 7. Dwibahasa (ID/EN)

- Toggle teks sederhana `ID | EN` di navbar, bukan ikon bendera (bendera sering keliru mewakili bahasa vs negara).
- Semua string UI dan copy disimpan sebagai key-value per bahasa; setiap perubahan bahasa hanya mengganti teks, tidak reload halaman.
- Elemen mono (label section, tag skill/proyek seperti nama teknologi) **tidak diterjemahkan** — nama teknologi dan label seperti `NAV.01` universal di kedua bahasa.
- Preferensi bahasa disimpan bersamaan dengan preferensi tema di storage yang sama.

## 8. Motion & Interaksi

Prinsip: satu momen besar yang diorkestrasi (loading screen) + micro-interaction halus di sisanya. Hindari animasi scroll-reveal di setiap elemen karena akan terasa "AI-generated default".

- Loading screen: sekali di awal kunjungan saja (skip animasi jika halaman dibuka lagi dalam sesi yang sama).
- Hero: typing effect nama, satu kali.
- Hover kartu proyek: scale 1.02 + border color, 150ms.
- Scroll section: fade-up halus hanya untuk judul section (bukan tiap paragraf/kartu satu per satu).
- `prefers-reduced-motion`: matikan typing effect, transisi wipe loading, dan animasi dino (ganti dengan tampilan statis langsung).

## 9. Komponen

| Komponen | Gaya |
|---|---|
| Tombol primer | Latar `--accent`, teks `--accent-ink`, radius 6px, tanpa shadow |
| Tombol sekunder | Transparan, border 1px `--border`, teks `--ink` |
| Kartu | Latar `--bg-soft`, border 1px `--border`, radius 8px |
| Tag/label | Font mono, border 1px, padding kecil, radius penuh (pill) |
| Input form | Border bawah 1px saja (bukan kotak penuh), fokus jadi `--accent` |
| Link | Underline muncul saat hover, warna `--accent` |

## 10. Aksesibilitas & Responsif

- Kontras teks-latar minimum WCAG AA di kedua mode (sudah dicek: `#0B0F14` di atas `#FFFFFF` dan `#F5F7FA` di atas `#0B0F14` jauh di atas 4.5:1).
- Fokus keyboard terlihat jelas: outline 2px `--accent` dengan offset, termasuk pada game dino (tombol lompat harus bisa dipicu keyboard, bukan hanya tap).
- Breakpoint: desktop (≥1024px, 2 kolom di section yang relevan), tablet (640–1023px), mobile (<640px, semua section 1 kolom, navbar jadi menu hamburger, game dino tetap tampil namun ukuran disesuaikan lebar layar).
- Semua gambar proyek punya alt text deskriptif; ikon sosial di kontak diberi label aria.

## 11. Ringkasan Signature

**Satu hal yang membuat halaman ini diingat:** footer dino-run bertema developer (rintangan `{ }`/`404`/bug, bukan kaktus) yang muncul setelah section Kontak — humor self-aware seorang developer tentang "koneksi terputus", dieksekusi dengan palet biru/hitam/putih yang sama persis dengan sisa halaman, bukan warna terpisah.