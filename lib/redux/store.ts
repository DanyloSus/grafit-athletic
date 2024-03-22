import { configureStore } from "@reduxjs/toolkit";
import servicesSlice from "./services/features/servicesSlice";

const store = configureStore({
  reducer: {
    services: servicesSlice,
  },
});

export default store;

export type Store = ReturnType<typeof store.getState>;
