import { useDispatch, useSelector } from "react-redux";
import s from "./TestPopup.module.css";

import white from "../../../../assets/close/white.png";
import black from "../../../../assets/close/black.png";
import {
  changePagePopup,
  changeStatePopup,
  closePopup,
} from "../../../../store/slices/transpateSlice.ts";
import type { RootState } from "../../../../store/store.ts";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import ContentAnswer from "./Components/ContentAnswer.tsx";
import ContentFinish from "./Components/ContentFinish.tsx";
type dataType = {
  text: string;
};
const TestPopup = () => {
  const [answer, setAnswer] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { theme } = useSelector((state: RootState) => state.changeSlice);
  const { page, input, textArea } = useSelector(
    (state: RootState) => state.transpateSlice
  );

  const onSubmitResult = ({ text }: dataType): void => {
    const data = text.trim().replace(/^\s+|\s+$/g, "");
    let succes: boolean = false;
    if (input.length) {
      succes = data === input[page - 1].transpated;
    } else {
      succes = data === textArea[page - 1].transpated;
    }
    dispatch(changeStatePopup({ accepte: succes }));
    setAnswer(true);
  };
  const onSumbitChangePage = () => {
    if (
      (input.length && page === input.length) ||
      (textArea.length && page === textArea.length)
    ) {
      dispatch(closePopup());
    }
    dispatch(changePagePopup());
    setAnswer(false);
  };
  return (
    <div className={s.content_wrapper}>
      <div className={s.content}>
        <div className={s.content_inner}>
          <p className={s.nav}>
            {page} із {input.length || textArea.length}
          </p>
          <p className={`${s.show} btn`}>{t("show_answer")}</p>
          <button
            className={s.close}
            onClick={() => {
              dispatch(closePopup());
            }}
          >
            <img src={theme === "white" ? black : white} alt="" />
          </button>
        </div>
        {!answer && (
          <ContentAnswer
            input={input}
            textArea={textArea}
            s={s}
            page={page}
            onSubmitResult={onSubmitResult}
            theme={theme}
          />
        )}
        {answer && (
          <ContentFinish
            input={input}
            textArea={textArea}
            s={s}
            page={page}
            onSumbitChangePage={onSumbitChangePage}
            theme={theme}
          />
        )}
      </div>
      <div
        className={s.wrapper}
        onClick={() => {
          dispatch(closePopup());
        }}
      ></div>
    </div>
  );
};

export default TestPopup;
