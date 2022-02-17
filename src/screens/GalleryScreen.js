import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  useWindowDimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import Gallery from "../components/gallery";
import { addPhoto } from "../store/gallerySlice";

const GalleryScreen = ({ navigation }) => {
  const { photos } = useSelector((state) => state.gallery);
  //   clearPhotos();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.topStyle}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Photo")}
          >
            <Ionicons
              name="chevron-back-outline"
              size={45}
              color="#189BF3"
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.titleStyle}>All Photos</Text>
          <View />
          <View />
        </View>
        {/* Sizes */}
        <View style={styles.sizeButtons}>
          <TouchableOpacity style={styles.size1}>
            <Text style={styles.text1}>ALL</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.size2}>
            <Text style={styles.text1}>1:1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.size2}>
            <Text style={styles.text1}>4:6</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.size2}>
            <Text style={styles.text1}>5:7</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.size3}>
            <Text style={styles.text1}>8:10</Text>
          </TouchableOpacity>
        </View>
        {/* Gallery */}
        <View style={styles.galleryStyle}>
          <Gallery photos={photos} />
        </View>


        {/* bottom screen */}

        
        {/* Navigation */}
        <View style={styles.navigationStyle}>
          {/* friends */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Home")}
          >
            <SimpleLineIcons name="people" size={28} color="black" />
          </TouchableOpacity>
          {/* files */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Gallery")}
          >
            <SimpleLineIcons name="picture" size={28} color="black" />
          </TouchableOpacity>
          {/* print */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Snapfish")}
          >
            <AntDesign name="printer" size={28} color="black" />
          </TouchableOpacity>

          {/* space */}

          <View />
          <View />
          {/* flash */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Folder")}
          >
            <Ionicons name="ios-add-sharp" size={28} color="black" />
          </TouchableOpacity>

          {/* HDR */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Friends")}
          >
            <Ionicons name="paper-plane-outline" size={28} color="black" />
          </TouchableOpacity>

          {/* camera angle */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Camera")}
          >
            <Ionicons name="ios-camera-outline" size={30} color="black" />
          </TouchableOpacity>
        </View>
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
    fontSize: 12,
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
