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

export const { changeMenuState } = hamSlice.actions;

export default hamSlice.reducer;
