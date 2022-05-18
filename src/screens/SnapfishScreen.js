import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import snapfishLogo from '../../assets/snapfish-logo.png';
import { SimpleLineIcons } from '@expo/vector-icons';
import RootNavigation from '../RootNavigation';

const SnapfishScreen = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                
            <View style={styles.navigationStyle}>
                <TouchableOpacity style={styles.button} onPress={() => RootNavigation.navigate('Home')}>
                    <SimpleLineIcons name="people" size={28} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => RootNavigation.navigate('Gallery')}>
				    <SimpleLineIcons name="picture" size={28} color="white" />
				</TouchableOpacity>
            </View>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
		flex: 1,
		backgroundColor: '#009DAE'
		// alignItems: 'center',
	},
	container: {
		flexDirection: 'column',
		flex: 1,
        backgroundColor: '#009DAE'
	},
    snapfishLogo: {

    },
    navigationStyle: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 80,
	
	},
});

export default SnapfishScreen;