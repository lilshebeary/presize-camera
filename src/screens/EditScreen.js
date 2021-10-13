import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { PESDK, PhotoEditorModal, Configuration } from 'react-native-photoeditorsdk';
import * as SecureStore from 'expo-secure-store';

const EditScreen = ({ navigation }) => {
	const [ lastImage, setLastImage ] = useState(null);

	useEffect(() => {
		SecureStore.getItemAsync('lastImage').then((image) => {
			if (image) {
				setLastImage(JSON.parse(image));
			}
		});
	});

	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				<TouchableOpacity style={styles.navigationStyle} onPress={() => navigation.navigate('Home')}>
					<Feather name="x" size={32} color="white" />
				</TouchableOpacity>
				<Text>{JSON.stringify(lastImage)}</Text>
				{lastImage && (
					<PhotoEditorModal
						onExport={(e) => {
							SecureStore.setItemAsync('lastImage', JSON.stringify({ ...lastImage, uri: e.image }));
						}}
						visible={true}
						image={lastImage.uri}
					/>
				)}
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
		flex: 1,
		backgroundColor: '#212121'
	},
	navigationStyle: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 80,
		backgroundColor: '#212121',
		alignSelf: 'flex-end'
	}
});

export default EditScreen;
