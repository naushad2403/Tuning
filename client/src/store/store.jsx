import { configureStore } from "@reduxjs/toolkit";
import { BaseApi } from "../services/api";

export const store = configureStore({
  reducer: {
    [BaseApi.reducerPath]: BaseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(BaseApi.middleware),
});
