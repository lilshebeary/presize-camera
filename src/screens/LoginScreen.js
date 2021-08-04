import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, StatusBar, SafeAreaView } from 'react-native'
import logo from '../../assets/psCam.png';


const LoginScreen = ({ navigation }) => {
   
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#212121' }]}>
            <StatusBar barStyle="light-content" backgroundColor="#212121" />

        <View style={styles.viewStyle}>

            <TouchableOpacity  onPress={() => navigation.navigate("Home")}>
                <Image 
                    source={logo} 
                    style={styles.logo} 
                />
            </TouchableOpacity>

            <View>
            <TextInput
                style={styles.input}
                    // onChangeText={onChangeText}
                    // value={text}
                    placeholder="Username"
                />
            <TextInput
                style={styles.input}
                // onChangeText={onChangeNumber}
                // value={number}
                placeholder="Password"
                keyboardType="numeric"
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
    )
};

const styles = StyleSheet.create({
    container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#212121',
	
	},

    logo: {
		width: 180,
		height: 180,
		marginBottom: 35,
		marginTop: 95

	},
	// logoTextStyle1:{
	// 	position: 'absolute',
	// 	color: '#2196F3',
	// 	marginTop: 210,
	// 	marginLeft: 100

	// },	logoTextStyle2:{
	// 	position: 'absolute',
	// 	color: '#2196F3',
	// 	marginTop: 227,
	// 	marginLeft: 95

	// },
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
      accountStyle: {
		flexDirection: 'row',
		
	},
    input: {
        height: 35,
        width: 250,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "white",
        marginBottom: 20
      },
	loginStyle: {
        marginTop: 20,
        backgroundColor: '#F2BB35',
		height: 45,
		width: 105,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 30,
		marginRight: 15
	
	},
	loginTextStyle: {
		color:	'black',
        fontSize: 20

	},
	createStyle: {
        marginTop: 20,
        backgroundColor: '#00BCD4',
		height: 45,
		width: 105,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 15,
     fontSize: 20
	
	},
	createTextStyle: {
		color:	'black',
        fontSize: 20

	}
});

export default LoginScreen;