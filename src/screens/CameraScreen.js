import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

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
        <View style={styles.navigationStyle}>
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Home")}>
              <SimpleLineIcons name="people" size={32} color="white" />
            
          </TouchableOpacity>
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
      <Camera style={styles.camera} type={type}>
      </Camera>
        <View style={styles.buttonContainer}>
         
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
        // alignSelf: 'flex-start',
        backgroundColor: '#212121',
      },
      camera: {
        height: 560,
        backgroundColor: '#212121',
        borderColor: 'white',
        borderWidth: 1
      },
      buttonContainer: {
        flex: 1,
        backgroundColor: '#212121',
        flexDirection: 'row',
       
      },
      button: {
        // flex: 1,
        // // justifyContent: 'flex-end',
        // alignItems: 'center',
      },
      text: {
        fontSize: 18,
        color: 'white',
      },
}); 

export default CameraScreen;