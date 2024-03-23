import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/features/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default store;

export type Store = ReturnType<typeof store.getState>;
