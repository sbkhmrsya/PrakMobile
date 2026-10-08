/* =================== TABLE OF CONTENT ================= 
1.1: Import Section
1.2: Props Declaration
1.3: Default Function
    2.1: Hitung Ringkasan
    2.2: Main Render
        3.1: Map Ringkasan
========================================================= */

// 1.1: Import Section
import { getStatus, hitungPerStatus } from "@/functions";
import { laporanStyles } from "@/styles";
import type { Laporan } from "@/types";
import { Text, View } from "react-native";

// 1.2: Props Declaration
type Props = { laporans: Laporan[] }; // [1]

// 1.3: Default Function
export default function RingkasanStatus({ laporans }: Props) {
    // 2.1: Hitung Ringkasan
    const ringkasan = hitungPerStatus(laporans); // [2]

    // 2.2: Main Render
    return (
    <View style={laporanStyles.ringkasanRow}>
        {/* 3.1: Map Ringkasan */}
        {ringkasan.map((item) => {
            const status = getStatus(item.idStatus);
            return (
                <View
                    key={item.idStatus}
                    style={[laporanStyles.ringkasanBox, { backgroundColor: status.warnaBg }]} // [3]
                    accessible={true}
                    accessibilityLabel={`${item.jumlah} laporan berstatus ${status.namaStatus}`}
                >
                    <Text style={[laporanStyles.ringkasanAngka, { color: status.warnaText }]}>{item.jumlah}</Text>
                    <Text style={[laporanStyles.ringkasanLabel, { color: status.warnaText }]}>{status.namaStatus}</Text>
                </View>
            );
        })}
    </View>
    );
}

/* ======================== EXPLANATION ========================
[1]: Props berisi array of Laporan (bukan 1 data saja)
[2]: Memanggil custom function hitungPerStatus() dari @/functions yang memakai loop for...of
[3]: Warna kotak diambil dari data status, jadi harus inline style (nilainya beda tiap kotak)
=================================================================*/
