import s from "../History.module.css";
import type { stringObjectData } from "../../../../../helper/types.ts";
import { useTranslation } from "react-i18next";
type ItemHistoryType = {
  item: stringObjectData[];
  handleClickHistory: (evt: React.MouseEvent<HTMLElement>) => void;
};
const ItemHistory = ({ item, handleClickHistory }: ItemHistoryType) => {
  const { t } = useTranslation();
  return (
    <li
      onClick={handleClickHistory}
      className={s.list_item}
      data-item={JSON.stringify(item)}
    >
      <p className={s.list_item_text}>
        {item[0].translate} - {item[0].transpated}
      </p>
      <p className={s.list_item_length}>
        {item.length} {t("history_words")}
      </p>
    </li>
  );
};

export default ItemHistory;
