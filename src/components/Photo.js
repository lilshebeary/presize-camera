import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Photo = ({ uri, placeholder }) => {
  // console.error(uri)
  return (
    <View style={styles.container}>
      {placeholder ? (
        <View style={styles.placeholderStyle}></View>
      ) : (
        <Image style={styles.photoStyle} source={{ uri }} />
      )}
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
    margin: 10,
    borderRadius: 5,
  },
  placeholderStyle: {
    width: 120,
    height: 120,
    backgroundColor: "transparent",
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
