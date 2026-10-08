import { getEmojiKategori, getNamaKategori, getStatus } from "@/functions";
import { laporanStyles } from "@/styles";
import type { Laporan } from "@/types";
import { Pressable, Text, View } from "react-native";

type Props = { laporan: Laporan; isLayarLebar: boolean };

export default function ReportCard({ laporan, isLayarLebar }: Props) {
    const status = getStatus(laporan.idStatus); // [1]

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

