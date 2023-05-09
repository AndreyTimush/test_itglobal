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

type ImageObject = {
  [key: string]: () => JSX.Element;
};

const images: ImageObject = {
  ru: RussianImg,
  en: USAImg,
  by: BelarusImg,
  nld: NetherlandsImg,
  kz: KazakhstanImg,
  tr: TurkeyImg,
};

export function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState(images[store.getState().lang]);

  const handleClick = () => {
    if (!isDropdownOpen) setIsDropdownOpen(true);
    else setIsDropdownOpen(false);
  };

  const lang = store.getState().lang;
  useEffect(() => {
    setImgSrc(images[store.getState().lang]);
  }, [lang]);

  return (
    <>
      <div className={styles.headerMain}>
        <div className={styles.language} onClick={handleClick}>
          <div className={styles.lang}>
            <div className={styles.img}>{imgSrc}</div>
            <p>{lang.toUpperCase()}</p>
            <ArrowImg />
          </div>
        </div>
        <CloseImg />
      </div>
      {isDropdownOpen && <DropdownMenu />}
    </>
  );
}
