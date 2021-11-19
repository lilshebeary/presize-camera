import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const SnapfishScreen = () => {
    return (
        <View style={styles.screenStyle}>
            <Text></Text>
        </View>
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
		flex: 1
	},
});

export default SnapfishScreen;