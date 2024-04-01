//import from libraries
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = "";

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<string>) {
      return action.payload;
    },
  },
});

//actions
export const { setUser } = userSlice.actions;

//reducer
export default userSlice.reducer;
