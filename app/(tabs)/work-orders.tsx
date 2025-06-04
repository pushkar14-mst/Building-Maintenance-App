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
            <Text style={styles.cardSub}>
              {item.type} • {item.status}
            </Text>
            <Text style={styles.cardSub}>
              {item.date} • {item.time} • Assigned to: {item.assignedTo}
            </Text>
          </View>
        )}
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
    paddingHorizontal: 12,
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
  cardSub: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },
});
