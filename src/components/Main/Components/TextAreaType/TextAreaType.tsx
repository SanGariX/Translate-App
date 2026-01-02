import { useTranslation } from "react-i18next";
import s from "./TextAreaType.module.css";
import { useForm } from "react-hook-form";
import { writeWords } from "../../../../store/slices/transpateSlice.ts";
import textAreaTransformFromString from "../../../../helper/textAreaTransformFromString.ts";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../store/store.ts";
import translatePlaceholder from "../../../../helper/translatePlaceholder.ts";
type dataType = {
  textarea: string;
};
const TextAreaType = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm<dataType>();
  const { directionTranslate } = useSelector(
    (state: RootState) => state.transpateSlice
  );
  const onSubmitForm = (data: dataType): void => {
    dispatch(
      writeWords({
        array: textAreaTransformFromString(data.textarea, directionTranslate),
        textarea: true,
        input: false,
      })
    );
  };
  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmitForm)}>
      <textarea
        className={`${s.textarea} btn`}
        placeholder={translatePlaceholder(t, directionTranslate)}
        {...register("textarea", { required: "This field is required" })}
      ></textarea>
      <button className={`${s.btn_check} btn`}>
        {t("desc_howUseArea_check")}
      </button>
    </form>
  );
};

export default TextAreaType;
