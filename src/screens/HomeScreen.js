import React from "react";
import { Image, StyleSheet, View, TouchableOpacity, Text, SafeAreaView, StatusBar } from "react-native";
import logo from '../../assets/logo.png';


const HomeScreen = ({ navigation }) => {
  return (
	// <SafeAreaView style={styles.safeArea}>
	<>
	<SafeAreaView style={styles.safeAreaTop} />
		<SafeAreaView style={styles.safeAreaBottom}>
            <StatusBar barStyle="light-content" backgroundColor="#FB2A5C" />
			<TouchableOpacity style={styles.touchableStyle} onPress={() => navigation.navigate('Camera')}>
			<View style={styles.redViewStyle}>
				<Image source={logo} style={styles.logo} />
				<Text style={styles.appName}>Presize Camera</Text>
			</View>	
			</TouchableOpacity>
			<View style={styles.blueViewArch}></View>

			<View style={styles.accountStyle}>
				<TouchableOpacity 
					style={styles.loginStyle}
					onPress={() => navigation.navigate("Login")}
				>
					<Text style={styles.loginTextStyle}>Sign In</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={styles.createStyle}
					onPress={() => navigation.navigate("Create")}
				>
					<Text style={styles.createTextStyle}>Sign Up</Text>
				</TouchableOpacity>
			</View>
		
	</SafeAreaView>
	</>

	);
};

const styles = StyleSheet.create({
  	logo: {
		color: '#fff',
		backgroundColor: '#FB2A5C',
		width: '30%',
		height: '20%',
		marginBottom: 25,
		marginTop: 55
	},
	appName: {
		color: 'white',
		fontSize: 35,
		fontWeight: '700'
	},
	redViewStyle: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FB2A5C',
		width: '100%',
		height: '100%',	
	},
	touchableStyle: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FB2A5C',
		width: '100%',
		height: '65%',	
	},
	blueViewArch: {
		textAlign: 'center',
		width: '30%',
		height: '10%',
		backgroundColor: '#189BF3',
		borderBottomLeftRadius: 500,
		borderBottomRightRadius: 500,
		borderTopLeftRadius: 0,
		borderTopRightRadius: 0,
		transform: [{scaleX:4},{scaleY:1}],
		marginBottom: 40
	},
	safeAreaBottom: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
	  },
	safeAreaTop: {
		flex: 0,
		backgroundColor: '#FB2A5C',
	  },
	buttonsStyle: {
		flex: 1,
		justifyContent: 'center'	
	},

	accountStyle: {
	
		alignContent: 'center',
		justifyContent: 'center'
		
	},
	
	loginStyle: {
		borderColor: '#26CE7D',
		backgroundColor: '#26CE7D',
		borderWidth: 1,
		height: 45,
		width: 300,
		borderRadius: 2,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 30,
		marginRight: 15
	
	},
	loginTextStyle: {
		color:	'#fff',
		fontSize: 30
	},
	createStyle: {
		borderColor: '#189BF3',
		backgroundColor: '#189BF3',
		borderWidth: 1,
		height: 45,
		width: 300,
		borderRadius: 2,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 30,
		marginRight: 15
	
	},
	createTextStyle: {
		color:	'#fff',
		fontSize: 30
	}


});

export default HomeScreen;