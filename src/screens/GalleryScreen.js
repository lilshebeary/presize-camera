import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, useWindowDimensions  } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';

const GalleryScreen = ({ navigation }) => {

	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				{/* navbar */}
				<View style={styles.navigationStyle}>
					{/* friends */}
					<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
						<SimpleLineIcons name="people" size={32} color="white" />
					</TouchableOpacity>
					{/* files */}
					<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
						<AntDesign name="folderopen" size={32} color="white" />
					</TouchableOpacity>
					{/* print */}
					<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
						<AntDesign name="printer" size={32} color="white" />
					</TouchableOpacity>
					{/* space */}
					<View />
					<View />
					<View />
					{/* flash */}
					<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
						<FontAwesome name="flash" size={32} color="white" />
					</TouchableOpacity>
					{/* HDR */}
					<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
						<MaterialIcons name="hdr-off" size={32} color="white" />
					</TouchableOpacity>
					{/* camera angle */}
				
						


					<View />
					<View />
				</View>

				{/* camera actions */}
			

					<View />
					<View />
				
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: 'white'
		// alignItems: 'center',
	},
	container: {
		flexDirection: 'column',
		flex: 1
	},
	navigationStyle: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 80,
		backgroundColor: '#212121'
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
		justifyContent: 'space-between'
	},
	sizeStyle: {
		flex: 1,
		flexDirection: 'row',
		color: 'white',
		// justifyContent: 'space-between',
		marginLeft: 40,
		marginTop: 15
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
	imageWindowStyle: {
		marginHorizontal: 20
	},
	pictureStyle: {
		height: 50,
		width: 50,
		marginBottom: 10,
		marginLeft: 10
	}
});

export default GalleryScreen;


