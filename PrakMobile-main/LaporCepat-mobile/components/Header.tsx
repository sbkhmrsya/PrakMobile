import { laporanStyles } from "@/styles";
import { Pressable, Text, View } from "react-native";

export default function Header() {
    return (
    <View style={laporanStyles.header} accessible={true} accessibilityRole="header">
        {/* 3.1: Judul Aplikasi */}
        <Text style={laporanStyles.headerTitle}>LaporCepat</Text>

        {/* 3.2: Tombol Cari */}
        <Pressable
            style={laporanStyles.iconButton}
            accessible={true}
            accessibilityLabel="Cari laporan"
            accessibilityRole="button"
            accessibilityHint="Membuka pencarian laporan"
        >
            <Text style={laporanStyles.iconText}>🔍</Text>
        </Pressable>
    </View>
    );
}
