import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},
});

export default store;

export type Store = ReturnType<typeof store.getState>;
