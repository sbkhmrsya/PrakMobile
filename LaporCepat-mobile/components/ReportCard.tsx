/* =================== TABLE OF CONTENT ================= 
1.1: Import Section
1.2: Props Declaration
1.3: Default Function
    2.1: Ambil Data Status
    2.2: Main Render
        3.1: Emoji Kategori
        3.2: Judul Laporan
        3.3: Lokasi Laporan
        3.4: Badge Status
========================================================= */

// 1.1: Import Section
import { getEmojiKategori, getNamaKategori, getStatus } from "@/functions";
import { laporanStyles } from "@/styles";
import type { Laporan } from "@/types";
import { Pressable, Text, View } from "react-native";

// 1.2: Props Declaration
type Props = { laporan: Laporan; isLayarLebar: boolean };

// 1.3: Default Function
export default function ReportCard({ laporan, isLayarLebar }: Props) {
    // 2.1: Ambil Data Status
    const status = getStatus(laporan.idStatus); // [1]

    // 2.2: Main Render
    return (
    <Pressable
        style={[laporanStyles.reportCard, { width: isLayarLebar ? "31%" : "100%" }]}
        accessible={true}
        accessibilityLabel={`Laporan ${getNamaKategori(laporan.idKategori)}: ${laporan.judul}, lokasi ${laporan.lokasi}, status ${status.namaStatus}`}
        accessibilityRole="button"
        accessibilityHint="Membuka detail laporan"
    >
        {/* 3.1: Emoji Kategori */}
        <View style={laporanStyles.emojiWrap}>
            <Text style={laporanStyles.emoji}>{getEmojiKategori(laporan.idKategori)}</Text>
        </View>

        {/* 3.2: Judul Laporan */}
        <Text style={laporanStyles.reportTitle}>{laporan.judul}</Text>

        {/* 3.3: Lokasi Laporan */}
        <Text style={laporanStyles.reportLocation}>{laporan.lokasi}</Text>

        {/* 3.4: Badge Status */}
        <View style={[laporanStyles.statusBadge, { backgroundColor: status.warnaBg }]}>
            <Text style={[laporanStyles.statusText, { color: status.warnaText }]}>{status.namaStatus}</Text>
        </View>
    </Pressable>
    );
}

/* ======================== EXPLANATION ========================
[1]: Di constants/laporan.ts hanya ada idStatus & idKategori, jadi nama, emoji, dan warna dicari lewat custom function di @/functions.
=================================================================*/
