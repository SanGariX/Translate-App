import { useTranslation } from "react-i18next";
import s from "./TextAreaType.module.css";
import { useForm } from "react-hook-form";
import { writeWords } from "../../../../store/slices/transpateSlice.ts";
import textAreaTransformFromString from "../../../../helper/textAreaTransformFromString.ts";
import { useDispatch } from "react-redux";
type dataType = {
  textarea: string;
};
const TextAreaType = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm<dataType>();
  const onSubmitForm = (data: dataType): void => {
    dispatch(
      writeWords({
        array: textAreaTransformFromString(data.textarea),
        textarea: true,
        input: false,
      })
    );
  };
  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmitForm)}>
      <textarea
        className={`${s.textarea} btn`}
        placeholder={t("translate_placeholder_textarea")}
        {...register("textarea", { required: "This field is required" })}
      ></textarea>
      <p className={s.text}>
        {t("desc_howUseArea_structure")}
        <span>{t("desc_howUseArea_another")}</span> [
        <span>{t("desc_howUseArea_transcription")}</span>] - (—){" "}
        <span>{t("desc_howUseArea_translated")}</span>, ...
        <br />
        {t("desc_howUseArea_or")}
        <br />
        {t("desc_howUseArea_finally")}, ...
      </p>
      <button className={`${s.btn_check} btn`}>
        {t("desc_howUseArea_check")}
      </button>
    </form>
  );
};

export default TextAreaType;
