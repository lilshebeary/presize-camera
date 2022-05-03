import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import Gallery from "../components/gallery";
import { addPhoto } from "../store/gallerySlice";
import BottomNavbar from "../components/BottomNavbar";

const filter = require('lodash.filter');

const GalleryScreen = ({ navigation }) => {
  let { photos } = useSelector((state) => state.gallery);
  let sortPhotos = filter(photos, {ratio: [1,1]})

  const filterPhotos = (ratio) => {
    sortPhotos = filter(photos, {ratio})
    console.log(sortPhotos)
  }
    // clearPhotos();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.topStyle}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Photo")}>
            <Ionicons name="chevron-back-outline" size={45} color="#189BF3" style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.titleStyle} allowFontScaling={false}>
            All Photos
          </Text>
          <View />
          <View />
        </View>
        {/* Sizes */}
        <View style={styles.sizeButtons}>
          <TouchableOpacity style={styles.size1} onPress={() => { sortPhotos = filter(photos) }}>
            <Text style={styles.text1} allowFontScaling={false}>
              ALL
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.size2} onPress={() => filterPhotos([1,1]) }>
            <Text style={styles.text1} allowFontScaling={false}>
              1:1
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.size2} onPress={() => filterPhotos([2,3])}>
            <Text style={styles.text1} allowFontScaling={false}>
              4:6
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.size2} onPress={() => filterPhotos([5,7])}>
            <Text style={styles.text1} allowFontScaling={false}>
              5:7
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.size3} onPress={() => filterPhotos([4,5])}>
            <Text style={styles.text1} allowFontScaling={false}>
              8:10
            </Text>
          </TouchableOpacity>
        </View>
        {/* Gallery */}
        <View style={styles.galleryStyle}>
          <Gallery photos={sortPhotos} navigation={navigation} />
        </View>

        {/* bottom screen */}

        {/* Navigation */}
        <BottomNavbar navigation={navigation} />
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
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  sizeButtons: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  size1: {
    height: 40,
    width: 60,
    backgroundColor: "#c4c4c4",
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    justifyContent: "center",
    marginRight: 5,
    marginLeft: 5,
  },
  text1: {
    alignSelf: "center",
    fontSize: 14,
  },
  size2: {
    height: 40,
    width: 60,
    backgroundColor: "#c4c4c4",
    justifyContent: "center",
    marginRight: 5,
  },

  size3: {
    height: 40,
    width: 60,
    backgroundColor: "#c4c4c4",
    justifyContent: "center",
    marginRight: 5,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  galleryStyle: {
    flex: 6,
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

export default GalleryScreen;
