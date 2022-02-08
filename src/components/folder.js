import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const Folder = () => {
	return (
		<SafeAreaView style={styles.safeArea}>
        
			<View style={styles.container}>
                <View style={styles.folder}>
				    <View style={styles.photoStyle}></View>
                    <Text>Name</Text>
                </View>
                </View>
			
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: 'white'
		// alignItems: 'center',
	},
	container: {
		flexDirection: 'column',
		flex: 1
	},
    folder: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    photoStyle: {
        width: 60,
        height: 60,
        backgroundColor: 'green',
        margin: 10,
        borderRadius: 5
    },

});

export default Friend;