import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, StatusBar, SafeAreaView } from 'react-native'
import logo from '../../assets/blueLogo.png';


const LoginScreen = ({ navigation }) => {
   
    return (
		<>
		<SafeAreaView></SafeAreaView>
        <SafeAreaView style={[styles.container, { backgroundColor: '##26CE7D' }]}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
		<View style={styles.topStyle}>
			</View>
        <View style={styles.viewStyle}>

            <TouchableOpacity  onPress={() => navigation.navigate("Home")}>
                <Image 
                    source={logo} 
                    style={styles.logo} 
                />
				<Text style={styles.appName}>Presize Camera</Text>
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
				
			</View>

        </View>
        </SafeAreaView>
		</>
    )
};

const styles = StyleSheet.create({
    container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#fff',
	},
	topStyle: {
		flex: 1
	},
    logo: {
		width: 120,
		height: 100,
		marginBottom: 25,
		marginTop: 170,
		alignSelf: 'center'
	},
	appName: {
		color: '#189BF3',
		fontSize: 40,
		fontWeight: '700',
		marginBottom: 80
	},
    viewStyle: {
		flex: 8,
		alignItems: 'center',
		backgroundColor: '#fff',
	},

	safeArea: {
		flex: 1,
		justifyContent: 'center',
		borderColor: '#fff',
		borderWidth: 1
	  },
      accountStyle: {
		flexDirection: 'row',
		
	},
	input: {
        height: 40,
        width: 320,
        margin: 12,
        borderWidth: 1,
		borderRadius: 6,
        padding: 10,
        backgroundColor: "white",
        marginBottom: 10,
		color: '#ddd'
      },
	  loginStyle: {
        marginTop: 50,
        backgroundColor: '#26CE7D',
		height: 45,
		width: 320,
		borderRadius: 6,
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 15,
     fontSize: 20
	
	},
	loginTextStyle: {
		color:	'black',
        fontSize: 20

	}
	
});

export default LoginScreen;