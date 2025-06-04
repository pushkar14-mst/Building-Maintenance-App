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
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 4,
                marginTop: 4,
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <View
                style={{
                  backgroundColor: "#90D5FF",
                  padding: 4,
                  borderRadius: 4,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={styles.cardSub}> {item.type}</Text>
              </View>{" "}
              •{" "}
              <View
                style={{
                  backgroundColor: "#77B1D4",
                  padding: 4,
                  borderRadius: 4,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={styles.cardSub}> {item.status}</Text>
              </View>{" "}
            </View>
            <View
              style={{
                marginVertical: 8,
                backgroundColor: "#fce4ec",
                borderRadius: 8,
                padding: 12,
                marginBottom: 20,
              }}
            >
              <Text style={styles.cardSub2}>
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

  cardSub: {
    fontSize: 13,
    color: "#fff",
    fontWeight: "600",
  },
  cardSub2: {
    fontSize: 14,
    color: "#c2185b",
    fontWeight: "500",
  },
});
