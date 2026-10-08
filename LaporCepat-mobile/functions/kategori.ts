import { kategoris } from "@/constants";

export function getNamaKategori(idKategori: number): string {
    const kategori = kategoris.find(
        (item) => item.idKategori === idKategori
    ); // [1]

    return kategori?.namaKategori ?? "Tidak ditemukan"; // [2]
}

export function getEmojiKategori(idKategori: number): string {
    const kategori = kategoris.find(
        (item) => item.idKategori === idKategori
    );

    return kategori?.emoji ?? "❓";
}

/* ======================== EXPLANATION ========================
[1]: Ini kita mengambil data kategori berdasarkan id dengan find()
[2]: object?.prop adalah optional chaining. Artinya: Ambil props dari object, tetapi hanya jika object tidak null atau undefined.
Sementara ?? artinya kembalikan opsi dikanan jika object.prop tidak ada, jika ada ambil yang dikiri.
=================================================================*/
