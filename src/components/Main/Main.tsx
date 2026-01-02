import s from "./main.module.css";
import InputType from "./Components/InputType/InputType.tsx";
import TextAreaType from "./Components/TextAreaType/TextAreaType.tsx";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store.ts";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n.ts";
import History from "./Components/History/History.tsx";
import { changeDirectionTranslate } from "../../store/slices/transpateSlice.ts";

const Main = () => {
  const {
    changeSlice: { form },
    transpateSlice: { directionTranslate },
  } = useSelector((state: RootState) => state);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const changeLang = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("uk");
    } else {
      i18n.changeLanguage("en");
    }
  };
  return (
    <main className={s.main}>
      <div className={s.main_inner}>
        <button
          onClick={() => {
            dispatch(changeDirectionTranslate());
          }}
          className={`${s.main_inner_btn_lang} ${
            directionTranslate && s.main_inner_btn_lang_active
          } btn`}
        >
          {t("change_arrow_lang")}
        </button>
        <button
          onClick={() => {
            changeLang();
          }}
          className={`${s.change_btn_lang} btn`}
        >
          {t("change_lang")}
        </button>
        <button className={`${s.main_inner_btn_docs} btn`}>{t("docs")}</button>
      </div>
      <div className={s.inner}>
        {form ? <TextAreaType /> : <InputType />}
        <History />
      </div>
    </main>
  );
};

export default Main;
