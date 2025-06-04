import { workOrders } from "@/constants/data";
import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HistoryScreen() {
  const [filter, setFilter] = useState<"Completed" | "Rejected">("Completed");

  const filteredOrders = workOrders.filter((wo) => wo.status === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "#C8E6C9";
      case "Rejected":
        return "#FFCDD2";
      default:
        return "#ccc";
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>History</Text>
      <View style={styles.filterContainer}>
        {["Completed", "Rejected"].map((status) => (
          <TouchableOpacity
            key={status}
            onPress={() => setFilter(status as any)}
          >
            <Text
              style={[
                styles.filterButton,
                filter === status && styles.activeFilter,
              ]}
            >
              {status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredOrders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>

            <View style={styles.tagRow}>
              <View style={[styles.tag, { backgroundColor: "#90CAF9" }]}>
                <Text style={styles.tagText}>{item.type}</Text>
              </View>
              <Text style={{ color: "#555" }}> • </Text>
              <View
                style={[
                  styles.tag,
                  { backgroundColor: getStatusColor(item.status) },
                ]}
              >
                <Text style={[styles.tagText, { color: "#333" }]}>
                  {item.status}
                </Text>
              </View>
            </View>

            <View style={styles.metaCard}>
              <Text style={styles.cardMeta}>
                {item.date} • {item.time} • Assigned to: {item.assignedTo}
              </Text>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <Text style={{ textAlign: "center", marginTop: 30, color: "#999" }}>
            No {filter} requests found.
          </Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  filterContainer: {
    maxWidth: "55%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  filterButton: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: "#eee",
    fontWeight: "500",
    color: "#333",
  },
  activeFilter: {
    backgroundColor: "#F44336",
    color: "#fff",
  },
  card: {
    backgroundColor: "#f9f9f9",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
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
  metaCard: {
    marginVertical: 8,
    backgroundColor: "#fce4ec",
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
  },
  cardMeta: {
    fontSize: 14,
    color: "#c2185b",
    fontWeight: "500",
  },
});
