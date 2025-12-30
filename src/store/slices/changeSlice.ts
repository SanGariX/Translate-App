import { createSlice } from "@reduxjs/toolkit";
type initialStateType = {
  theme: "white" | "dark";
  form: boolean;
};
const initialState: initialStateType = {
  theme: "white",
  form: false,
};
const changeSlice = createSlice({
  name: "changeSlice",
  initialState,
  reducers: {
    changeTheme: (state) => {
      switch (state.theme) {
        case "dark":
          state.theme = "white";
          break;
        case "white":
          state.theme = "dark";
          break;
      }
    },
    changeValue: (state) => {
      state.form = !state.form;
    },
  },
});
export default changeSlice.reducer;
export const { changeTheme, changeValue } = changeSlice.actions;
