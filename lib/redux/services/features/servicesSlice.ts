import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const servicesSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      return action.payload;
    },
  },
});

export const { setPage } = servicesSlice.actions;

export default servicesSlice.reducer;
