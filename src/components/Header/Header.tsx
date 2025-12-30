import s from "./header.module.scss";
import imgWhite from "../../assets/swap/white.png";
import imgBlack from "../../assets/swap/black.png";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store.tsx";
import { changeTheme, changeValue } from "../../store/slices/changeSlice.ts";
import useChangedValue from "../../helper/useСhangedValue.ts";
import useChangedCss from "../../helper/useChangedCss.ts";
const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <header className={s.header}>
      <h1 className={s.header_title}>
        <a className={s.title} href="/">
          Foculus <span className={s.title_desc}>your english words</span>
        </a>
      </h1>
      <button
        onClick={() => {
          dispatch(changeValue());
        }}
        className={s.button}
      >
        <img
          src={useChangedValue(imgBlack, imgWhite)}
          alt="button swap content"
        />
      </button>
      <button
        onClick={() => {
          dispatch(changeTheme());
        }}
        className={`${s.btn_swipe} btn ${useChangedCss(s, "btn_swipe")}`}
      >
        Змінити тему
      </button>
    </header>
  );
};

export default Header;
