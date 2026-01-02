const translatePlaceholder = (
  t: (data: string) => void,
  directionTranslate: boolean
) => {
  if (directionTranslate) {
    return `${t("desc_howUseArea_structure")} ${t(
      "desc_howUseArea_another"
    )} ${t("desc_howUseArea_transcription")}] — ${t(
      "desc_howUseArea_translated"
    )}`;
  } else {
    return `${t("desc_howUseArea_structure")} ${t(
      "desc_howUseArea_another_reverse"
    )} ${t("desc_howUseArea_transcription")}] — ${t(
      "desc_howUseArea_translated_reverse"
    )}`;
  }
};
export default translatePlaceholder;
