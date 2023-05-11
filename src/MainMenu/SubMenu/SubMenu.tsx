import React, { useState } from "react";
import styles from "./submenu.module.css";
import { ArrowRightImg } from "../../images/ArrowRightImg";
import { useDispatch, useSelector } from "react-redux";
import {
  RootState,
  choosedLastMenuAction,
  choosedLastMenuKeyAction,
  isOpenedLastMenuAction,
} from "../../store/store";
import { LastMenu } from "./LastMenu";
import { useTranslation } from "react-i18next";

export function SubMenu() {
  const { t } = useTranslation();
  const [textSubMenuClicked, setTextSubMenuClicked] = useState("");
  const showLastMenu = useSelector<RootState, boolean>(
    (state) => state.isOpenedLastMenu
  );

  const dispatch = useDispatch();

  const handleClickLastMenu = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const target = event.target as HTMLDivElement;
    dispatch(choosedLastMenuKeyAction(event.currentTarget.dataset.text));
    if (target && target.textContent) {
      setTextSubMenuClicked(target.textContent);
    }
    dispatch(choosedLastMenuAction(target.textContent));
    dispatch(isOpenedLastMenuAction(true));
  };

  return (
    <>
      {!showLastMenu ? (
        <div className={styles.subMenuMain}>
          <div className={styles.subMenu}>
            <div
              data-text="Cloud computing"
              className={styles.choiceMenu}
              onClick={handleClickLastMenu}
            >
              <p>{t("Cloud computing")}</p>
              <ArrowRightImg />
            </div>
            <div
              data-text="Dedicated servers"
              className={styles.choiceMenu}
              onClick={handleClickLastMenu}
            >
              <p>{t("Dedicated servers")}</p>
              <ArrowRightImg />
            </div>
            <div
              data-text="Platform services"
              className={styles.choiceMenu}
              onClick={handleClickLastMenu}
            >
              <p>{t("Platform services")}</p>
              <ArrowRightImg />
            </div>
            <div
              data-text="Information Security"
              className={styles.choiceMenu}
              onClick={handleClickLastMenu}
            >
              <p>{t("Information Security")}</p>
              <ArrowRightImg />
            </div>
          </div>
        </div>
      ) : (
        <LastMenu currentMenu={textSubMenuClicked} />
      )}
    </>
  );
}
