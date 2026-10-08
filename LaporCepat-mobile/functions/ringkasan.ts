import { statuses } from "@/constants";
import type { Laporan, Ringkasan } from "@/types";

export function hitungPerStatus(daftar: Laporan[]): Ringkasan[] {
    const hasil: Ringkasan[] = [];

    for (const status of statuses) { // [1]
        let jumlah = 0;

        for (const laporan of daftar) { // [2]
            if (laporan.idStatus === status.idStatus) {
                jumlah++;
            }
        }

        hasil.push({ idStatus: status.idStatus, jumlah }); // [3]
    }

    return hasil;
}

/* ======================== EXPLANATION ========================
[1]: Loop luar: mengulang setiap status (Dilaporkan, Diverifikasi, Dikerjakan).
[2]: Loop dalam: untuk status tsb, kita cek satu-satu laporan dan hitung berapa yg cocok.
[3]: Hasil tiap status dimasukkan ke array of objects bertipe Ringkasan.
=================================================================*/
