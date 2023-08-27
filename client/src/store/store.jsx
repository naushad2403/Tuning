import { configureStore } from "@reduxjs/toolkit";
import { BaseApi } from "../services/api";
import { toastReducer } from "./slices/toast";

export const store = configureStore({
  reducer: {
    toast: toastReducer,
    [BaseApi.reducerPath]: BaseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(BaseApi.middleware),
});
