import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, StatusBar, SafeAreaView } from 'react-native'
import logo from '../../assets/logoBlue.png';


const LoginScreen = ({ navigation }) => {
   
    return (
		<>
		<SafeAreaView></SafeAreaView>
        <SafeAreaView style={[styles.container, { backgroundColor: '##26CE7D' }]}>
            <StatusBar barStyle="dark-content" backgroundColor="white" />

        <View style={styles.viewStyle}>

            <TouchableOpacity  onPress={() => navigation.navigate("Home")}>
                <Image 
                    source={logo} 
                    style={styles.logo} 
                />
				<Text allowFontScaling={false} style={styles.appName}>Presize Camera</Text>
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
					<Text allowFontScaling={false} style={styles.loginTextStyle}>Login</Text>
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
		backgroundColor: 'white',
	},
    logo: {
		width: 90,
		height: 80,
		marginBottom: 25,
		marginTop: 170,
		alignSelf: 'center'
	},
	appName: {
		color: '#189BF3',
		fontSize: 27,
		fontWeight: '700',
		marginBottom: 80
	},
    viewStyle: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'white',
	},

	safeArea: {
		flex: 1,
		justifyContent: 'center',
		borderColor: 'white',
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
		color: '#eee',
		fontSize: 12
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
    
	},
	loginTextStyle: {
		color:	'black',
        fontSize: 15

	}
	
});

export default LoginScreen;