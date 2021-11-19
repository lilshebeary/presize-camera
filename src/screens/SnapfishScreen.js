import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import snapfishLogo from '../../assets/snapfish-logo.png';

const SnapfishScreen = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image 
                    source={snapfishLogo} 
                    style={styles.snapfishLogo} 
                />
                <Text />
            </View>
        </SafeAreaView>
    )
}

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
        
    }
});

export default SnapfishScreen;