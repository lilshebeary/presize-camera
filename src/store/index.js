import { configureStore } from "@reduxjs/toolkit";
import galleryReducer from "./gallerySlice";

//todo: add redux persist here

const Store = configureStore({
  reducer: {
    gallery: galleryReducer,
  },
});

export default Store;
