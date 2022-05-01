import React from "react";
import { AntDesign, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import RootNavigation from "../RootNavigation";

const BottomNavbar = () => {
  return (
    <View style={styles.navigationStyle}>
      {/* friends */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => RootNavigation.navigate("Friend")}
      >
        <SimpleLineIcons name="people" size={28} color="black" />
      </TouchableOpacity>
      {/* files */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => RootNavigation.navigate("Gallery")}
      >
        <SimpleLineIcons name="picture" size={28} color="black" />
      </TouchableOpacity>
      {/* print */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => RootNavigation.navigate("Snapfish")}
      >
        <AntDesign name="printer" size={28} color="black" />
      </TouchableOpacity>

      {/* space */}

      <View />
      <TouchableOpacity
        style={styles.button}
        onPress={() => RootNavigation.navigate("Home")}
      >
        <AntDesign name="home" size={28} color="black" />
      </TouchableOpacity>
      <View />
      {/* flash */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => RootNavigation.navigate("FriendSearch")}
      >
        <Ionicons name="ios-add-sharp" size={28} color="black" />
      </TouchableOpacity>

      {/* HDR */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => RootNavigation.navigate("Profile")}
      >
        <Ionicons name="person" size={28} color="black" />
      </TouchableOpacity>

      {/* camera angle */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => RootNavigation.navigate("Camera")}
      >
        <Ionicons name="ios-camera-outline" size={34} color="black" />
      </TouchableOpacity>
    </View>
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
  button: {},
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

export default BottomNavbar;
