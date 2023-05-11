import React from "react";
import styles from "./dropdownmenu.module.css";
import { USAImg } from "../../../images/USAImg";
import { NetherlandsImg } from "../../../images/NetherlandsImg";
import { BelarusImg } from "../../../images/BelarusImg";
import { RussianImg } from "../../../images/RussianImg";
import { KazakhstanImg } from "../../../images/KazakhstanImg";
import { TurkeyImg } from "../../../images/TurkeyImg";
import { useTranslation } from "react-i18next";
import { SelectImg } from "../../../images/SelectImg";
import { useDispatch, useSelector } from "react-redux";
import { choosedLastMenuAction } from "../../../store/store";
import {
  RootState,
  changeLanguage,
  choosedSubMenuAction,
  isOpenedDropdownMenuAction,
} from "../../../store/store";

export function DropdownMenu() {
  const dispatch = useDispatch();
  const { i18n, t } = useTranslation();
  const currentLanguage = useSelector<RootState, string>((state) => state.lang);

  const choosedSubMenuKey = useSelector<RootState, string>(
    (state) => state.choosedSubMenuKey
  );

  const choosedLastMenuKey = useSelector<RootState, string>(
    (state) => state.choosedLastMenuKey
  );

  const isOpenedSubMenu = useSelector<RootState, boolean>(
    (state) => state.isOpenedSubMenu
  );

  const isOpenedLastMenu = useSelector<RootState, boolean>(
    (state) => state.isOpenedLastMenu
  );

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.currentTarget;

    dispatch(isOpenedDropdownMenuAction(false));

    const lang: string =
      target.getAttribute("data-country") ||
      target.parentElement?.getAttribute("data-country") ||
      "";

    if (lang !== null) {
      i18n.changeLanguage(lang);
      dispatch(changeLanguage(lang));
      if (isOpenedLastMenu)
        dispatch(choosedLastMenuAction(t(choosedLastMenuKey)));
      if (isOpenedSubMenu) dispatch(choosedSubMenuAction(t(choosedSubMenuKey)));
    }
  };

  return (
    <div className={styles.languages}>
      <div className={styles.country}>
        <p>Страна</p>
      </div>

      <div
        data-country="en"
        style={{ backgroundColor: currentLanguage === "en" ? "#F1F8FE" : "" }}
        className={styles.country}
        onClick={handleClick}
      >
        <div className={styles.line}>
          <div className={styles.flagAndCountry}>
            <USAImg />
            <p style={{ pointerEvents: "none" }}>США</p>
          </div>
          <div>{currentLanguage === "en" && <SelectImg />}</div>
        </div>
      </div>
      <div
        data-country="nld"
        style={{ backgroundColor: currentLanguage === "nld" ? "#F1F8FE" : "" }}
        className={styles.country}
        onClick={handleClick}
      >
        <div className={styles.line}>
          <div className={styles.flagAndCountry}>
            <NetherlandsImg />
            <p style={{ pointerEvents: "none" }}>Нидерланды</p>
          </div>
          <div>{currentLanguage === "nld" && <SelectImg />}</div>
        </div>
      </div>
      <div
        data-country="by"
        style={{ backgroundColor: currentLanguage === "by" ? "#F1F8FE" : "" }}
        className={styles.country}
        onClick={handleClick}
      >
        <div className={styles.line}>
          <div className={styles.flagAndCountry}>
            <BelarusImg />
            <p style={{ pointerEvents: "none" }}>Беларусь</p>
          </div>
          <div>{currentLanguage === "by" && <SelectImg />}</div>
        </div>
      </div>
      <div
        data-country="ru"
        style={{ backgroundColor: currentLanguage === "ru" ? "#F1F8FE" : "" }}
        className={styles.country}
        onClick={handleClick}
      >
        <div className={styles.line}>
          <div className={styles.flagAndCountry}>
            <RussianImg />
            <p style={{ pointerEvents: "none" }}>Россия</p>
          </div>
          <div>{currentLanguage === "ru" && <SelectImg />}</div>
        </div>
      </div>
      <div
        data-country="kz"
        style={{ backgroundColor: currentLanguage === "kz" ? "#F1F8FE" : "" }}
        className={styles.country}
        onClick={handleClick}
      >
        <div className={styles.line}>
          <div className={styles.flagAndCountry}>
            <KazakhstanImg />
            <p style={{ pointerEvents: "none" }}>Казахстан</p>
          </div>
          <div>{currentLanguage === "kz" && <SelectImg />}</div>
        </div>
      </div>
      <div
        data-country="tr"
        style={{ backgroundColor: currentLanguage === "tr" ? "#F1F8FE" : "" }}
        className={styles.country}
        onClick={handleClick}
      >
        <div className={styles.line}>
          <div className={styles.flagAndCountry}>
            <TurkeyImg />
            <p>Турция</p>
          </div>
          <div>{currentLanguage === "tr" && <SelectImg />}</div>
        </div>
      </div>
    </div>
  );
}
