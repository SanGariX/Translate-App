import { configureStore } from "@reduxjs/toolkit";
import changeSlice from "./slices/changeSlice.ts";
import transpateSlice from "./slices/transpateSlice.ts";
const store = configureStore({
  reducer: { changeSlice, transpateSlice },
});
export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
