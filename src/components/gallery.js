import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import GalleryRow from './GalleryRow'

 const Gallery = ({ photos }) => {
    //  console.error(photos);
    // const images = Object.keys(photos).map((id) => photos.id).sort((a, b) => {})
    return (
        <FlatList 
            style={styles.container}
            data={[{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}]}
            renderItem={GalleryRow}
            keyExtractor={item => item.id}
        >
				
        </FlatList>
    )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    galleryGrid: {
		flexDirection: 'row',
		flex: 6,
		flexGrow: 6,
	
	}
});

export default Gallery;
