# LaporCepat — Jawaban & Catatan Modifikasi

## 1. Custom Function & Loop
**Q: Di mana custom function dideklarasikan, dan untuk apa?**
Di folder `functions/`: `getNamaKategori()`, `getEmojiKategori()`, `getStatus()`, dan `hitungPerStatus()`.
Karena data laporan hanya menyimpan **id** (`idKategori`, `idStatus`), function ini yang "menerjemahkan" id menjadi nama/emoji/warna.

**Q: Loop apa saja yang dipakai?**
- `map()` → `app/index.tsx` (daftar `ReportCard`), `BottomNav.tsx`, `RingkasanStatus.tsx` — menghasilkan banyak component dari array.
- `for...of` (bersarang) → `functions/ringkasan.ts` — menghitung jumlah laporan per status.
- `find()` → `functions/kategori.ts` & `status.ts` — mencari 1 data berdasarkan id.

## 2. Type & Array of Objects
**Q: Apa itu `type` dan kenapa dipakai?**
`type` menentukan bentuk (field + tipe data) sebuah object, mis. `Laporan` di `types/laporan.ts`. Kalau ada field salah/kurang, TypeScript langsung error sebelum aplikasi jalan.

**Q: Mana array of objects-nya?**
`laporans: Laporan[]`, `kategoris: Kategori[]`, `statuses: Status[]`, `navigasis: Navigasi[]` di folder `constants/`.

## 3. Inline & External Styles
**Q: Apa bedanya, dan di mana dipakai?**
- **External**: dibuat sekali di `styles/laporan.ts` dengan `StyleSheet.create`, dipakai ulang → untuk tampilan yang tetap (padding, radius, font).
- **Inline**: ditulis langsung di prop `style={{ ... }}` → untuk nilai yang berubah saat runtime: `flexDirection`/`width` (responsif) dan `backgroundColor`/`color` badge (dari data status).
- Keduanya digabung dengan array: `style={[laporanStyles.statusBadge, { backgroundColor: status.warnaBg }]}`.

## 4. Modifikasi Kode (yang dikerjakan)
Dari project LaporCepat awal (JavaScript, 1 file layar besar + state + form) dimodifikasi menjadi:
1. JavaScript → **TypeScript** (`.tsx` / `.ts`).
2. `App.js` → **Expo Router** (`app/index.tsx`).
3. Data `{ judul, lokasi, status, emoji }` → **id relasional** (`idKategori`, `idStatus`) + tabel `kategoris` & `statuses`.
4. Style `StyleSheet` per file → **satu file external** `styles/laporan.ts`.
5. Layar & komponen dipecah: `Header`, `HeroCard`, `RingkasanStatus`, `ReportCard`, `BottomNav`.
6. Form "Buat Laporan" & state dihapus → **hanya tampilan depan**.
7. Fitur baru: kotak **ringkasan jumlah per status** (memakai custom function + loop).

### Cara menambah data (latihan modifikasi)
- Laporan baru → tambah 1 object di `constants/laporan.ts`, mis. `{ idLaporan: 4, judul: "Tumpukan Sampah", lokasi: "Pasar Lama", idKategori: 4, idStatus: 1 }`.
- Status baru ("Selesai") → tambah di `constants/status.ts` dengan `idStatus: 4`; kotak ringkasan otomatis ikut bertambah.
