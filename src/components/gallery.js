import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const Gallery = () => {
	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				<View style={styles.photoStyle}>

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
    }
});

export default Gallery;
