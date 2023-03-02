import { configureStore } from "@reduxjs/toolkit";
import { emptyApi } from "./api/emptyApi";
import authSlice from "./slices/authSlice";
import filterSlice from "./slices/filterSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    filter: filterSlice,
    [emptyApi.reducerPath]: emptyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(emptyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
