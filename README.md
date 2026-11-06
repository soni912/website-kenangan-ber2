# OUR LITTLE MEMORIES — Cerita Kita Berdua

Website album kenangan satu halaman (long-scrolling), dibuat dengan HTML, CSS, dan JavaScript murni. Tidak ada dashboard admin. Pengunjung hanya dapat melihat konten, memutar musik/video, mengganti tema, membuka surat, dan melihat foto. **Penambahan/penghapusan foto, video, timeline, surat, dan tautan sosial dilakukan langsung melalui kode sumber.**

## 1. Cara menjalankan website

1. Ekstrak folder `our-little-memories`.
2. Buka folder tersebut di VS Code.
3. Disarankan memasang ekstensi **Live Server**.
4. Klik kanan `index.html` → **Open with Live Server**.
5. Website juga dapat dibuka langsung dengan `index.html`, tetapi Live Server lebih konsisten untuk pengembangan.

## 2. Mengganti foto pasangan

- Simpan foto utama di `assets/images/couple-cover.jpg`.
- Gunakan nama file tersebut, atau ubah atribut `src` pada gambar utama di `index.html`.
- Gunakan foto yang cukup lebar/portrait dengan pencahayaan baik.

## 3. Menambahkan foto kenangan

- Masukkan file foto ke `assets/images/`.
- Buka `js/gallery.js`, lalu tambahkan objek baru pada array `galleryPhotos`:

```js
{src:"assets/images/foto-baru.jpg",title:"Judul Foto",date:"12 Nov 2026",caption:"Cerita singkat foto."}
```

- Foto otomatis muncul di grid dan lightbox.
- Untuk mengubah foto pada timeline, edit array `timelineMemories` di `js/timeline.js`.
- Galeri awal disiapkan dengan 20 slot nama file `memory-01.jpg` sampai `memory-20.jpg`. Ganti file sesuai nama tersebut atau sesuaikan `src` pada array.

## 4. Menambahkan video

- Letakkan video MP4 milik sendiri di `assets/videos/`.
- Buka array `videoMemories` di `js/gallery.js`, lalu tambahkan:

```js
{src:"assets/videos/video-baru.mp4",title:"Judul Video",description:"Deskripsi video."}
```

- Video ditampilkan dengan kontrol pemutar bawaan browser.
- Hapus video dari website dengan menghapus objek terkait dari array `videoMemories` (bukan melalui halaman website).

## 5. Mengganti musik

- Letakkan file MP3 yang boleh digunakan di `assets/music/our-song.mp3`.
- Jika nama file berbeda, ubah `src` elemen `<audio id="backgroundMusic">` di bagian bawah `index.html`.
- Pengunjung harus menekan tombol **Play music** untuk memulai. Musik tidak autoplay agar sesuai kebijakan browser dan tidak mengganggu pengunjung.

## 6. Mengubah warna website

- Buka `css/style.css`.
- Ubah variabel `--pink`, `--blue`, `--yellow`, `--white`, `--ink`, dan `--paper` di bagian `:root`.
- Tema gelap memiliki variabel terpisah pada selector `[data-theme="dark"]`.

## 7. Mengubah tanggal awal hubungan dan ulang tahun

- Buka `js/main.js`, bagian `coupleSettings`.YYYY-MM-DD
- Ubah `relationshipStart` dengan format ``.
- Ubah nama dan ulang tahun pasangan pada `partnerOne` dan `partnerTwo`, dengan format `MM-DD`.
- Banner ulang tahun muncul otomatis ketika tanggal perangkat pengunjung sama dengan salah satu tanggal ulang tahun.

## 8. Menambahkan timeline

- Buka `js/timeline.js`.
- Tambahkan objek pada array `timelineMemories` dengan properti `date`, `title`, `description`, dan `image`.
- Pastikan file foto tersedia di `assets/images/`.

## 9. Mengubah tulisan dan cerita

- Cerita pembuka dan bagian sosial: edit teks langsung di `index.html`.
- Cerita timeline: edit `timelineMemories` pada `js/timeline.js`.
- Judul/keterangan foto, video, dan isi surat: edit array `galleryPhotos`, `videoMemories`, dan `loveLetters` pada `js/gallery.js`.
- Ganti URL akun Instagram/TikTok dan nama akun pada kartu sosial di `index.html`.

## 10. Fungsi setiap file

| File                 | Fungsi                                                        |
| -------------------- | ------------------------------------------------------------- |
| `index.html`         | Struktur semantic dan semua section website                   |
| `css/style.css`      | Warna, tipografi, komponen, layout utama                      |
| `css/responsive.css` | Penyesuaian ukuran HP, tablet, laptop                         |
| `css/animation.css`  | Animasi floating dan scroll reveal                            |
| `js/main.js`         | Counter hubungan, ulang tahun, navigasi, tema, interaksi umum |
| `js/gallery.js`      | Data foto, lightbox, video, dan surat digital                 |
| `js/timeline.js`     | Data dan render timeline                                      |
| `js/music.js`        | Kontrol pemutar musik                                         |
| `js/storage.js`      | Penyimpanan preferensi tema/musik di LocalStorage             |
| `assets/images/`     | Foto utama, foto galeri, dan timeline                         |
| `assets/videos/`     | File video MP4                                                |
| `assets/music/`      | File musik MP3                                                |
| `assets/icons/`      | Folder untuk ikon tambahan                                    |

## Catatan penting

- Konten contoh (nama, tanggal, cerita, tautan sosial) perlu diganti dengan data kalian.
- Slot foto/video awal adalah referensi nama file; tambahkan file foto/video sendiri agar semua media tampil.
- Gunakan foto, video, dan musik yang kalian miliki atau punya izin untuk digunakan.
- LocalStorage menyimpan preferensi tema dan status musik di perangkat pengunjung; konten album tetap bersumber dari kode.
- Tidak ada tombol tambah/hapus media di halaman website.
