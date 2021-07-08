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
				line1="size your photos in popular print sizes"
				line2="before you take them"
			/>
			<ButtonRow
				icon={require('../../assets/cameraicon.png')}  
				heading="presize"
				line1="size your photos in popular print sizes"
				line2="before you take them"
			/>
			
		</View>
	</SafeAreaView>
	); 
};

const styles = StyleSheet.create({
	buttonHeading: { 
		color: '#aa2211',
		marginBottom: 10
	},
	buttonLabel: {
		flexDirection: 'column'
	},
	buttonImage: {
		width: 40,
		height: 40,
		marginRight: 20,
		marginTop:10
	},

	buttonRow: { 
		flex:1, 
		flexDirection: 'row',
		width: '70%'
	},
	buttonBody: {
		color: '#aa2211',
		fontSize: 15

	},
	logo: {
		width: 300,
		height: 300,
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

	buttonStyle: {
		fontSize: 80,
		color: 'black'
	},
	presizeStyle: {
		display: 'flex',
		alignSelf: 'center'
	},

	textStyle: {
		color: 'white'
	}
});

export default HomeScreen;