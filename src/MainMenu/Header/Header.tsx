import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import { CloseImg } from "../../images/CloseImg";
import { ArrowImg } from "../../images/ArrowImg";
import { RussianImg } from "../../images/RussianImg";
import { DropdownMenu } from "./DropdownMenu";
import { store } from "../../App";
import { USAImg } from "../../images/USAImg";
import { BelarusImg } from "../../images/BelarusImg";
import { NetherlandsImg } from "../../images/NetherlandsImg";
import { KazakhstanImg } from "../../images/KazakhstanImg";
import { TurkeyImg } from "../../images/TurkeyImg";
import { useDispatch, useSelector } from "react-redux";
import {
  RootState,
  isOpenedMainMenuAction,
  isOpenedSubMenuAction,
  isOpenedLastMenuAction,
  isOpenedDropdownMenuAction,
} from "../../store/store";

type ImageObject = {
  [key: string]: JSX.Element;
};

const images: ImageObject = {
  ru: <RussianImg />,
  en: <USAImg />,
  by: <BelarusImg />,
  nld: <NetherlandsImg />,
  kz: <KazakhstanImg />,
  tr: <TurkeyImg />,
};

export function Header() {
  const dispatch = useDispatch();
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isDropdownOpen = useSelector<RootState, boolean>(
    (state) => state.isOpenedDropdownMenu
  );

  const currentLanguage = useSelector<RootState, string>((state) => state.lang);
  const imgSrc = images[currentLanguage];

  const handleClick = () => {
    dispatch(isOpenedDropdownMenuAction(!isDropdownOpen));
    // if (!isDropDownOpen)
    // dispatch(isOpenedDropdownMenuAction(true))
    // else dispatch(isOpenedDropdownMenuAction(false))
    // if (!isDropdownOpen) setIsDropdownOpen(true);
    // else setIsDropdownOpen(false);
  };

  const handleClickCloseMainMenu = () => {
    dispatch(isOpenedMainMenuAction(false));
    dispatch(isOpenedSubMenuAction(false));
    dispatch(isOpenedLastMenuAction(false));
  };

  return (
    <>
      <div className={styles.headerMain}>
        <div className={styles.language} onClick={handleClick}>
          <div className={styles.lang}>
            <div className={styles.img}>{imgSrc}</div>
            <p>{currentLanguage.toUpperCase()}</p>
            <ArrowImg />
          </div>
        </div>
        <div onClick={handleClickCloseMainMenu}>
          <CloseImg />
        </div>
      </div>
      {isDropdownOpen && <DropdownMenu />}
    </>
  );
}
