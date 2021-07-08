import React from 'react';
import { Image, StyleSheet, View, Button, Text, SafeAreaView } from "react-native";
import logo from '../../assets/monoPSCam.png';


export const ButtonRow = (props) => {
    return (
        <View style={styles.buttonRow}>
				<View>
					<Image source={props.icon || logo} style={styles.buttonImage}/>
				</View>
				<View>
				<View>
					<Text style={styles.buttonHeading}>{props.heading}</Text>
				</View>
				<View style={styles.buttonLabel}>
					<Text style={styles.buttonBody}>{props.line1}</Text>
					<Text style={styles.buttonBody}>{props.line2}</Text>
				</View>
				</View>
			</View>
    );
}

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