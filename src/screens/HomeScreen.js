import React from "react";
import { StyleSheet, View, Button } from "react-native";


const HomeScreen = ({ navigation }) => {
  return (
		<View>
			
			<Button
				title="Presize Camera"
				onPress={() => navigation.navigate("Login")}
			/>

	

			

		</View>
	); 
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
	}
});

export default HomeScreen;