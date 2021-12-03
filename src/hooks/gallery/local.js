import { useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export function useGallery() {
	const [ photos, setPhotos ] = useState({});

	useEffect(() => {
		if (Object.keys(photos).length === 0) {
			AsyncStorage.getItem('photos').then((data) => {
				setPhotos({ ...JSON.parse(data) });
			});
		}
	});

	const savePhotos = () => {
		setPhotos({ ...photos });
		AsyncStorage.setItem('photos', JSON.stringify(photos)).then(() => {});
	};

	return {
		photos,
		addPhoto: (photo) => {
			const id = uuidv4();
			const date = new Date();
			photos[id] = { ...photo, id, date };
			savePhotos();
		},
		replacePhoto: (id, photo) => {
			photos[id] = { ...photo, id };
			savePhotos();
		},
		removePhoto: (id) => {
			delete photos[id];
			savePhotos();
		},
		clearPhotos: () => {
			setPhotos({});
			savePhotos();
		}
	};
}
