import { users } from "@/constants/data";
import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const user = users.find((u) => u.id === "user1");

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={user?.avatar} style={styles.avatar} />
      <Text style={styles.name}>{user?.name}</Text>
      <Text style={styles.subtext}>User Account</Text>

      <View style={styles.optionsContainer}>
        {["Personal Details", "Payment Info", "Documents", "Support"].map(
          (item) => (
            <TouchableOpacity key={item} style={styles.optionCard}>
              <Text style={styles.optionText}>{item}</Text>
            </TouchableOpacity>
          )
        )}
      </View>

      <TouchableOpacity style={styles.signoutBtn}>
        <Text style={styles.signoutText}>Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
  },
  subtext: {
    color: "#666",
    marginBottom: 20,
  },
  optionsContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  optionCard: {
    padding: 14,
    backgroundColor: "#f8f8f8",
    marginBottom: 10,
    borderRadius: 8,
  },
  optionText: {
    fontSize: 16,
  },
  signoutBtn: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#F44336",
    borderRadius: 6,
  },
  signoutText: {
    color: "#fff",
    fontWeight: "600",
  },
});
