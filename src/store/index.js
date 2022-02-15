import { configureStore } from "@reduxjs/toolkit";
import galleryReducer from "./gallerySlice";

const Store = configureStore({
  reducer: {
    gallery: galleryReducer,
  },
});

export default Store;
