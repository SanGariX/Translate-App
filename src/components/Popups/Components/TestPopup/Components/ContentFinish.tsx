import { useTranslation } from "react-i18next";
import right_white from "../../../../../assets/right/white.png";
import right_black from "../../../../../assets/right/black.png";
import micr_white from "../../../../../assets/micr/white.png";
import micr_black from "../../../../../assets/micr/black.png";
import type { stringObjectData } from "../../../../../helper/types.ts";
import takeCorrectArray from "../../../../../helper/takeCorrectArray.ts";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../../store/store.ts";
type ContentFinishType = {
  input: stringObjectData[];
  textArea: stringObjectData[];
  s: Record<string, string>;
  page: number;
  onSumbitChangePage: () => void;
  theme: string;
};
const ContentFinish = ({
  s,
  onSumbitChangePage,
  theme,
  input,
  textArea,
  page,
}: ContentFinishType) => {
  const { t } = useTranslation();
  const { directionTranslate } = useSelector(
    (state: RootState) => state.transpateSlice
  );
  const answer = (): stringObjectData => {
    return takeCorrectArray(input, textArea, page);
  };

  const correct = () => {
    return `${answer().translate}${
      answer().transcription ? `${answer().transcription}` : ""
    } — ${answer().transpated}`;
  };

  return (
    <div className={s.content_answer}>
      {answer().finished ? (
        <h3 className={s.corect_answer}>{t("corect_answer")}</h3>
      ) : (
        <h3 className={s.uncorect_answer}>{t("incorect_answer")}</h3>
      )}
      <div className={s.answer_text_inner}>
        <p className={s.answer_text}>{correct()}</p>
        <button
          className={s.answer_micr_btn}
          onClick={() => {
            speechSynthesis.speak(
              new SpeechSynthesisUtterance(
                directionTranslate ? answer().transpated : answer().translate
              )
            );
          }}
        >
          <img src={theme === "white" ? micr_black : micr_white} alt="micr" />
        </button>
      </div>
      <button
        onClick={() => {
          onSumbitChangePage();
        }}
        className={`${s.btn} btn`}
      >
        {t("check_answer")}{" "}
        <img src={theme === "white" ? right_black : right_white} alt="right" />
      </button>
    </div>
  );
};

export default ContentFinish;
