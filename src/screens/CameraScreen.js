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
import { Camera } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import shootButton from "../../assets/shootButton.png";
import * as SecureStore from "expo-secure-store";
import { useDispatch, useSelector } from "react-redux";
import { addPhoto } from "../store/gallerySlice";
import { setLastImage } from "../store/cameraSlice";
import RootNavigation from "../RootNavigation";

const CameraScreen = () => {
  const { photos } = useSelector((state) => state.gallery);
  const dispatch = useDispatch();
  const [hasPermission, setHasPermission] = useState(null);
  const { lastImage } = useSelector((state) => state.camera);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [ratio, setRatio] = useState([1, 1]);
  const [cameraHeight, setCameraHeight] = useState();
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);

  const { width, height } = useWindowDimensions();

  // portrait x = width
  useEffect(() => {
    const [x, y] = ratio;
    setCameraHeight((width * y) / x);
  });
  // permissions to access camera
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
      // Orientation.OrientationLock(Orientation.OrientationLock.PORTRAIT);
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  
const toggleFlash = () => {
  setFlash(
    flash === Camera.Constants.FlashMode.off
    ? Camera.Constants.FlashMode.on
    : Camera.Constants.FlashMode.off
  );
};

  // render camera
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* top navigation */}
      <View style={styles.container}>
        {/* navbar */}
        <View style={styles.navigationStyle}>
          {/* friends */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => RootNavigation.navigate("Home")}
          >
            <SimpleLineIcons name="home" size={25} color="white" />
          </TouchableOpacity>

          {/* space */}
          <View />
          <View />
          <View />
    {/* flash */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => toggleFlash()}
          >
            {/* name={flash === Camera.Constants.FlashMode.on ? "flash-on" : "flash-off"} */}
            <MaterialIcons name={flash === Camera.Constants.FlashMode.on ? "flash-on" : "flash-off"} size={25} color="white" />
          </TouchableOpacity>
          {/* HDR */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => RootNavigation.navigate("Home")}
          >
            <MaterialIcons name="hdr-off" size={25} color="white" />
          </TouchableOpacity>
          {/* camera angle */}
        </View>

        {/* camera */}
        {/* <View style={styles.cameraContainer}> */}
        <Camera
          flashMode={flash}
          style={{ ...styles.camera, height: cameraHeight }}
          type={type}
          ref={(ref) => {
            this.camera = ref;
          }}
        />
        {/* </View> */}

        {/* camera size need to crop photos and establish image view size */}
        {/* <View style={styles.b2c2}> */}

        <View style={styles.buttonContainer1}>
          <TouchableOpacity onPress={() => setRatio([1, 1])}>
            <View style={styles.boxStyle}>
              <View style={styles.oneOneStyle} />
              <Text style={styles.sizeStyle} allowFontScaling={false}>
                {" "}
                1:1{" "}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setRatio([2, 3])}>
            <View style={styles.boxStyle}>
              <View style={styles.fourSixStyle} />
              <Text style={styles.sizeStyle} allowFontScaling={false}>
                {" "}
                4:6{" "}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setRatio([5, 7])}>
            <View style={styles.boxStyle}>
              <View style={styles.fiveSevenStyle} />
              <Text style={styles.sizeStyle} allowFontScaling={false}>
                {" "}
                5:7{" "}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setRatio([4, 5])}>
            <View style={styles.boxStyle}>
              <View style={styles.eightTenStyle} />
              <Text style={styles.sizeStyle} allowFontScaling={false}>
                {" "}
                8:10{" "}
              </Text>
            </View>
          </TouchableOpacity>
          {/* <View></View> */}

          <View />
        </View>

        {/* camera actions */}
        {/* <View style={styles.b2c2}> */}
        <View style={styles.buttonContainer2}>
          <TouchableOpacity
            style={styles.imageWindowStyle}
            onPress={() => RootNavigation.navigate("Photo")}
          >
            <Image style={styles.pictureStyle} source={lastImage} />
          </TouchableOpacity>

          {/* take picture and store */}
          <TouchableOpacity
            style={styles.shootStyle}
            onPress={async () => {
              if (this.camera) {
                let photo = await this.camera.takePictureAsync();
                photo.ratio = ratio;
                dispatch(setLastImage(photo));
                dispatch(addPhoto(photo));
              }
            }}
          >
            <Image source={shootButton} style={styles.shootButton} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.flipStyle}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Ionicons name="camera-reverse-outline" size={40} color="white" />
          </TouchableOpacity>
        </View>
        {/* </View> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0c0c0c",
    // alignItems: 'center',
  },
  container: {
    flexDirection: "column",
    flex: 1,
  },
  navigationStyle: {
    flexDirection: "row",
    flex: 0.5,
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
    backgroundColor: "#0c0c0c",
    marginBottom: 0,
    marginHorizontal: 15,
  },
  cameraContainer: {
    flex: 6,
    marginBottom: 10,
    marginTop: 0,
  },
  camera: {
    // flex: 6,
    backgroundColor: "#000",
    borderColor: "grey",
    borderWidth: 0,
    marginVertical: 10,
  },
  buttonContainer1: {
    flex: 1,
    backgroundColor: "#0c0c0c",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sizeStyle: {
    // flex: 1,
    flexDirection: "row",
    color: "white",
    fontSize: 20,
    fontWeight: "300",
    marginLeft: 40,
    marginTop: 10,
  },

  oneOneStyle: {
    flexDirection: "column",
    alignSelf: "center",
    height: 20,
    width: 20,
    borderColor: "grey",
    borderStyle: "solid",
    borderWidth: 1,
    marginLeft: 40,
  },
  fourSixStyle: {
    flexDirection: "column",
    alignSelf: "center",
    height: 20,
    width: 30,
    borderColor: "grey",
    borderStyle: "solid",
    borderWidth: 1,
    marginLeft: 35,
  },
  fiveSevenStyle: {
    flexDirection: "column",
    alignSelf: "center",
    height: 20,
    width: 28,
    borderColor: "grey",
    borderStyle: "solid",
    borderWidth: 1,
    marginLeft: 35,
  },
  eightTenStyle: {
    flexDirection: "column",
    alignSelf: "center",
    height: 25,
    width: 20,
    borderColor: "grey",
    borderStyle: "solid",
    borderWidth: 1,
    marginLeft: 35,
  },
  b2c2: {
    // flex:1
    flexDirection: "column",
    height: 68,
    backgroundColor: "red",
  },
  buttonContainer2: {
    height: 68,
    backgroundColor: "#0c0c0c",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5,
  },

  shootButton: {
    flex: 0,
    height: 65,
    width: 65,
    marginLeft: 0,
  },
  pictureStyle: {
    flex: 0,
    height: 50,
    width: 50,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
  },
  flipStyle: {
    width: 80,
  },
});

export default CameraScreen;
