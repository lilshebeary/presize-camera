import { createSlice } from "@reduxjs/toolkit";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  photos: {},
};

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    addPhoto: (state, action) => {
      // console.error(state);
      const photo = action.payload;
      const id = uuidv4();
      const date = new Date().getTime();
      const myPhotos = { ...state.photos };
      myPhotos[id] = { ...photo, id, date };
      state.photos = myPhotos;
    },
    removePhoto: (state, action) => {
      const id = action.payload;
      const myPhotos = { ...state.photos };
      delete myPhotos[id];
      state.photos = myPhotos;
    },
    clearPhotos: (state, action) => {
      state.photos = {};
    },
  },
});

export const { addPhoto, removePhoto, clearPhotos } = gallerySlice.actions;
export default gallerySlice.reducer;
