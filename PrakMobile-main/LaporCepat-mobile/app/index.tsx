import { BottomNav, Header, HeroCard, ReportCard, RingkasanStatus } from "@/components";
import { laporans } from "@/constants";
import { laporanStyles } from "@/styles";
import { ScrollView, Text, useWindowDimensions, View } from "react-native";

export default function Index() {

  const { width } = useWindowDimensions();
  const isLayarLebar = width >= 600; // [1]

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

