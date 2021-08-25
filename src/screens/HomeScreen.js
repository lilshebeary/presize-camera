import React from "react";
import { Image, StyleSheet, View, TouchableOpacity, Text, SafeAreaView, StatusBar } from "react-native";
import logo from '../../assets/monoPSCam.png';
import { ButtonRow } from '../components/buttonRow';
import { SimpleLineIcons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  return (
	// <SafeAreaView style={styles.safeArea}>

		<SafeAreaView style={[styles.safeArea, { backgroundColor: '#212121' }]}>
            <StatusBar barStyle="light-content" backgroundColor="#212121" />

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
					onPress={() => navigation.navigate("Camera")}
				/>
			
		
			<ButtonRow
				icon={require('../../assets/folder-icon.png')}  
				heading="organize"
				line1="your pictures into albums"
				style={styles.folderStyle}
				color={"#FF9800"}
			/>
			<ButtonRow
				iconComponent=<SimpleLineIcons name="people" size={37} color="white" style={{ marginRight:25}} /> 
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
				<TouchableOpacity 
					style={styles.createStyle}
					onPress={() => navigation.navigate("Create")}
				>
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
		marginTop: 25

	},
	logoTextStyle1:{
		position: 'absolute',
		color: '#2196F3',
		marginTop: 125,
		marginLeft: 100

	},	logoTextStyle2:{
		position: 'absolute',
		color: '#2196F3',
		marginTop: 138,
		marginLeft: 95
	},


	viewStyle: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#212121',
	
	},

	safeArea: {
		flex: 1,
		backgroundColor: '#212121',
		alignItems: 'center',
	  },
	 
	buttonsStyle: {
		flex: 1,
		justifyContent: 'center'
		
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
		alignContent: 'center',
		justifyContent: 'center'
		
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