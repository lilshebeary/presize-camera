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
		color: '#E91E63',
		marginBottom: 5,
		fontSize: 9
	},
	buttonLabel: {
		flexDirection: 'column'
	},
	buttonImage: {
		width: 40,
		height: 40,
		marginRight: 20,
		marginTop: 10
	},

	buttonRow: { 
		flex:1, 
		flexDirection: 'row',
		width: '80%'
	},
	buttonBody: {
		color: '#E91E63',
		fontSize: 9

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

	presizeStyle: {
		display: 'flex',
		alignSelf: 'center'
	},

});