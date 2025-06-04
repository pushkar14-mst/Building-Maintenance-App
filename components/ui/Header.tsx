import Entypo from "@expo/vector-icons/Entypo";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Image
          source={require("../../assets/images/tomms-logo.png")}
          style={styles.logo}
        />
      </View>
      <TouchableOpacity style={styles.supportButton}>
        <Entypo name="chat" size={24} color="#F44336" />
        <Text style={styles.supportText}>Support</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 8,
    backgroundColor: "#fff",
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 60,
    marginRight: 8,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#F44336",
    letterSpacing: 1,
  },
  supportButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  supportText: {
    color: "#F44336",
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 4,
  },
});
