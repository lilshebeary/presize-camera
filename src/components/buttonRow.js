import React from 'react';
import { Image, StyleSheet, View, Button, Text, SafeAreaView } from "react-native";
import logo from '../../assets/monoPSCam.png';


export const ButtonRow = (props) => {
	const rowColor = {color: props.color || '#E91E63'}
    return (
        <View style={styles.buttonRow}>
				<View>
					<Image source={props.icon || logo} style={styles.buttonImage}/>
				</View>
				<View>
				<View>
					<Text style={{...styles.buttonHeading, ...rowColor}}>{props.heading}</Text>
				</View>
				<View style={styles.buttonLabel}>
					<Text style={{...styles.buttonBody, ...rowColor}}>{props.line1}</Text>
					<Text style={{...styles.buttonBody, ...rowColor}}>{props.line2}</Text>
				</View>
				</View>
			</View>
    );
}

const styles = StyleSheet.create({
	buttonHeading: { 
		color: '#E91E63',
		marginBottom: 3,
		fontSize: 14
	},
	buttonLabel: {
		flexDirection: 'column',
		marginBottom: -14,
	},
	buttonImage: {
		width: 40,
		height: 40,
		marginRight: 20,
		marginTop: 5,
	
	},

	buttonRow: { 
		flexDirection: 'row',
		width: '80%',
		justifyContent: 'flex-start',
		padding: 0,
		margin: 0,
		height: 90
	},
	buttonBody: {
		color: '#E91E63',
		fontSize: 12,
		marginTop: 0,
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