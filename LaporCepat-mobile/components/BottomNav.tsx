/* =================== TABLE OF CONTENT ================= 
1.1: Import Section
1.2: Default Function
    2.1: Main Render
        3.1: Map Menu Navigasi
========================================================= */

// 1.1: Import Section
import { navigasis } from "@/constants";
import { laporanStyles } from "@/styles";
import { Pressable, Text, View } from "react-native";

// 1.2: Default Function
export default function BottomNav() {
    // 2.1: Main Render
    return (
    <View style={laporanStyles.bottomNav}>
        {/* 3.1: Map Menu Navigasi */}
        {navigasis.map((nav) => (
            <Pressable
                key={nav.idNavigasi}
                style={laporanStyles.navItem}
                accessible={true}
                accessibilityLabel={nav.label}
                accessibilityRole="button"
                accessibilityHint={`Pindah ke halaman ${nav.label}`}
            >
                <Text style={laporanStyles.navIcon}>{nav.icon}</Text>
                <Text style={[laporanStyles.navLabel, nav.aktif && laporanStyles.navLabelActive]}>{nav.label}</Text>
            </Pressable>
        ))}
    </View>
    );
}
