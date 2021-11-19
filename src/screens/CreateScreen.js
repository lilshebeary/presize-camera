import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, StatusBar, SafeAreaView } from 'react-native'
import logo from '../../assets/logoBlue.png';


const CreateScreen = ({ navigation }) => {
   
    return (
		<>
		<SafeAreaView></SafeAreaView>
        <SafeAreaView style={[styles.container, { backgroundColor: '#fff' }]}>
            <StatusBar barStyle="light-content" backgroundColor="#fff" />
            
        <View style={styles.viewStyle}>
            <TouchableOpacity  onPress={() => navigation.navigate("Home")}>
                <Image 
                    source={logo} 
                    style={styles.logo} 
                />
				<Text style={styles.nameApp}>Presize Camera</Text>
            </TouchableOpacity>
		</View>
        <View style={styles.space} />
            <View style={styles.formStyle}>
				<Text style={styles.label}>First Name</Text>
			<TextInput
                style={styles.input}
                    // onChangeText={onChangeText}
                    // value={text}
                    placeholder="Jane"
                />
				<Text style={styles.label}>Second Name</Text>
				<TextInput
                style={styles.input}
                    // onChangeText={onChangeText}
                    // value={text}
                    placeholder="Doe"
                />
				<Text style={styles.label}>Email</Text>
				<TextInput
                style={styles.input}
                    // onChangeText={onChangeText}
                    // value={text}
                    placeholder="jane@email.com"
                />
				<Text style={styles.label}>Phone</Text>
            <TextInput
                style={styles.input}
                    // onChangeText={onChangeText}
                    // value={text}
                    placeholder="1+___ ___ ____"
                />
				<Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.input}
                    // onChangeText={onChangeText}
                    // value={text}
                    placeholder="*******"
                />
				<Text style={styles.label}>Re Enter Password</Text>
            <TextInput
                style={styles.input}
                // onChangeText={onChangeNumber}
                // value={number}
                placeholder="*******"
                keyboardType="numeric"
            />
            </View>
         
            <View style={styles.accountStyle}>
				<TouchableOpacity 
					style={styles.createStyle}
				>
					<Text style={styles.createTextStyle}>Continue</Text>
				</TouchableOpacity>
			</View>
			 
            </SafeAreaView>
        
		</>
    )
};

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
		borderColor: 'white',
		borderWidth: 1
	  },
    container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#fff',
	},
    logo: {
        height: 63,
        width: 68,
		marginBottom: 10,
		marginTop: 30,
		alignSelf: 'center',
	},
	nameApp: {
		color: '#189BF3',
		fontSize: 24, 
		fontWeight: '700',
		marginBottom: 20
	},
    space: {
        flex: .5
    },
    viewStyle: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#fff',
	},
    formStyle: {
        flex:5,
        marginTop:30
    },
      accountStyle: {
		flexDirection: 'row',
        marginTop: 0
	},
	label: {
		marginLeft: 14,
		color: '#212121',
        fontSize: 13
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
	
	createStyle: {
        marginTop: 50,
        backgroundColor: '#189BF3',
		height: 45,
		width: 320,
		borderRadius: 6,
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 15,
	
	},
	createTextStyle: {
		color:	'black',
        fontSize: 14
	}
});

export default CreateScreen;