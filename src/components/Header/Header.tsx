import s from "./header.module.scss";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store.tsx";
import { changeTheme } from "../../store/slices/changeSlice.ts";
import useChangedCss from "../../helper/useChangedCss.ts";
import { useTranslation } from "react-i18next";
const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();
  return (
    <header className={s.header}>
      <h1 className={s.header_title}>
        <a className={s.title} href="/">
          Foculus <span className={s.title_desc}>your english words</span>
        </a>
      </h1>
      <button
        onClick={() => {
          dispatch(changeTheme());
        }}
        className={`${s.btn_swipe} btn ${useChangedCss(s, "btn_swipe")}`}
      >
        {t("swith_theme")}
      </button>
    </header>
  );
};

export default Header;
