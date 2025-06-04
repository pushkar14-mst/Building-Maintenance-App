import { services } from "@/constants/data";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

export const ServicesTabs: React.FC = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.tabContainer}
      testID="services-tabs"
      accessibilityLabel="Services Tabs"
      accessibilityRole="tablist"
      accessibilityState={{ selected: false }}
      accessibilityHint="Select a service category to view available services."
    >
      {services.map((service) => (
        <TouchableOpacity key={service.name} style={styles.tab}>
          <Image source={service.icon} style={styles.tabIcon} />
          <Text style={styles.tabText}>{service.name}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.tab}>
        <Text style={styles.tabText}>More</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  tabContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    gap: 8,
  },
  tab: {
    width: 80,
    height: 80,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#F44336",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  tabText: {
    fontSize: 12,
    color: "#fff",
    textAlign: "center",
    marginTop: 5,
    fontWeight: "700",
  },
  tabIcon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    tintColor: "#fff",
  },
});
