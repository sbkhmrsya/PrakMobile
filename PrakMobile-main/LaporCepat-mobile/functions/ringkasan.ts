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

