import { createSlice } from "@reduxjs/toolkit";
type initialStateType = {
  theme: "white" | "dark";
};
const initialState: initialStateType = {
  theme: "dark",
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
      localStorage.setItem("theme", JSON.stringify(state.theme));
    },
  },
});
export default changeSlice.reducer;
export const { changeTheme } = changeSlice.actions;
