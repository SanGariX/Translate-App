import { createSlice } from "@reduxjs/toolkit";
import type { stringObjectData } from "../../helper/types.ts";
import randomizer from "../../helper/randomizer.ts";
type actionType = {
  payload: {
    array: stringObjectData[];
    textarea: boolean;
    input: boolean;
    history?: boolean;
  };
};
type initialStateType = {
  history: stringObjectData[][];
  textArea: stringObjectData[];
  input: stringObjectData[];
  popup: boolean;
  page: number;
  directionTranslate: boolean;
};
const initialState: initialStateType = {
  textArea: [],
  input: [],
  popup: false,
  history: [],
  page: 1,
  directionTranslate: false,
};
const transpateSlice = createSlice({
  name: "transpateSlice",
  initialState,
  reducers: {
    writeWords: (state, action: actionType) => {
      if (!action.payload.array.length) return;
      if (!action.payload.history)
        state.history.push([...action.payload.array]);
      if (action.payload.textarea)
        state.textArea = randomizer(action.payload.array);
      else state.input = randomizer(action.payload.array);
      state.popup = true;
    },
    closePopup: (state) => {
      state.popup = false;
      state.textArea = [];
      state.input = [];
      state.page = 1;
    },
    changeStatePopup: (state, action) => {
      if (state.input.length) {
        state.input[state.page - 1].finished = action.payload.accepte;
      } else {
        state.textArea[state.page - 1].finished = action.payload.accepte;
      }
    },
    changePagePopup: (state) => {
      state.page += 1;
    },
    changeDirectionTranslate: (state) => {
      state.directionTranslate = !state.directionTranslate;
    },
  },
});
export default transpateSlice.reducer;
export const {
  writeWords,
  closePopup,
  changeStatePopup,
  changePagePopup,
  changeDirectionTranslate,
} = transpateSlice.actions;
