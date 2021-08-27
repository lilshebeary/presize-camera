import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { Camera } from 'expo-camera';
// import { RNCamera } from 'react-native-camera';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
      <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
{/* navbar */}
        <View style={styles.navigationStyle}>
{/* friends */}
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Home")}>
              <SimpleLineIcons name="people" size={32} color="white" />
          </TouchableOpacity>
{/* files */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Home")}>
            <AntDesign name="folderopen" size={32} color="white" />
          </TouchableOpacity>
{/* print */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Home")}>
          <AntDesign name="printer" size={32} color="white" />
          </TouchableOpacity>
{/* space */}
          <View></View>
          <View></View>
          <View></View>
{/* flash */}
          <TouchableOpacity
             style={styles.button}
             onPress={() => navigation.navigate("Home")}>
            <FontAwesome name="flash" size={32} color="white" />
          </TouchableOpacity>
{/* HDR */}
          <TouchableOpacity
             style={styles.button}
             onPress={() => navigation.navigate("Home")}>
               <MaterialIcons name="hdr-off" size={32} color="white" />
          </TouchableOpacity>
{/* camera angle */}
        <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
              <Ionicons  name="camera-reverse-outline" size={35} color="white" />
            
          </TouchableOpacity>
        </View>
      <Camera 
        style={styles.camera} 
        type={type}>
        
      </Camera>
    
    {/* <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          captureAudio={false}
          style={Platform.OS === "ios" ? createPostStyle.previewIOS : createPostStyle.previewAndroid}
          type={RNCamera.Constants.Type.back}
          flashMode={this.state.flash}
          ratio={'2:3'}
          androidCameraPermissionOptions={{
            title: string.alert.CameraPermissionTitle,
            message: string.alert.CameraPermissionNote,
            buttonPositive: string.alert.buttonOk,
            buttonNegative: string.alert.buttonDontAllow,
          }}
        /> */}

{/* camera size */}
        <View style={styles.buttonContainer1}>
            <TouchableOpacity
              style={styles.sizeStyle}
            >
                <Text style={styles.sizeStyle}>SQUARE</Text> 
                <Text style={styles.sizeStyle}>4x6</Text> 
                <Text style={styles.sizeStyle}>5x7</Text> 
                <Text style={styles.sizeStyle}>8x10</Text> 
            </TouchableOpacity>

            {/* <View></View> */}

            <View></View>
            <View></View>
        </View>
{/* camera actions */}
        <View style={styles.buttonContainer2}>
            <TouchableOpacity style={styles.pictureStyle}>
              <AntDesign name="picture" size={50} color="white" />  
            </TouchableOpacity>

            {/* <View></View> */}
  
            <TouchableOpacity style={styles.shootStyle}>
            <Entypo name="circle" size={50} color="black"  style={{padding: 5}} />
            </TouchableOpacity>

            <View></View>
            <View></View>
        </View>
      
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ 
    safeArea: {
		flex: 1,
		backgroundColor: 'white',
		// alignItems: 'center',
	  },
    container: {
        flexDirection: 'column',
        flex: 1,
        
      },
      navigationStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 80,
        backgroundColor: '#212121',
      },
      camera: {
        height: 560,
        backgroundColor: '#212121',
        borderColor: 'white',
        borderWidth: 1
      },
      buttonContainer1: {
        flex: 1,
        backgroundColor: '#212121',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        
      },
      sizeStyle: {
        flex: 1,
        flexDirection: 'row',
        color: 'white',
        justifyContent: 'space-between',
        marginLeft: 20
      },
      buttonContainer2: {
        flex: 1,
        backgroundColor: '#212121',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
       
      },
      shootStyle: {
        height: 60,
        width: 60,
        backgroundColor: 'white',
        borderRadius: 50,
        borderColor: 'black',
        marginBottom: 15
      },
      pictureStyle: {
        marginHorizontal: 20
      }

}); 

export default CameraScreen;