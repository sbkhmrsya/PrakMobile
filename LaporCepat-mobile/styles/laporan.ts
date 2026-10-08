import { StyleSheet } from "react-native";

export const laporanStyles = StyleSheet.create({
    // ===== Layar =====
    container: { flex: 1, backgroundColor: "#FFF8F1" },
    scrollContent: { padding: 16, paddingBottom: 32 },

    // ===== Header =====
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 16,
        backgroundColor: "#EA580C",
    },
    headerTitle: { fontSize: 22, fontWeight: "bold", color: "#FFFFFF", letterSpacing: 1 },
    iconButton: { minWidth: 44, minHeight: 44, alignItems: "center", justifyContent: "center" },
    iconText: { fontSize: 20 },

    // ===== Hero =====
    heroCard: {
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        overflow: "hidden",
        marginBottom: 24,
        elevation: 2,
    },
    heroImageWrap: {
        height: 160,
        backgroundColor: "#EA580C",
        alignItems: "center",
        justifyContent: "center",
    },
    heroEmoji: { fontSize: 44 },
    heroTextWrap: { flex: 1, padding: 18, justifyContent: "center" },
    heroTitle: { fontSize: 20, fontWeight: "700", color: "#1C1917", marginBottom: 8 },
    heroSubtitle: { fontSize: 14, color: "#78716C", lineHeight: 20, marginBottom: 16 },
    primaryButton: {
        backgroundColor: "#EA580C",
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 10,
        minHeight: 44,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-start",
    },
    primaryButtonText: { color: "#FFFFFF", fontWeight: "600", fontSize: 15 },

    // ===== Ringkasan =====
    ringkasanRow: { flexDirection: "row", gap: 8, marginBottom: 24 },
    ringkasanBox: { flex: 1, borderRadius: 14, padding: 12, alignItems: "center" },
    ringkasanAngka: { fontSize: 24, fontWeight: "bold" },
    ringkasanLabel: { fontSize: 12, fontWeight: "600", marginTop: 2 },

    // ===== Daftar laporan =====
    sectionTitle: { fontSize: 17, fontWeight: "700", color: "#1C1917", marginBottom: 12 },
    cardList: { flexWrap: "wrap", gap: 12 },
    reportCard: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 14,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#FDE0C7",
        minHeight: 44,
    },
    emojiWrap: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: "#FFF1E6",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
    },
    emoji: { fontSize: 22 },
    reportTitle: { fontSize: 15, fontWeight: "600", color: "#1C1917", marginBottom: 4 },
    reportLocation: { fontSize: 13, color: "#78716C", marginBottom: 8 },
    statusBadge: {
        alignSelf: "flex-start",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 20,
    },
    statusText: { fontSize: 12, fontWeight: "600" },

    // ===== Bottom navigation =====
    bottomNav: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 8,
        backgroundColor: "#FFFFFF",
        borderTopWidth: 1,
        borderTopColor: "#FDE0C7",
    },
    navItem: { minWidth: 44, minHeight: 44, alignItems: "center", justifyContent: "center" },
    navIcon: { fontSize: 20 },
    navLabel: { fontSize: 11, color: "#A8A29E", marginTop: 2 },
    navLabelActive: { color: "#EA580C", fontWeight: "700" },
});
