/* =================== TABLE OF CONTENT ================= 
1.1: Import Section
1.2: Default Function
    2.1: Main Render
        3.1: Judul Aplikasi
        3.2: Tombol Cari
========================================================= */

// 1.1: Import Section
import { laporanStyles } from "@/styles";
import { Pressable, Text, View } from "react-native";

// 1.2: Default Function
export default function Header() {
    // 2.1: Main Render
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
