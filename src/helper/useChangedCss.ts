import { useSelector } from "react-redux";
import type { RootState } from "../store/store.ts";
export const useChangedCss = (s: Record<string, string>, base: string) => {
  const { theme } = useSelector((state: RootState) => state.changeSlice);
  switch (theme) {
    case "dark":
      return s[`${base}Dark`];
    case "white":
      return s[`${base}White`];
  }
};
export default useChangedCss;
