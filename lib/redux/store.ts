import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/features/userSlice";
import hamSlice from "./hamMenu/features/hamSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    ham: hamSlice,
  },
});

export default store;

export type Store = ReturnType<typeof store.getState>;
