import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import * as SecureStore from 'expo-secure-store';

const Gallery = () => {
	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				<View style={styles.photoStyle}>
				<View style={styles.container}>
				{/* image */}
				<View style={styles.imageContainer}>
					<Image source={lastImage} style={{ ...styles.imageStyle, ...{ height: imageHeight } }} />
				</View>
			</View>

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
    photoStyle: {
        width: 120,
        height: 120,
        backgroundColor: 'green',
        margin: 10,
        borderRadius: 5
    },
	imageContainer: {
		backgroundColor: '#000',
		justifyContent: 'center',
		height: '100%',
		width: '100%'
	},
});

export default Gallery;
