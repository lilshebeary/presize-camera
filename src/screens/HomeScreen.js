import React from "react";
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  StatusBar,
} from "react-native";
import logo from "../../assets/logo7.png";

const HomeScreen = ({ navigation }) => {
  // constructor(props) {
  // 	super(props);
  // 	this.state = {
  // 	  width: Dimensions.get('window').width
  // 	};
  return (
    // <SafeAreaView style={styles.safeArea}>
    <>
      <SafeAreaView style={styles.safeAreaTop} />
      <SafeAreaView style={styles.safeAreaBottom}>
        <StatusBar barStyle="light-content" backgroundColor="#189BF3" />
        {/* navigation to camera screen from logo */}
        <TouchableOpacity
          style={styles.touchableStyle}
          onPress={() => navigation.navigate("Camera")}
        >
          <View style={styles.ViewStyle}>
            <Image source={logo} style={styles.logo} />
          </View>
        </TouchableOpacity>
        {/* account buttons */}
        <View style={styles.accountStyle}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.TextStyle}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate("Create")}
            // {this.state.width < 320 ? <Text>width of the past</Text> : <Text>how big is big enough?</Text>}
          >
            <Text style={styles.TextStyle}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  logo: {
    flex: 0,
    backgroundColor: "#189BF3",
    width: "64%",
    height: "31%",
    marginBottom: 25,
    marginTop: 55,
  },
  ViewStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#189BF3",
    width: "100%",
    height: "100%",
  },
  touchableStyle: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#189BF3",
    width: "100%",
    height: "65%",
  },

  safeAreaBottom: {
    flex: 1,
    backgroundColor: "#189BF3",
    alignItems: "center",
  },
  safeAreaTop: {
    flex: 0,
    backgroundColor: "#189BF3",
  },
  buttonStyle: {
    flex: 0,
    borderColor: "white",
    backgroundColor: "#189BF3",
    borderWidth: 1,
    aspectRatio: 22 / 3,
    height: 50,
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },

  accountStyle: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },

  TextStyle: {
    color: "#fff",
    fontSize: 25,
  },
});

export default HomeScreen;
