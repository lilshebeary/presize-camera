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
import logo2 from '../../assets/logo.png';
import RootNavigation from "../RootNavigation";

const HomeScreen = () => {

  return (
    <>
      <SafeAreaView style={styles.safeAreaTop} />
      <SafeAreaView style={styles.safeAreaBottom}>
        <StatusBar barStyle="light-content" backgroundColor="#189BF3" />
        {/* navigation to camera screen from logo */}
        <TouchableOpacity
          style={styles.touchableStyle}
          onPress={() => RootNavigation.navigate("Camera")}
        >
          <View style={styles.ViewStyle}>
            <Image source={logo2} style={styles.logo} />
            <Text style={styles.nameApp} allowFontScaling={false}>Presize Camera</Text>
          </View>
        </TouchableOpacity>
        {/* account buttons */}
        <View style={styles.accountStyle}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => RootNavigation.navigate("Login")}
          >
            <Text style={styles.TextStyle} allowFontScaling={false} >Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => RootNavigation.navigate("Create")}
            
          >
            <Text style={styles.TextStyle} allowFontScaling={false}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  logo2: {
    flex: 0,
    color: "white",
    width: 120,
    height: 100,
    marginBottom: 25,
    marginTop: 55,
  },
  nameApp: {
		color: 'white',
		fontSize: 26, 
		fontWeight: '700',
		marginBottom: 20,
    marginTop: 20
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
    height: 45,
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
    fontSize: 18,
  },
});

export default HomeScreen;
