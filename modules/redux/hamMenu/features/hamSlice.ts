//import from libraries
import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const hamSlice = createSlice({
  name: "ham",
  initialState,
  reducers: {
    changeMenuState(state) {
      return !state;
    },
  },
});

//actions
export const { changeMenuState } = hamSlice.actions;

//reducer
export default hamSlice.reducer;
