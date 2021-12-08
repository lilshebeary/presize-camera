import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
// import * as SecureStore from 'expo-secure-store';

const Photo = ({ uri }) => {
  // console.error(uri)
  return (
    <View style={styles.container}>
      {/* <View style={styles.photoStyle}> */}
        <Image style={styles.photoStyle} source={{uri}} />
      {/* </View> */}
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
  photoStyle: {
    width: 120,
    height: 120,
    backgroundColor: "green",
    margin: 10,
    borderRadius: 5,
  },
  imageContainer: {
    backgroundColor: "#000",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
});

export default Photo;
