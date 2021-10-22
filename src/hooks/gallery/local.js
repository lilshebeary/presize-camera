import { useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { v4 as uuidv4 } from 'uuid';

export function useGallery() {
	const [ photos, setPhotos ] = useState({});

	useEffect(() => {
		if (Object.keys(photos).length === 0) {
			SecureStore.getItemAsync('photos').then((data) => {
				setPhotos({ ...JSON.parse(data) });
			});
		}
	});

	const savePhotos = () => {
		setPhotos({ ...photos });
		SecureStore.setItemAsync('photos', JSON.stringify(photos)).then(() => {});
	};

	return {
		photos,
		addPhoto: (photo) => {
			const id = uuidv4();
			photos[id] = { ...photo, id };
			savePhotos();
		},
		replacePhoto: (id, photo) => {
			photos[id] = { ...photo, id };
			savePhotos();
		},
		removePhoto: (id) => {
			delete photos[id];
			savePhotos();
		}
	};
}
