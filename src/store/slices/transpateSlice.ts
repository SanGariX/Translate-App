import { createSlice } from "@reduxjs/toolkit";
import type { stringObjectData } from "../../helper/types.ts";
type actionType = {
  payload: {
    array: stringObjectData[];
    textarea: boolean;
    input: boolean;
  };
};
type initialStateType = {
  history: stringObjectData[];
  textArea: stringObjectData[];
  input: stringObjectData[];
  popup: boolean;
};
const initialState: initialStateType = {
  textArea: [],
  input: [],
  popup: false,
  history: [],
};
const transpateSlice = createSlice({
  name: "transpateSlice",
  initialState,
  reducers: {
    writeWords: (state, action: actionType) => {
      if (!action.payload.array) return;
      state.history.push(...action.payload.array);
      if (action.payload.textarea) state.textArea = action.payload.array;
      else state.input = action.payload.array;
      state.popup = true;
      console.log(action.payload, "поки ось так");
    },
    closePopup: (state) => {
      state.popup = false;
      state.textArea = [];
      state.input = [];
    },
  },
});
export default transpateSlice.reducer;
export const { writeWords, closePopup } = transpateSlice.actions;
