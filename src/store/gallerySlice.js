import { createSlice } from "@reduxjs/toolkit";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const _filter = require("lodash/filter");

const initialState = {
  photos: {},
  filteredPhotos: [],
  filter: {},
};

const _filterPhotos = (photos, filter) => _filter(photos, filter);

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
      state.filteredPhotos = _filterPhotos(state.photos, state.filter);
    },
    removePhoto: (state, action) => {
      const id = action.payload;
      const myPhotos = { ...state.photos };
      delete myPhotos[id];
      state.photos = myPhotos;
      state.filteredPhotos = _filterPhotos(state.photos, state.filter);
    },
    clearPhotos: (state, action) => {
      state.photos = {};
      state.filteredPhotos = [];
    },
    filterPhotos: (state, action) => {
      const ratio = action.payload;

      if (!!ratio) {
        state.filter = {
          ratio,
        };
      } else {
        state.filter = {};
      }

      state.filteredPhotos = _filterPhotos(state.photos, state.filter);
    },
  },
});

export const { addPhoto, removePhoto, clearPhotos, filterPhotos } =
  gallerySlice.actions;
export default gallerySlice.reducer;
