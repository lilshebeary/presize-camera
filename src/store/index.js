import { configureStore } from '@reduxjs/toolkit';
import photoReducer from './photo';

export const Store = configureStore({ 
    reducer: {
        photos: photoReducer
    }
})
