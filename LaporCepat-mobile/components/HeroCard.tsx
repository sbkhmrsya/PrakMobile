/* =================== TABLE OF CONTENT ================= 
1.1: Import Section
1.2: Props Declaration
1.3: Default Function
    2.1: Main Render
        3.1: Visual (emoji)
        3.2: Judul & Deskripsi
        3.3: Tombol Buat Laporan
========================================================= */

// 1.1: Import Section
import { laporanStyles } from "@/styles";
import { Pressable, Text, View } from "react-native";

// 1.2: Props Declaration
type Props = { isLayarLebar: boolean }; // [1]

// 1.3: Default Function
export default function HeroCard({ isLayarLebar }: Props) {
    // 2.1: Main Render
    return (
    // Inline style: arah layout berubah sesuai lebar layar [2]
    <View style={[laporanStyles.heroCard, { flexDirection: isLayarLebar ? "row" : "column" }]}>

        {/* 3.1: Visual (emoji) */}
        <View style={[laporanStyles.heroImageWrap, { width: isLayarLebar ? "40%" : "100%" }]}>
            <Text style={laporanStyles.heroEmoji}>🚧📍🔧</Text>
        </View>

        <View style={laporanStyles.heroTextWrap}>
            {/* 3.2: Judul & Deskripsi */}
            <Text style={laporanStyles.heroTitle}>Lapor Kerusakan, Pantau Perbaikan</Text>
            <Text style={laporanStyles.heroSubtitle}>
                Laporkan fasilitas umum yang rusak di lingkunganmu — cepat, transparan, dan mudah dipantau.
            </Text>

            {/* 3.3: Tombol Buat Laporan */}
            <Pressable
                style={laporanStyles.primaryButton}
                accessible={true}
                accessibilityLabel="Buat laporan baru"
                accessibilityRole="button"
                accessibilityHint="Membuka form untuk melaporkan kerusakan fasilitas umum"
            >
                <Text style={laporanStyles.primaryButtonText}>+ Buat Laporan</Text>
            </Pressable>
        </View>
    </View>
    );
}

/* ======================== EXPLANATION ========================
[1]: const props: Props = { isLayarLebar: true / false }
[2]: Style bisa digabung dengan array [styleExternal, { styleInline }]. External style = tampilan tetap (styles/laporan.ts),
inline style = nilai yang berubah tergantung kondisi (lebar layar).
=================================================================*/
