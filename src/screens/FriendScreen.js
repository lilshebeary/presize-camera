import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';
import Friend from '../components/friend';

const FriendScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				<View style={styles.topStyle}>
				<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Photo')}>
					<Ionicons name="chevron-back-outline" size={45} color="#189BF3" style={styles.backIcon} />
				</TouchableOpacity>
					<Text allowFontScaling={false} style={styles.titleStyle}>Friends</Text>
					<View />
					<View />
				</View>
{/* Sizes */}
				
{/* Gallery */}
				<View style={styles.friendGrid}>
					<Friend />
					<Friend />
					<Friend />	
				</View>
				
{/* Navigation */}
				<View style={styles.navigationStyle}>
				
					{/* friends */}
					<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
					<SimpleLineIcons name="people" size={28} color="black" />
				</TouchableOpacity>
				{/* files */}
				<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Gallery')}>
				<SimpleLineIcons name="picture" size={28} color="black" />
				</TouchableOpacity>
				{/* print */}
				<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Snapfish')}>
					<AntDesign name="printer" size={28} color="black" />
				</TouchableOpacity>

				{/* space */}
				
				<View />
				<View />
				{/* flash */}
				<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Folder')}>
					<Ionicons name="ios-add-sharp" size={28} color="black" />
				</TouchableOpacity>

				{/* HDR */}
				<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Friends')}>
					<Ionicons name="paper-plane-outline" size={28} color="black" />
				</TouchableOpacity>

				{/* camera angle */}
				<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Camera')}>
					<Ionicons name="ios-camera-outline" size={30} color="black" />
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
		fontSize: 16,
		fontWeight: 'bold'
	},

	friendGrid: {
		flex: 6,
		flexGrow: 6,
		flexWrap: 'wrap',
	},
	navigationStyle: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 80,
		marginHorizontal: 15
	},
});

export default FriendScreen;