import React from "react";
import styles from "./mainmenu.module.css";
import { Header } from "./Header";
import { ArrowRightImg } from "../images/ArrowRightImg";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  choosedSubMenuAction,
  choosedSubMenuKeyAction,
  isOpenedContactsAction,
  isOpenedSearchAction,
  isOpenedSubMenuAction,
  RootState,
} from "../store/store";
import { SubMenu } from "./SubMenu";
import { ArrowLeftImg } from "../images/ArrowLeftImg";

export function MainMenu() {
  const { t } = useTranslation();

  const showSubMenu = useSelector<RootState, boolean>(
    (state) => state.isOpenedSubMenu
  );

  const dispatch = useDispatch();

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = event.target as HTMLDivElement;

    dispatch(choosedSubMenuKeyAction(event.currentTarget.dataset.text));

    if (target && target.textContent) {
      dispatch(choosedSubMenuAction(target.textContent));
    }

    dispatch(isOpenedSubMenuAction(true));
  };

  const handleClickContacts = () => {
    dispatch(isOpenedContactsAction(true));
  };

  const handleClickSearch = () => {
    dispatch(isOpenedSearchAction(true));
  };

  const isOpenedContacts = useSelector<RootState, boolean>(
    (state) => state.isOpenedContacts
  );

  const isOpenedSearch = useSelector<RootState, boolean>(
    (state) => state.isOpenedSearch
  );

  const handleClickEmptyPage = () => {
    dispatch(isOpenedContactsAction(false));
    dispatch(isOpenedSearchAction(false));
  };

  return (
    <div className={styles.main}>
      <Header />
      {!showSubMenu && !isOpenedContacts && !isOpenedSearch && (
        <div className={styles.menu}>
          <div
            data-text="Services"
            className={styles.choiceMenu}
            onClick={handleClick}
          >
            <p>{t("Services")}</p>
            <ArrowRightImg />
          </div>
          <div
            data-text="Managed IT"
            className={styles.choiceMenu}
            onClick={handleClick}
          >
            <p>{t("Managed IT")}</p>
            <ArrowRightImg />
          </div>
          <div
            data-text="Telecom Solutions"
            className={styles.choiceMenu}
            onClick={handleClick}
          >
            <p>{t("Telecom Solutions")}</p>
            <ArrowRightImg />
          </div>
          <div
            data-text="About Us"
            className={styles.choiceMenu}
            onClick={handleClick}
          >
            <p>{t("About Us")}</p>
            <ArrowRightImg />
          </div>
        </div>
      )}
      {!showSubMenu && !isOpenedContacts && !isOpenedSearch && (
        <div className={styles.footer}>
          <div onClick={handleClickContacts}>
            <p>{t("Contacts")}</p>
          </div>
          <div onClick={handleClickSearch}>
            <p>{t("Search")}</p>
          </div>
        </div>
      )}
      {isOpenedContacts && (
        <div className={styles.emptyPage} onClick={handleClickEmptyPage}>
          <ArrowLeftImg />
          <h1>{t("Contacts")}</h1>
        </div>
      )}
      {isOpenedSearch && (
        <div className={styles.emptyPage} onClick={handleClickEmptyPage}>
          <ArrowLeftImg />
          <h1>{t("Search")}</h1>
        </div>
      )}

      {showSubMenu && <SubMenu />}
    </div>
  );
}
