import { useDispatch, useSelector } from "react-redux";
import s from "./History.module.css";
import type { RootState } from "../../../../store/store.ts";
import { writeWords } from "../../../../store/slices/transpateSlice.ts";
import ItemHistory from "./Components/itemHistory.tsx";
import { useTranslation } from "react-i18next";
const History = () => {
  const { history } = useSelector((state: RootState) => state.transpateSlice);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const handleClickHistory = (evt: React.MouseEvent<HTMLElement>) => {
    const items = evt.currentTarget.dataset.item;
    if (!items) return;
    dispatch(
      writeWords({
        array: JSON.parse(items),
        textarea: true,
        input: false,
        history: true,
      })
    );
  };
  return (
    <div className={s.history}>
      <h2 className={s.history_title}>{t("history_translation")}</h2>
      <ul className={s.list}>
        {history.map((item, idx) => (
          <ItemHistory
            key={idx}
            item={item}
            handleClickHistory={handleClickHistory}
          />
        ))}
      </ul>
    </div>
  );
};

export default History;
