import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import right_white from "../../../../../assets/right/white.png";
import right_black from "../../../../../assets/right/black.png";
import type { stringObjectData } from "../../../../../helper/types.ts";
type dataType = {
  text: string;
};

type ContentAnswerType = {
  input: stringObjectData[];
  textArea: stringObjectData[];
  s: Record<string, string>;
  page: number;
  onSubmitResult: (data: dataType) => void;
  theme: string;
};
const ContentAnswer = ({
  input,
  textArea,
  s,
  page,
  onSubmitResult,
  theme,
}: ContentAnswerType) => {
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm<dataType>();
  return (
    <>
      <h3 className={s.title}>{t("title_tranlation_popup")}</h3>
      <h3 className={s.translate}>
        {input.length
          ? input[page - 1].translate
          : textArea[page - 1].translate}
      </h3>
      <form className={s.form} onSubmit={handleSubmit(onSubmitResult)}>
        <input
          className={`${s.input} btn`}
          type="text"
          {...register("text", { required: "This field is required" })}
        />
        <button className={`${s.btn} btn`}>
          {t("check_answer")}{" "}
          <img
            src={theme === "white" ? right_black : right_white}
            alt="right"
          />
        </button>
      </form>
    </>
  );
};

export default ContentAnswer;
