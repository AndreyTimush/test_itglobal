import React, { useState } from "react";
import styles from "./submenu.module.css";
import { ArrowLeftImg } from "../../images/ArrowLeftImg";
import { ArrowRightImg } from "../../images/ArrowRightImg";
import { useDispatch, useSelector } from "react-redux";
import {
  RootState,
  isOpenedLastMenuAction,
  isOpenedSubMenuAction,
} from "../../store/store";
import { LastMenu } from "./LastMenu";

export function SubMenu() {
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
      ) : (
        <LastMenu currentMenu={textSubMenuClicked} />
      )}
    </>
  );
}
