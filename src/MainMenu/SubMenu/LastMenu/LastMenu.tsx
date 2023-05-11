import styles from "./lastmenu.module.css";
import { useTranslation } from "react-i18next";

interface IProps {
  currentMenu?: string;
}

export function LastMenu(props: IProps) {
  const { t } = useTranslation();

  return (
    <div className={styles.subMenuMain}>
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
