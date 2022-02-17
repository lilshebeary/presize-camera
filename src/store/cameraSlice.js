import { createSlice } from "@reduxjs/toolkit";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  lastImage: {},
};

export const cameraSlice = createSlice({
  name: "camera",
  initialState,
  reducers: {
    setLastImage: (state, action) => {
      state.lastImage = action.payload;
    },
  },
});

export const { setLastImage } = cameraSlice.actions;
export default cameraSlice.reducer;
