import { Header } from "@/components/ui/Header";
import Search from "@/components/ui/Search";
import { ServicesTabs } from "@/components/ui/ServicesTabs";
import { buildings, users, workOrders } from "@/constants/data";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const openRequests = workOrders.filter(
    (workOrder) =>
      workOrder.status === "In Progress" || workOrder.status === "Pending"
  ).length;

  const pendingRequests = workOrders.filter(
    (workOrder) => workOrder.status === "Pending"
  ).length;

  const inProgressRequests =
    workOrders.filter((workOrder) => workOrder.status === "In Progress")
      .length || 0;

  const currentUser = users.find((u) => u.id === "user1");
  const userBuilding = buildings.find((b) => b.id === currentUser?.buildingId);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.homeContainer}>
        <Header />
        <Search />
        <ServicesTabs />

        {/* Overview Section */}
        <View style={styles.overviewContainer}>
          <Text style={styles.sectionTitle}>Facility Overview</Text>
          <View style={styles.overviewCardsContainer}>
            <View style={styles.overviewCard}>
              <Text style={styles.overviewCardText}>Total Requests</Text>
              <Text style={styles.overviewCardValue}>{openRequests}</Text>
            </View>
            <View style={styles.overviewCard}>
              <Text style={styles.overviewCardText}>Pending Requests</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.overviewCardValue}>{pendingRequests}</Text>
                <View style={styles.inProgressBadge}>
                  <Text style={styles.inProgressText}>
                    {inProgressRequests}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Building Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Building Information</Text>
          <View style={styles.card}>
            <Text style={styles.buildingName}>{userBuilding?.name}</Text>
            <Text style={styles.buildingLocation}>
              {userBuilding?.location}
            </Text>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Open Work Orders:</Text>
              <View style={[styles.tag, { backgroundColor: "#FFECB3" }]}>
                <Text style={styles.tagText}>
                  {userBuilding?.openWorkOrders}
                </Text>
              </View>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Completed Work Orders:</Text>
              <View style={[styles.tag, { backgroundColor: "#C8E6C9" }]}>
                <Text style={[styles.tagText, { color: "#2E7D32" }]}>
                  {userBuilding?.completedWorkOrders}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Recent Activity */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          {workOrders
            .filter((w) => w.requestedBy === "user1")
            .slice(0, 3)
            .map((order) => (
              <View key={order.id} style={styles.recentCard}>
                <Text style={styles.recentTitle}>{order.title}</Text>
                <View style={styles.tagRow}>
                  <View style={[styles.tag, { backgroundColor: "#90CAF9" }]}>
                    <Text style={styles.tagText}>{order.type}</Text>
                  </View>
                  <Text style={{ color: "#555" }}> • </Text>
                  <View
                    style={[
                      styles.tag,
                      {
                        backgroundColor:
                          order.status === "Pending"
                            ? "#FFE082"
                            : order.status === "In Progress"
                            ? "#81D4FA"
                            : order.status === "Completed"
                            ? "#C8E6C9"
                            : "#FFCDD2",
                      },
                    ]}
                  >
                    <Text style={[styles.tagText, { color: "#333" }]}>
                      {order.status}
                    </Text>
                  </View>
                </View>
                <Text style={styles.recentSubtitle}>{order.date}</Text>
              </View>
            ))}
        </View>

        {/* Support Section */}
        <View
          style={{ marginBottom: 40, paddingHorizontal: 10, paddingTop: 10 }}
        >
          <Text style={styles.sectionTitle}>Need Help?</Text>
          <View style={styles.supportCard}>
            <Text style={styles.supportText}>
              Raise a ticket or contact support for any assistance.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
  overviewContainer: {
    flexDirection: "column",
    padding: 10,
  },
  overviewCardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "space-between",
  },
  overviewCard: {
    width: "48%",
    padding: 10,
    backgroundColor: "#fffffd",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 10,
  },
  overviewCardText: {
    textAlign: "left",
    fontSize: 16,
    fontWeight: "bold",
  },
  overviewCardValue: {
    fontSize: 30,
    fontWeight: "700",
    marginTop: 5,
  },
  inProgressBadge: {
    width: 20,
    height: 20,
    borderRadius: 5,
    backgroundColor: "#F44336",
    marginLeft: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  inProgressText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  section: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  buildingName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  buildingLocation: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  label: {
    fontSize: 14,
    color: "#333",
  },
  value: {
    fontWeight: "600",
    fontSize: 14,
  },
  tagRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 6,
    alignItems: "center",
  },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  tagText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#fff",
  },
  recentCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  recentTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  recentSubtitle: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
  supportCard: {
    backgroundColor: "#fce4ec",
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
  },
  supportText: {
    fontSize: 14,
    color: "#c2185b",
    fontWeight: "500",
  },
});
