import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, SafeAreaView, Image, useWindowDimensions } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';

const PhotoEditScreen = () => {
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
		<View style={styles.viewStyle}>
			<Image source={lastImage} style={styles.imageStyle} />
		</View>
	);
};

const styles = StyleSheet.create({
	viewStyle: {
		flex: 1,
		backgroundColor: 'green',
		justifyContent: 'center'
	},
	imageStyle: {
		height: 500,
		width: '100%'
	}
});

export default PhotoEditScreen;
