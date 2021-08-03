import React from "react";
import { Image, StyleSheet, View, TouchableOpacity, Text, SafeAreaView } from "react-native";
import logo from '../../assets/monoPSCam.png';
import { ButtonRow } from '../components/buttonRow';

const HomeScreen = ({ navigation }) => {
  return (
	<SafeAreaView style={styles.safeArea}>
		<View style={styles.viewStyle}>
			<View>
				<Image source={logo} style={styles.logo} />
				<Text style={styles.logoTextStyle1}>reSize</Text>
				<Text style={styles.logoTextStyle2}>Camera</Text>
			</View>
			<View style={styles.buttonsStyle}>
			
				<ButtonRow
					icon={require('../../assets/cameraicon.png')}  
					heading="presize"
					line1="size your photos in popular print "
					line2="sizes before you take them"
					style={styles.cameraStyle}
				/>
			
		
			<ButtonRow
				icon={require('../../assets/folder-icon.png')}  
				heading="organize"
				line1="your pictures into albums"
				style={styles.folderStyle}
				color={"#FF9800"}
			/>
			<ButtonRow
				icon={require('../../assets/groupIcon.png')}  
				heading="share"
				line1="your photo albums with family"
				line2="and friends"
				style={styles.shareStyle}
				color="#FFEB3B"
				
			/>
			<ButtonRow
				icon={require('../../assets/printicon.png')}  
				heading="print"
				line1="your photos with popular print"
				line2="shops or print from home"
				style={styles.printStyle}
				color= "#8BC34A"
			/>
			</View>
			<View style={styles.accountStyle}>
				<TouchableOpacity 
					style={styles.loginStyle}
					onPress={() => navigation.navigate("Login")}
				>
					<Text style={styles.loginTextStyle}>Login</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.createStyle}>
					<Text style={styles.createTextStyle}>Create</Text>
				</TouchableOpacity>
			</View>
		</View>
	</SafeAreaView>
	); 
};

const styles = StyleSheet.create({
  	logo: {
		width: 180,
		height: 180,
		marginBottom: 25,
		marginTop: 15

	},
	logoTextStyle1:{
		position: 'absolute',
		color: '#2196F3',
		marginTop: 120,
		marginLeft: 100

	},	logoTextStyle2:{
		position: 'absolute',
		color: '#2196F3',
		marginTop: 137,
		marginLeft: 95

	},


	viewStyle: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#212121',
	
	},

	safeArea: {
		flex: 1,
		backgroundColor: '#212121',
		justifyContent: 'center',
		borderColor: 'white',
		borderWidth: 1
	  },

	buttonsStyle: {
		flex: 1,
		
	},

	// 
	presizeStyle: {
		display: 'flex',
		alignSelf: 'center'
	},
	cameraStyle: {
		color: "#E91E63",
	
	
	},
	folderStyle: {
		color: "#FF9800"
	},
	shareStyle: {
		color: "#FFEB3B"
	},
	printStyle: {
		color: "#8BC34A",
	},

	accountStyle: {
		flexDirection: 'row',
		
	},
	
	loginStyle: {
		borderColor: 'white',
		borderWidth: 1,
		height: 40,
		width: 100,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 30,
		marginRight: 15
	
	},
	loginTextStyle: {
		color:	'#00BCD4'
	},
	createStyle: {
		borderColor: 'white',
		borderWidth: 1,
		height: 40,
		width: 100,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 15
	
	},
	createTextStyle: {
		color:	'#9C27B0'
	}


});

export default HomeScreen;