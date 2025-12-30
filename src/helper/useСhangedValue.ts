import { useSelector } from "react-redux";
import type { RootState } from "../store/store.ts";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useChangedValue = (firstDark: any, secondWhite: any) => {
  const { theme } = useSelector((state: RootState) => state.changeSlice);
  switch (theme) {
    case "dark":
      return secondWhite;
    case "white":
      return firstDark;
  }
};
export default useChangedValue;
