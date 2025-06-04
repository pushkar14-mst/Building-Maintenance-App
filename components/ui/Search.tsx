import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function Search() {
  const [query, setQuery] = useState("");

  return (
    <View style={styles.container}>
      <Entypo
        name="magnifying-glass"
        size={24}
        color="#29404B"
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        placeholder="Search services"
        placeholderTextColor="#29404B"
        value={query}
        onChangeText={setQuery}
        autoCorrect={false}
        autoCapitalize="none"
        clearButtonMode="while-editing"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  icon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 20,
    color: "#29404B",
    fontWeight: "400",
    paddingVertical: 0,
  },
});
