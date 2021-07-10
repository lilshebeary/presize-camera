import React from "react";
import { Image, StyleSheet, View, Button, Text, SafeAreaView } from "react-native";
import logo from '../../assets/monoPSCam.png';
import { ButtonRow } from '../components/buttonRow';

const HomeScreen = ({ navigation }) => {
  return (
	<SafeAreaView style={styles.safeArea}>
		<View style={styles.viewStyle}>
			<View>
				<Image source={logo} style={styles.logo} />
			</View>
			<ButtonRow
				icon={require('../../assets/cameraicon.png')}  
				heading="presize"
				line1="size your photos in popular print "
				line2="sizes before you take them"
				style={styles.cameraStyle}
				
			/>
			<ButtonRow
				icon={require('../../assets/cameraicon.png')}  
				heading="organize"
				line1="your pictures into albums"
				style={styles.folderStyle}
			/>
			<ButtonRow
				icon={require('../../assets/cameraicon.png')}  
				heading="share"
				line1="your photo albums with family"
				line2="and friends"
				style={styles.shareStyle}
				
			/>
			<ButtonRow
				icon={require('../../assets/cameraicon.png')}  
				heading="print"
				line1="your photos with popular print"
				line2="shops or print from home"
				style={styles.printStyle}

				
			/>
			
		</View>
	</SafeAreaView>
	); 
};

const styles = StyleSheet.create({
  	logo: {
		width: 220,
		height: 220,
		marginBottom: 30,
		marginTop: 20
	},
	viewStyle: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'black',
	},

	safeArea: {
		flex: 1,
		backgroundColor: 'black',
		justifyContent: 'center'
	  },

	// 
	presizeStyle: {
		display: 'flex',
		alignSelf: 'center'
	},
	cameraStyle: {
		color: "#E91E63"
	},
	folderStyle: {
		color: "#FF9800"
	},
	shareStyle: {
		color: "#FFEB3B"
	},
	printStyle: {
		color: "#8BC34A"
	}


});

export default HomeScreen;