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

export default function WorkOrdersScreen() {
  const [filter, setFilter] = useState<
    "All" | "Pending" | "In Progress" | "Completed"
  >("All");

  const filteredOrders =
    filter === "All"
      ? workOrders
      : workOrders.filter((w) => w.status === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "#FFE082"; // light yellow
      case "In Progress":
        return "#81D4FA"; // light blue
      case "Completed":
        return "#C8E6C9"; // light green
      case "Rejected":
        return "#FFCDD2"; // light red
      default:
        return "#E0E0E0"; // gray fallback
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Work Orders</Text>
      <View style={styles.filterContainer}>
        {["All", "Pending", "In Progress", "Completed"].map((status) => (
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

            <View style={styles.metaBox}>
              <Text style={styles.metaText}>
                {item.date} • {item.time}
              </Text>
              <Text style={styles.metaText}>
                Assigned to: {item.assignedTo}
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
    gap: 4,
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
  metaBox: {
    marginVertical: 10,
    backgroundColor: "#fce4ec",
    borderRadius: 8,
    padding: 10,
  },
  metaText: {
    fontSize: 13,
    color: "#c2185b",
    fontWeight: "500",
  },
});
