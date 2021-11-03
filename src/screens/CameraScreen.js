import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, useWindowDimensions } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import  shootButton from '../../assets/shootButton.png'
import * as SecureStore from 'expo-secure-store';
import { useGallery } from '../hooks/gallery/local';

const CameraScreen = ({ navigation }) => {
	const { photos, addPhoto, replacePhoto, removePhoto } = useGallery();
	const [ hasPermission, setHasPermission ] = useState(null);
	const [ lastImage, setLastImage ] = useState(null);
	const [ type, setType ] = useState(Camera.Constants.Type.back);
	const [ ratio, setRatio ] = useState([ 1, 1 ]);
	const [ cameraHeight, setCameraHeight ] = useState();

	const { width, height } = useWindowDimensions();

	// portrait x = width
	useEffect(() => {
		const [ x, y ] = ratio;
		setCameraHeight(width * y / x);
	});

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
					<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
						<SimpleLineIcons name="people" size={30} color="white" />
					</TouchableOpacity>
					{/* files */}
					<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
						<AntDesign name="folderopen" size={30} color="white" />
					</TouchableOpacity>
					{/* print */}
					<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
						<AntDesign name="printer" size={30} color="white" />
					</TouchableOpacity>
					{/* space */}
					<View />
					<View />
					<View />
					{/* flash */}
					<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
						<FontAwesome name="flash" size={30} color="white" />
					</TouchableOpacity>
					{/* HDR */}
					<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
						<MaterialIcons name="hdr-off" size={30} color="white" />
					</TouchableOpacity>
					{/* camera angle */}
					
				</View>
				{/* camera */}
				<Camera
					style={{ ...styles.camera, height: cameraHeight }}
					type={type}
					ref={(ref) => {
						this.camera = ref;
					}}
				/>

				{/* camera size need to crop photos and establish image view size */}
				<View style={styles.buttonContainer1}>
					<TouchableOpacity onPress={() => setRatio([ 1, 1 ])}>
						<Text style={styles.sizeStyle}>[ 1:1 ]</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => setRatio([ 2, 3 ])}>
						<Text style={styles.sizeStyle}>[ 4:6 ]</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => setRatio([ 5, 7 ])}>
						<Text style={styles.sizeStyle}>[ 5:7 ]</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => setRatio([ 4, 5 ])}>
						<Text style={styles.sizeStyle}>[ 8:10 ]</Text>
					</TouchableOpacity>

					{/* <View></View> */}

					<View />
					<View />
				</View>

				{/* camera actions */}
				<View style={styles.buttonContainer2}>
					<TouchableOpacity style={styles.imageWindowStyle} onPress={() => navigation.navigate('Photo')}>
						<Image style={styles.pictureStyle} source={lastImage} />
					</TouchableOpacity>

					{/* <View></View> */}
					{/* take picture and store */}
					<TouchableOpacity
						style={styles.shootStyle}
						onPress={async () => {
							if (this.camera) {
								let photo = await this.camera.takePictureAsync();
								setLastImage(photo);
								await SecureStore.setItemAsync('lastImage', JSON.stringify(photo));
								addPhoto(photo);
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
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: '#111'
		// alignItems: 'center',
	},
	container: {
		flexDirection: 'column',
		flex: 1
	},
	navigationStyle: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 80,
		backgroundColor: '#111'
	},

	camera: {
		height: 560,
		backgroundColor: '#111',
		borderColor: 'grey',
		borderWidth: 1
	},
	buttonContainer1: {
		flex: 1,
		backgroundColor: '#111',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	sizeStyle: {
		flex: 1,
		flexDirection: 'row',
		color: 'white',
		fontSize: 20,
		marginLeft: 40,
		marginTop: 15
	},

	buttonContainer2: {
		flex: 1,
		backgroundColor: '#111',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	shootStyle: {
		
	},
	shootButton: {
		height: 80,
		width: 80
	},
	pictureStyle: {
		height: 80,
		width: 80,
		marginBottom: 10,
		marginLeft: 20
	},
	flipStyle: {
		width: 80,
		marginLeft: 20
	
	},
});

export default CameraScreen;
