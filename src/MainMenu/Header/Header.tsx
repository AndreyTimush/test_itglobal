import styles from "./header.module.css";
import { CloseImg } from "../../images/CloseImg";
import { ArrowImg } from "../../images/ArrowImg";
import { RussianImg } from "../../images/RussianImg";
import { DropdownMenu } from "./DropdownMenu";
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
  choosedLastMenuAction,
  choosedSubMenuAction,
} from "../../store/store";
import { ArrowLeftImg } from "../../images/ArrowLeftImg";

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
  const isDropdownOpen = useSelector<RootState, boolean>(
    (state) => state.isOpenedDropdownMenu
  );

  const currentLanguage = useSelector<RootState, string>((state) => state.lang);
  const imgSrc = images[currentLanguage];

  const handleClick = () => {
    dispatch(isOpenedDropdownMenuAction(!isDropdownOpen));
  };

  const handleClickCloseMainMenu = () => {
    dispatch(isOpenedMainMenuAction(false));
    dispatch(isOpenedSubMenuAction(false));
    dispatch(isOpenedLastMenuAction(false));
  };

  const styleLang = {
    background: "rgba(29, 125, 237, 0.1)",
    border: "2px solid rgba(131, 188, 255, 0.5)",
    borderRadius: "2px",
  };

  const choosedSubMenu = useSelector<RootState, string>(
    (state) => state.choosedSubMenu
  );

  const choosedLastMenu = useSelector<RootState, string>(
    (state) => state.choosedLastMenu
  );

  const handleClickBack = () => {
    if (choosedLastMenu) {
      dispatch(choosedLastMenuAction(""));
      dispatch(isOpenedLastMenuAction(false));
    } else {
      dispatch(choosedSubMenuAction(""));
      dispatch(isOpenedSubMenuAction(false));
    }
  };

  const isOpenedLastMenu = useSelector<RootState, boolean>(
    (state) => state.isOpenedLastMenu
  );

  const isOpenedSubMenu = useSelector<RootState, boolean>(
    (state) => state.isOpenedSubMenu
  );

  console.log("choosedLastMenu - ", choosedLastMenu);

  return (
    <>
      <div className={styles.headerMain}>
        <div className={styles.langAndClose}>
          <div
            className={styles.lang}
            onClick={handleClick}
            style={isDropdownOpen ? styleLang : {}}
          >
            <div className={styles.img}>{imgSrc}</div>
            <p>{currentLanguage.toUpperCase()}</p>
            <ArrowImg />
          </div>
          <div className={styles.closeImg} onClick={handleClickCloseMainMenu}>
            <CloseImg />
          </div>
        </div>
        {(isOpenedLastMenu || isOpenedSubMenu) && (
          <div className={styles.nameMenu} onClick={handleClickBack}>
            <div className={styles.image}>
              <ArrowLeftImg />
            </div>
            <p>{choosedLastMenu ? choosedLastMenu : choosedSubMenu}</p>
          </div>
        )}
        {isOpenedLastMenu && <hr />}
      </div>
      {isDropdownOpen && <DropdownMenu />}
    </>
  );
}
