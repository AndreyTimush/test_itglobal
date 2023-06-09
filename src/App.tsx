import { MainMenu } from "./MainMenu";
import "./styles.global.module.css";
import styles from "./App.module.css";
import { BurgerMenuImg } from "./images/BurgerMenuImg";
import { createStore } from "redux";
import { initReactI18next, useTranslation } from "react-i18next";
import i18n from "i18next";
import translationRu from "./locales/ru.json";
import translationEn from "./locales/en.json";
import translationBy from "./locales/by.json";
import translationTr from "./locales/tr.json";
import translationKz from "./locales/kz.json";
import translationNld from "./locales/nld.json";

import { composeWithDevTools } from "redux-devtools-extension";
import { Provider, useDispatch, useSelector } from "react-redux";
import { RootState, isOpenedMainMenuAction, rootReducer } from "./store/store";

export const store = createStore(rootReducer, composeWithDevTools());

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  resources: {
    en: {
      translation: translationEn,
    },
    ru: {
      translation: translationRu,
    },
    by: {
      translation: translationBy,
    },
    tr: {
      translation: translationTr,
    },
    nld: {
      translation: translationNld,
    },
    kz: {
      translation: translationKz,
    },
  },
});

function App() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleClick = () => {
    dispatch(isOpenedMainMenuAction(true));
  };

  const openedMenu = useSelector<RootState, boolean>(
    (state) => state.isOpenedMainMenu
  );

  return (
    <>
      {!openedMenu ? (
        <>
          <div className={styles.burgerMenu} onClick={handleClick}>
            <BurgerMenuImg />
          </div>
          <div className={styles.mainPage}>
            <h1>{t("Main page")}</h1>
          </div>
        </>
      ) : (
        <MainMenu />
      )}
    </>
  );
}

const WrappedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default WrappedApp;
