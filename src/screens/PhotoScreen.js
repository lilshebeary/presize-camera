import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, SafeAreaView, Image, useWindowDimensions, Text } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';

const PhotoEditScreen = ({ navigation }) => {
	const [ lastImage, setLastImage ] = useState(null);

	// const window = useWindowDimensions();

	useEffect(() => {
		SecureStore.getItemAsync('lastImage').then((image) => {
			if (image) {
				setLastImage(JSON.parse(image));
			}
		});
	});

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
						<Ionicons name="ios-add-sharp" size={32} color="white" />
					</TouchableOpacity>

					{/* HDR */}
					<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
						<Ionicons name="paper-plane-outline" size={32} color="white" />
					</TouchableOpacity>
					
					{/* camera angle */}
					<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Camera')}>
						<Ionicons name="ios-camera-outline" size={32} color="white" />
					</TouchableOpacity>
				</View>

				<View style={styles.dateContainer}>
					<Text style={styles.dateStyle}>Date</Text>
				</View>

				{/* image */}
				<View style={styles.imageContainer}>
					<Image source={lastImage} style={styles.imageStyle} />
				</View>
			</View>
			<View style={styles.buttonContainer1}>
				<View style={styles.buttons}>
					<TouchableOpacity onPress={() => navigation.navigate('Edit')}>
						<Text style={styles.editStyle}>Edit</Text>
					</TouchableOpacity>

					<TouchableOpacity>
						<MaterialIcons name="favorite-border" size={32} color="white" fontWeight="200" />
					</TouchableOpacity>
					<View />
					<View />
					<View />
					<View />
					<TouchableOpacity>
						<FontAwesome name="trash-o" size={32} color="white" />
					</TouchableOpacity>
				</View>
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
	dateContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		backgroundColor: '#212121'
	},
	dateStyle: {
		color: 'white',
		fontSize: 18,
		backgroundColor: '#212121'
	},
	imageContainer: {
		backgroundColor: 'black',
		height: '100%',
		width: '100%'
	},
	imageStyle: {
		flex: 1,

		width: '100%'
	},
	buttonContainer1: {
		height: 100,
		backgroundColor: '#212121'
		// flexDirection: 'row',
		// alignItems: 'space-between',
		// justifyContent: 'center',
	},

	buttonContainer2: {
		flex: 1,
		backgroundColor: '#212121',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	editStyle: {
		color: 'white',
		fontSize: 24,
		fontWeight: '300'
	},
	buttons: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		alignContent: 'center',
		marginHorizontal: 10,
		marginTop: 30
	}
});

export default PhotoEditScreen;
