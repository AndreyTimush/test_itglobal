import React, { MouseEventHandler, useState } from "react";
import styles from "./mainmenu.module.css";
import { Header } from "./Header";
import { ArrowRightImg } from "../images/ArrowRightImg";
import { SubMenu } from "./SubMenu";
import { ArrowLeftImg } from "../images/ArrowLeftImg";
import { useTranslation } from "react-i18next";

export function MainMenu() {
  const { t } = useTranslation();
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [textClicked, setTextClicked] = useState("");
  const [textSubMenuClicked, setTextSubMenuClicked] = useState("");
  const [showSubSubMenu, setShowSubSubMenu] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = event.target as HTMLDivElement;
    if (target && target.textContent) {
      setTextClicked(target.textContent);
      console.log(target);
    }
    setShowSubMenu(true);
  };

  const handleClickSubMenu = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setShowSubMenu(false);
    setTextClicked("");
  };

  const handleClickSubSubMenu = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const target = event.target as HTMLDivElement;
    if (target && target.textContent) {
      setTextSubMenuClicked(target.textContent);
      console.log(target);
    }
    setShowSubSubMenu(true);
  };

  const handleClickLastMenu = () => {
    setShowSubSubMenu(false);
    setTextSubMenuClicked("");
  };

  return (
    <div className={styles.main}>
      <Header />
      {!showSubMenu && (
        <div className={styles.menu} onClick={handleClick}>
          <div className={styles.choiceMenu}>
            <p>{t("services")}</p>
            <ArrowRightImg />
          </div>
          <div className={styles.choiceMenu}>
            <p>{t("managedIT")}</p>
            <ArrowRightImg />
          </div>
          <div className={styles.choiceMenu}>
            <p>{t("telecomSolutions")}</p>
            <ArrowRightImg />
          </div>
          <div className={styles.choiceMenu}>
            <p>{t("aboutUs")}</p>
            <ArrowRightImg />
          </div>
        </div>
      )}
      {!showSubMenu && (
        <div className={styles.footer}>
          <p>{t("contacts")}</p>
          <p>{t("search")}</p>
        </div>
      )}

      {showSubMenu && !showSubSubMenu && (
        <div className={styles.subMenuMain}>
          <div className={styles.headSubMenu} onClick={handleClickSubMenu}>
            <ArrowLeftImg />
            <p>{textClicked}</p>
          </div>
          <div className={styles.subMenu} onClick={handleClickSubSubMenu}>
            <div className={styles.choiceMenu}>
              <p>Облачные вычисления</p>
              <ArrowRightImg />
            </div>
            <div className={styles.choiceMenu}>
              <p>Выделенные серверы</p>
              <ArrowRightImg />
            </div>
            <div className={styles.choiceMenu}>
              <p>Платформенные сервисы</p>
              <ArrowRightImg />
            </div>
            <div className={styles.choiceMenu}>
              <p>Информационная безопасность</p>
              <ArrowRightImg />
            </div>
          </div>
        </div>
      )}
      {showSubSubMenu && (
        <div className={styles.subMenuMain}>
          <div className={styles.headSubMenu} onClick={handleClickLastMenu}>
            <ArrowLeftImg />
            <p>{textSubMenuClicked}</p>
          </div>
          <hr />
          <div className={styles.lastMenu}>
            <div className={styles.lastMenuItems}>
              <div className={styles.lastMenuItem}>
                <p className={styles.header}>Cloud consulting</p>
                <p className={styles.description}>
                  Relational database services for MySQL, PostgerSQL, and SQL
                  server.
                </p>
              </div>
              <div className={styles.lastMenuItem}>
                <p className={styles.header}>Cloud infrastructure analytics</p>
                <p className={styles.description}>
                  Health-specific solutions to enhance the patient experience.
                </p>
              </div>
              <div className={styles.lastMenuItem}>
                <p className={styles.header}>Hybrid Cloud</p>
                <p className={styles.description}>
                  Data storage, AI, and analytics solutions for government
                  agencies.
                </p>
              </div>
              <div className={styles.lastMenuItem}>
                <p className={styles.header}>Hybrid Cloud</p>
                <p className={styles.description}>
                  Data storage, AI, and analytics solutions for government
                  agencies.
                </p>
              </div>
              <div className={styles.lastMenuItem}>
                <p className={styles.header}> MultiCloud</p>
                <p className={styles.description}>
                  Relational database services for MySQL, PostgreSQL, and SQL
                  server.
                </p>
              </div>
              <div className={styles.lastMenuItem}>
                <p className={styles.header}> MultiCloud</p>
                <p className={styles.description}>
                  Relational database services for MySQL, PostgreSQL, and SQL
                  server.
                </p>
              </div>
              <div className={styles.lastMenuItem}>
                <p className={styles.header}> MultiCloud</p>
                <p className={styles.description}>
                  Relational database services for MySQL, PostgreSQL, and SQL
                  server.
                </p>
              </div>
              <div className={styles.lastMenuItem}>
                <p className={styles.header}> MultiCloud</p>
                <p className={styles.description}>
                  Relational database services for MySQL, PostgreSQL, and SQL
                  server.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
