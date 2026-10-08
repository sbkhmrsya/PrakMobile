/* =================== TABLE OF CONTENT ================= 
1.1: Import Section
1.2: Default Function
  2.1: Cek Lebar Layar
  2.2: Main Render
    3.1: Header
    3.2: Hero
    3.3: Ringkasan Status
    3.4: Map Laporan Data
    3.5: Bottom Navigation
========================================================= */

// 1.1: Import Section
import { BottomNav, Header, HeroCard, ReportCard, RingkasanStatus } from "@/components";
import { laporans } from "@/constants";
import { laporanStyles } from "@/styles";
import { ScrollView, Text, useWindowDimensions, View } from "react-native";

// 1.2: Default Function
export default function Index() {

  // 2.1: Cek Lebar Layar
  const { width } = useWindowDimensions();
  const isLayarLebar = width >= 600; // [1]

  // 2.2: Main Render
  return (
  <View style={laporanStyles.container}>

    {/* 3.1: Header */}
    <Header />

    <ScrollView contentContainerStyle={laporanStyles.scrollContent}>

      {/* 3.2: Hero */}
      <HeroCard isLayarLebar={isLayarLebar} />

      {/* 3.3: Ringkasan Status */}
      <RingkasanStatus laporans={laporans} />

      {/* 3.4: Map Laporan Data */}
      <Text style={laporanStyles.sectionTitle}>Laporan Prioritas</Text>
      <View style={[laporanStyles.cardList, { flexDirection: isLayarLebar ? "row" : "column" }]}>
        {laporans.map(
          (laporan) => ( <ReportCard key={laporan.idLaporan} laporan={laporan} isLayarLebar={isLayarLebar} /> ) // [2]
        )}
      </View>

    </ScrollView>

    {/* 3.5: Bottom Navigation */}
    <BottomNav />

  </View>
  );
}

/* ======================== EXPLANATION ========================
[1]: useWindowDimensions() memberi lebar layar saat ini. Kalau >= 600 (tablet/web) tampilan jadi baris (row), kalau tidak jadi kolom.
[2]: Kita mengambil semua data laporan dan menampilkannya satu-satu dengan map() menggunakan component ReportCard
yg sudah kita buat sebelumnya di @/components
=================================================================*/
