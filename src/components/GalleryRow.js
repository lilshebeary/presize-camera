import React from 'react'
import { View, StyleSheet } from 'react-native'
import Photo from './Photo'

 const GalleryRow = () => {
    return (
        <View style={styles.container}>
            <View style={styles.rowStyle} >
                <Photo />
                <Photo />
                <Photo />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    rowStyle: {
		flexDirection: 'row',
		flex: 6,
		flexGrow: 6,
	
	},
});

export default GalleryRow;