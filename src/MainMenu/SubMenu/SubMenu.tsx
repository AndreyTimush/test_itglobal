import React, { useState } from "react";
import styles from "./submenu.module.css";
import { ArrowLeftImg } from "../../images/ArrowLeftImg";
import { ArrowRightImg } from "../../images/ArrowRightImg";
import { useDispatch, useSelector } from "react-redux";
import {
  RootState,
  choosedLastMenuAction,
  isOpenedLastMenuAction,
  isOpenedSubMenuAction,
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

  const handleClickMainMenu = () => {
    dispatch(isOpenedSubMenuAction(false));
  };

  const handleClickLastMenu = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const target = event.target as HTMLDivElement;
    if (target && target.textContent) {
      setTextSubMenuClicked(target.textContent);
    }
    dispatch(choosedLastMenuAction(target.textContent));
    dispatch(isOpenedLastMenuAction(true));
  };

  const choosedMenu = useSelector<RootState, string>(
    (state) => state.choosedSubMenu
  );

  return (
    <>
      {!showLastMenu ? (
        <div className={styles.subMenuMain}>
          {/* <div className={styles.headSubMenu} onClick={handleClickMainMenu}>
            <ArrowLeftImg />
            <p>{choosedMenu}</p>
          </div> */}
          <div className={styles.subMenu} onClick={handleClickLastMenu}>
            <div className={styles.choiceMenu}>
              <p>{t("cloudComputing")}</p>
              <ArrowRightImg />
            </div>
            <div className={styles.choiceMenu}>
              <p>{t("dedicatedServers")}</p>
              <ArrowRightImg />
            </div>
            <div className={styles.choiceMenu}>
              <p>{t("platformServices")}</p>
              <ArrowRightImg />
            </div>
            <div className={styles.choiceMenu}>
              <p>{t("informationSecurity")}</p>
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
