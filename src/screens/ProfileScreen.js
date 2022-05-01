import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BottomNavbar from "../components/BottomNavbar";
import RootNavigation from "../RootNavigation";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.topStyle}>
          <TouchableOpacity onPress={() => RootNavigation.navigate("Friend")}>
            <Ionicons name="chevron-back-outline" size={45} color="#189BF3" style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.titleStyle}>Edit Profile</Text>
          <View />
          <View />
        </View>
        <View style={styles.photoContainer}></View>
        <BottomNavbar />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: 'center',
  },
  container: {
    flexDirection: "column",
    flex: 1,
  },
  topStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backIcon: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 0,
  },
  titleStyle: {
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 40,
    fontSize: 22,
    fontWeight: "bold",
  },
  photoContainer: {},
});

export default ProfileScreen;
