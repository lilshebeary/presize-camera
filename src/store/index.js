import { configureStore } from "@reduxjs/toolkit";
import gallerySlice from "./gallerySlice";
import photoReducer from "./photo";

const Store = configureStore({
  reducer: {
    photos: photoReducer,
    gallery: gallerySlice,
  },
});

export default Store;
