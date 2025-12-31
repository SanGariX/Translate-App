import { useSelector } from "react-redux";
import TestPopup from "./Components/TestPopup/TestPopup.tsx";
import s from "./Popups.module.css";
import type { RootState } from "../../store/store.ts";
const Popups = () => {
  const { popup } = useSelector((state: RootState) => state.transpateSlice);
  return <div className={s.wrapper}>{popup && <TestPopup></TestPopup>}</div>;
};

export default Popups;
