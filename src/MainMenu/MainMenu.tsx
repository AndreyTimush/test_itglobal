import React from "react";
import styles from "./mainmenu.module.css";
import { Header } from "./Header";
import { ArrowRightImg } from "../images/ArrowRightImg";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  choosedSubMenuAction,
  isOpenedSubMenuAction,
  RootState,
} from "../store/store";
import { SubMenu } from "./SubMenu";

export function MainMenu() {
  const { t } = useTranslation();

  const showSubMenu = useSelector<RootState, boolean>(
    (state) => state.isOpenedSubMenu
  );

  const dispatch = useDispatch();

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = event.target as HTMLDivElement;
    if (target && target.textContent) {
      console.log(target);
      dispatch(choosedSubMenuAction(target.textContent));
    }
    dispatch(isOpenedSubMenuAction(true));
  };

  return (
    <div className={styles.main}>
      <Header />
      {!showSubMenu && (
        <div className={styles.menu} onClick={handleClick}>
          <div className={styles.choiceMenu}>
            <p>{t("Services")}</p>
            <ArrowRightImg />
          </div>
          <div className={styles.choiceMenu}>
            <p>{t("Managed IT")}</p>
            <ArrowRightImg />
          </div>
          <div className={styles.choiceMenu}>
            <p>{t("Telecom Solutions")}</p>
            <ArrowRightImg />
          </div>
          <div className={styles.choiceMenu}>
            <p>{t("About Us")}</p>
            <ArrowRightImg />
          </div>
        </div>
      )}
      {!showSubMenu && (
        <div className={styles.footer}>
          <p>{t("Contacts")}</p>
          <p>{t("Search")}</p>
        </div>
      )}

      {showSubMenu && <SubMenu />}
    </div>
  );
}
