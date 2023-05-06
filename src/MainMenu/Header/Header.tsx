import React from "react";
import styles from "./header.module.css";
import { CloseImg } from "../../images/CloseImg";
import { ArrowImg } from "../../images/ArrowImg";
import { RussianImg } from "../../images/RussianImg";

export function Header() {
  return (
    <div className={styles.headerMain}>
      <div className={styles.lang}>
        <div className={styles.img}>
          <RussianImg />
        </div>
        <p>Ru</p>
        <ArrowImg />
      </div>
      <CloseImg />
    </div>
  );
}
