import { useTranslation } from "react-i18next";
import right_white from "../../../../../assets/right/white.png";
import right_black from "../../../../../assets/right/black.png";
import type { stringObjectData } from "../../../../../helper/types.ts";
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
  const answer = () => {
    if (input.length) {
      return input[page - 1].finished;
    }
    return textArea[page - 1].finished;
  };
  const correct = () => {
    let arrayAnswar: stringObjectData[] = [];
    if (input.length) {
      arrayAnswar = input;
    } else {
      arrayAnswar = textArea;
    }
    return `${arrayAnswar[page - 1].translate}${
      arrayAnswar[page - 1].transcription ?? ""
    } — ${arrayAnswar[page - 1].transpated}`;
  };
  return (
    <div className={s.content_answer}>
      {answer() ? (
        <h3 className={s.corect_answer}>Правильна відповідь!</h3>
      ) : (
        <h3 className={s.uncorect_answer}>Не вірна відповідь!</h3>
      )}
      <p className={s.answer_text}>{correct()}</p>
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
