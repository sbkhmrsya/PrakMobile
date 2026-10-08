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

