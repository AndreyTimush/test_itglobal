import React from "react";
import styles from "./lastmenu.module.css";
import { ArrowLeftImg } from "../../../images/ArrowLeftImg";
import {
  isOpenedLastMenuAction,
  isOpenedSubMenuAction,
} from "../../../store/store";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

interface IProps {
  currentMenu?: string;
}

export function LastMenu(props: IProps) {
  const dispatch = useDispatch();
  const { t } = useTranslation();

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
            <p className={styles.header}>{t("cloudConsulting")}</p>
            <p className={styles.description}>{t("descrCloudConsulting")}</p>
          </div>
          <div className={styles.lastMenuItem}>
            <p className={styles.header}>{t("cloudInfrastructureAnalytics")}</p>
            <p className={styles.description}>
              {t("descrCloudInfrastructureAnalytics")}
            </p>
          </div>
          <div className={styles.lastMenuItem}>
            <p className={styles.header}>{t("hybridCloud")}</p>
            <p className={styles.description}>{t("descrHybridCloud")}</p>
          </div>
          <div className={styles.lastMenuItem}>
            <p className={styles.header}>{t("hybridCloud")}</p>
            <p className={styles.description}>{t("descrHybridCloud")}</p>
          </div>
          <div className={styles.lastMenuItem}>
            <p className={styles.header}> {t("multiCloud")}</p>
            <p className={styles.description}>{t("descrMultiCloud")}</p>
          </div>
          <div className={styles.lastMenuItem}>
            <p className={styles.header}> {t("multiCloud")}</p>
            <p className={styles.description}>{t("descrMultiCloud")}</p>
          </div>
          <div className={styles.lastMenuItem}>
            <p className={styles.header}> {t("multiCloud")}</p>
            <p className={styles.description}>{t("descrMultiCloud")}</p>
          </div>
          <div className={styles.lastMenuItem}>
            <p className={styles.header}> {t("multiCloud")}</p>
            <p className={styles.description}>{t("descrMultiCloud")}</p>
          </div>
          <div className={styles.lastMenuItem}>
            <p className={styles.header}> {t("multiCloud")}</p>
            <p className={styles.description}>{t("descrMultiCloud")}</p>
          </div>
          <div className={styles.lastMenuItem}>
            <p className={styles.header}> {t("multiCloud")}</p>
            <p className={styles.description}>{t("descrMultiCloud")}</p>
          </div>
          <div className={styles.lastMenuItem}>
            <p className={styles.header}> {t("multiCloud")}</p>
            <p className={styles.description}>{t("descrMultiCloud")}</p>
          </div>
          <div className={styles.lastMenuItem}>
            <p className={styles.header}> {t("multiCloud")}</p>
            <p className={styles.description}>{t("descrMultiCloud")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
