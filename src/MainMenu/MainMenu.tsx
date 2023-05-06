import React from "react";
import styles from "./mainmenu.module.css";
import { Header } from "./Header";

export function MainMenu() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.menu}>
        <p>Services</p>
        <p>Managed IT</p>
        <p>Telecom Solutions</p>
        <p>About Us</p>
      </div>
      <div className={styles.footer}>
        <p>Контакты</p>
        <p>Поиск</p>
      </div>
    </div>
  );
}
