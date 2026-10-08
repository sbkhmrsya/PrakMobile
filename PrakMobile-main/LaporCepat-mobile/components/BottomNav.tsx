import { navigasis } from "@/constants";
import { laporanStyles } from "@/styles";
import { Pressable, Text, View } from "react-native";

export default function BottomNav() {
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
