//import from libraries
import { configureStore } from "@reduxjs/toolkit";

//internal imports
import userSlice from "./user/features/userSlice";
import hamSlice from "./hamMenu/features/hamSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    ham: hamSlice,
  },
});

export default store;

//type of store
export type Store = ReturnType<typeof store.getState>;
