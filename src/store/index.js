import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import galleryReducer from "./gallerySlice";
import cameraReducer from "./cameraSlice"
import { 
  persistReducer,  
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, 
} from "redux-persist";

import ExpoFileSystemStorage from "redux-persist-expo-filesystem";
//todo: add redux persist here

const persistConfig = {
  key: "root",
  storage: ExpoFileSystemStorage,
};

const reducers = combineReducers({
  gallery: galleryReducer,
  camera: cameraReducer
});

const persistedReducer = persistReducer(persistConfig, reducers);

const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default Store;
