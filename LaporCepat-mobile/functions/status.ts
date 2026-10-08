import { statuses } from "@/constants";
import type { Status } from "@/types";

// Status default kalau id tidak ditemukan
const statusDefault: Status = {
    idStatus: 0,
    namaStatus: "Tidak diketahui",
    warnaBg: "#F1F5F9",
    warnaText: "#475569",
};

export function getStatus(idStatus: number): Status {
    const status = statuses.find(
        (item) => item.idStatus === idStatus
    ); // [1]

    return status ?? statusDefault; // [2]
}

/* ======================== EXPLANATION ========================
[1]: Berbeda dgn getKategori yang hanya mengembalikan 1 string, getStatus mengembalikan 1 OBJECT utuh (nama + warna)
supaya component bisa memakai namaStatus, warnaBg, dan warnaText sekaligus.
[2]: Kalau find() tidak menemukan apa-apa hasilnya undefined, maka kita pakai statusDefault.
=================================================================*/
