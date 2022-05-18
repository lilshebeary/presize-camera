import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Friend from "../components/friend";
import BottomNavbar from "../components/BottomNavbar";
import RootNavigation from "../RootNavigation";

const FriendScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.topStyle}>
          {/* <TouchableOpacity style={styles.button} onPress={() => RootNavigation.navigate('Friend')}>
					<Ionicons name="chevron-back-outline" size={45} color="#189BF3" style={styles.backIcon} />
				</TouchableOpacity> */}
          <Text style={styles.titleStyle}>Friends</Text>
          <TouchableOpacity style={styles.button} onPress={() => RootNavigation.navigate("EditUser")}>
            <Ionicons name="settings-outline" size={30} color="black" style={styles.settingsStyle} />
          </TouchableOpacity>
          <View />
          <View />
        </View>
        {/* Sizes */}

        {/* Gallery */}
        <View style={styles.friendGrid}>
          <Friend />
          <Friend />
          <Friend />
        </View>

        {/* Navigation */}
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
  settingsStyle: {
    marginLeft: 210,
    marginTop: 15,
    marginBottom: 0,
    marginRight: 10,
  },
  titleStyle: {
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 30,
    marginBottom: 40,
    fontSize: 22,
    fontWeight: "bold",
  },

  friendGrid: {
    flex: 6,
    flexGrow: 6,
    flexWrap: "wrap",
    marginLeft: 10,
  },
  navigationStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
    marginHorizontal: 15,
  },
});

export default FriendScreen;
