import React from "react";
import styles from "./lastmenu.module.css";
import { ArrowLeftImg } from "../../../images/ArrowLeftImg";
import {
  isOpenedLastMenuAction,
  isOpenedSubMenuAction,
} from "../../../store/store";
import { useDispatch } from "react-redux";

interface IProps {
  currentMenu?: string;
}

export function LastMenu(props: IProps) {
  const dispatch = useDispatch();

  const handleClickLastMenu = () => {
    dispatch(isOpenedLastMenuAction(false));
    dispatch(isOpenedSubMenuAction(true));
  };

  return (
    <div className={styles.subMenuMain}>
      {/* <div className={styles.headSubMenu} onClick={handleClickLastMenu}>
        <ArrowLeftImg />
        <p>{props.currentMenu}</p>
      </div> */}
      {/* <hr /> */}
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
              Data storage, AI, and analytics solutions for government agencies.
            </p>
          </div>
          <div className={styles.lastMenuItem}>
            <p className={styles.header}>Hybrid Cloud</p>
            <p className={styles.description}>
              Data storage, AI, and analytics solutions for government agencies.
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
  );
}
