import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  useWindowDimensions,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import {
  PESDK,
  PhotoEditorModal,
  Configuration,
} from "react-native-photoeditorsdk";
import { removePhoto } from "../store/gallerySlice";
import { useSelector, useDispatch } from "react-redux";
import { setLastImage } from "../store/cameraSlice";

const PhotoEditScreen = ({ navigation, route }) => {
  const { lastImage } = useSelector((state) => state.camera);
  const { photos } = useSelector((state) => state.gallery);
  const [imageWidth, setImageWidth] = useState();
  const [imageHeight, setImageHeight] = useState();
  const window = useWindowDimensions();
  const dispatch = useDispatch();

  // sets image size
  useEffect(() => {
    const imageId = route?.params?.imageId;

    if (imageId) {
      dispatch(setLastImage(photos[imageId]));
    }
    if (lastImage && lastImage.width && lastImage.height) {
      const ratio = lastImage.width / lastImage.height;
      setImageHeight((window.width * 1) / ratio);
    }
  }, [lastImage]);

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* navbar */}
      <View style={styles.navigationStyle}>
        {/* friends */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Friend")}
        >
          <SimpleLineIcons name="people" size={28} color="white" />
        </TouchableOpacity>
        {/* files */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Gallery")}
        >
          <SimpleLineIcons name="picture" size={28} color="white" />
        </TouchableOpacity>
        {/* print */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("PrintShop")}
        >
          <AntDesign name="printer" size={28} color="white" />
        </TouchableOpacity>

        {/* space */}

        <View />
        <View />
        {/* flash */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Folder")}
        >
          <Ionicons name="ios-add-sharp" size={28} color="white" />
        </TouchableOpacity>

        {/* HDR */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Friends")}
        >
          <Ionicons name="paper-plane-outline" size={28} color="white" />
        </TouchableOpacity>

        {/* camera angle */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Camera")}
        >
          <Ionicons name="ios-camera-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* date */}
      <View style={styles.dateContainer}>
        <Text style={styles.dateStyle}>Date</Text>
      </View>
      <View style={styles.container}>
        {/* image */}
        <View style={styles.imageContainer}>
          <Image
            source={lastImage}
            style={{ ...styles.imageStyle, ...{ height: imageHeight } }}
          />
        </View>
      </View>

      {/* actions */}
      <View style={styles.buttonContainer1}>
        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={() => {
              PESDK.openEditor(lastImage);
            }}
          >
            <Text style={styles.editStyle}>Edit</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <MaterialIcons
              name="favorite-border"
              size={30}
              color="white"
              fontWeight="200"
            />
          </TouchableOpacity>
          <View />
          <View />
          <View />
          <View />
          <TouchableOpacity
            onPress={() => {
              dispatch(removePhoto(lastImage.id));
              navigation.goBack();
            }}
          >
            <FontAwesome name="trash-o" size={30} color="white" />
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
  navigationStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
    backgroundColor: "#111",
  },
  dateContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  dateStyle: {
    color: "white",
    fontSize: 12,
    backgroundColor: "#000",
    marginTop: 15,
    fontWeight: "300",
  },
  imageContainer: {
    backgroundColor: "#000",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  imageStyle: {
    // flex: 1,
    width: "100%",
  },
  buttonContainer1: {
    height: 100,
    backgroundColor: "#111",
    // flexDirection: 'row',
    // alignItems: 'space-between',
    // justifyContent: 'center',
  },

  buttonContainer2: {
    flex: 1,
    backgroundColor: "#212121",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  editStyle: {
    color: "white",
    fontSize: 16,
    fontWeight: "300",
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignContent: "center",
    marginHorizontal: 10,
    marginTop: 30,
  },
});

export default PhotoEditScreen;
