import { createSlice } from "@reduxjs/toolkit";

const initialState = {photos: []}

export const photoSlice = createSlice({
    name: 'photo',
    initialState,
    reducers: {
        setPhotos: (state, action) => {
            state.photos = action.payload;
        }
    }
})

export const { setPhotos } = photoSlice.actions;
export default photoSlice.reducer;