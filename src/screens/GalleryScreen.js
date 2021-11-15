import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, useWindowDimensions } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';
import Gallery from '../components/gallery';

const GalleryScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				<View style={styles.topStyle}>
				<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Photo')}>
					<Ionicons name="chevron-back-outline" size={45} color="#189BF3" style={styles.backIcon} />
				</TouchableOpacity>
					<Text style={styles.titleStyle}>All Photos</Text>
					<View />
					<View />
				</View>
{/* Sizes */}
				<View style={styles.sizeButtons}>
					<TouchableOpacity style={styles.size1}>
						<Text style={styles.text1}>ALL</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.size2}>
						<Text style={styles.text1}>1:1</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.size2}>
						<Text style={styles.text1}>4:6</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.size2}>
						<Text style={styles.text1}>5:7</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.size3}>
						<Text style={styles.text1}>8:10</Text>
					</TouchableOpacity>
				</View>
{/* Gallery */}
				<View style={styles.galleryGrid}>
					<Gallery />
					<Gallery />
					<Gallery />
				
					
				</View>
{/* Navigation */}
				<View style={styles.navigationStyle}>
					<TouchableOpacity style={styles.printStyle} onPress={() => navigation.navigate('Camera')}>
						<Text style={styles.text1}>8:10</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.albumStyle}>
						<Text style={styles.text1}>8:10</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.camera}>
						<Text style={styles.text1}>8:10</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.friends}>
						<Text style={styles.text1}>8:10</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.settings}>
						<Text style={styles.text1}>8:10</Text>
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
	topStyle: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	backIcon: {
		marginLeft:10,
		marginTop: 10,
		marginBottom: 0,

	},
	titleStyle: {
		justifyContent: 'center',
		marginTop: 10,
		marginBottom: 10,
		fontSize: 40,
		fontWeight: 'bold'
	},
	sizeButtons: {
		flexDirection: 'row',
		justifyContent: 'center'
	},
	size1: {
		height: 50,
		width: 70,
		backgroundColor: '#c4c4c4',
		borderBottomLeftRadius: 20,
		borderTopLeftRadius: 20,
		justifyContent: 'center',
		marginRight: 3
	},
	text1: {
		alignSelf: 'center',
		fontSize: 20
	},
	size2: {
		height: 50,
		width: 70,
		backgroundColor: '#c4c4c4',
		justifyContent: 'center',
		marginRight: 3
	},
	text2: {
		alignSelf: 'center',
		fontSize: 20
	},
	size3: {
		height: 50,
		width: 70,
		backgroundColor: '#c4c4c4',
		justifyContent: 'center',
		marginRight: 3,
		borderTopRightRadius: 20,
		borderBottomRightRadius: 20
	},
	text3: {
		alignSelf: 'center',
		fontSize: 20
	},
	galleryGrid: {
		flexDirection: 'row',
		flex: 6,
		flexGrow: 6,
		flexWrap: 'wrap'
	},
	navigationStyle: {
		flex: 1,
		flexDirection:'row',
		
	}
});

export default GalleryScreen;
