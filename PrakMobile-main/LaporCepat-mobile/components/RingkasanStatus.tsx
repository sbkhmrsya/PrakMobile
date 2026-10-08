import { getStatus, hitungPerStatus } from "@/functions";
import { laporanStyles } from "@/styles";
import type { Laporan } from "@/types";
import { Text, View } from "react-native";

type Props = { laporans: Laporan[] }; // [1]

export default function RingkasanStatus({ laporans }: Props) {
    const ringkasan = hitungPerStatus(laporans); // [2]

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

