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
			<View>
				<Text style={styles.titleStyle}>All Photos</Text>
			</View>	

			<View style={styles.sizeButtons}>
				<TouchableOpacity>
					<Text>ALL</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text>1:1</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text>4:6</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text>5:7</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text>8:10</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.galleryGrid}>

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
	titleStyle: {
		alignSelf: 'center',
		marginTop: 50,
		fontSize: 45
	},
	sizeButtons: {
		flexDirection: 'row',
		justifyContent: 'center'
	},
	navigationStyle: {
		
	},

	
});

export default GalleryScreen;


