import { createSlice } from "@reduxjs/toolkit";
import type { stringObjectData } from "../../helper/types.ts";
import randomizer from "../../helper/randomizer.ts";
type actionType = {
  payload: {
    array: stringObjectData[];
    history?: boolean;
  };
};
type initialStateType = {
  history: stringObjectData[][];
  textArea: stringObjectData[];
  popup: boolean;
  page: number;
  directionTranslate: boolean;
};
const initialState: initialStateType = {
  textArea: [],
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
      state.textArea = randomizer(action.payload.array);
      state.popup = true;
      console.dir(this);
      localStorageTranslate(state);
    },
    closePopup: (state) => {
      state.popup = false;
      state.textArea = [];
      state.page = 1;
      localStorageTranslate(state);
    },
    changeStatePopup: (state, action) => {
      state.textArea[state.page - 1].finished = action.payload.accepte;
      localStorageTranslate(state);
    },
    changePagePopup: (state) => {
      state.page += 1;
      localStorageTranslate(state);
    },
    changeDirectionTranslate: (state) => {
      state.directionTranslate = !state.directionTranslate;
      localStorageTranslate(state);
    },
    recoverLocalStorage: (state) => {
      const history = localStorage.getItem("history");
      const page = localStorage.getItem("page");
      const textArea = localStorage.getItem("textArea");
      const popup = localStorage.getItem("popup");
      const directionTranslate = localStorage.getItem("directionTranslate");
      if (
        !history ||
        !page ||
        !textArea ||
        !textArea ||
        !popup ||
        !directionTranslate
      )
        return;
      state.history = JSON.parse(history);
      state.page = JSON.parse(page);
      state.textArea = JSON.parse(textArea);
      state.popup = JSON.parse(popup);
      state.directionTranslate = JSON.parse(directionTranslate);
    },
  },
});

function localStorageTranslate(state: initialStateType) {
  localStorage.setItem("history", JSON.stringify(state.history));
  localStorage.setItem("page", JSON.stringify(state.page));
  localStorage.setItem("textArea", JSON.stringify(state.textArea));
  localStorage.setItem("popup", JSON.stringify(state.popup));
  localStorage.setItem(
    "directionTranslate",
    JSON.stringify(state.directionTranslate)
  );
}
export default transpateSlice.reducer;
export const {
  writeWords,
  closePopup,
  changeStatePopup,
  changePagePopup,
  changeDirectionTranslate,
  recoverLocalStorage,
} = transpateSlice.actions;
