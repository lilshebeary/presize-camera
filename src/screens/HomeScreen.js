import React from "react";
import { StyleSheet, View, Button, Text, SafeAreaView } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const HomeScreen = ({ navigation }) => {
  return (
	<SafeAreaView style={styles.safeArea}>
		<View style={styles.viewStyle}>
			
			<Button
				title="Presize Camera"
				onPress={() => navigation.navigate("Login")}
				style={styles.buttonStyle}
			/>

			</View>
			<MaterialCommunityIcons name="home" color={'white'} size={20} />
			<Text style={styles.textStyle}>
				presize organize share print
			</Text>

		</SafeAreaView>
	); 
};

const styles = StyleSheet.create({
	viewStyle: {
		
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
		color: 'red'
	},

	textStyle: {
		color: 'red'
	}
});

export default HomeScreen;