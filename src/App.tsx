import React, { useState } from "react";
import { MainMenu } from "./MainMenu";
import "./styles.global.module.css";
import styles from "./App.module.css";
import { BurgerMenuImg } from "./images/BurgerMenuImg";
import { reducer } from "./store/reducer";
import { createStore } from "redux";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import translationRu from "./locales/ru.json";
import translationEn from "./locales/en.json";

export const store = createStore(reducer);

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
  },
});

function App() {
  const [openedMenu, setOpenedMenu] = useState(false);

  const handleClick = () => {
    setOpenedMenu(true);
  };

  return (
    <>
      {!openedMenu && (
        <>
          <div className={styles.burgerMenu} onClick={handleClick}>
            <BurgerMenuImg />
          </div>
          <div className={styles.mainPage}>
            <h1>Main page</h1>
          </div>
        </>
      )}
      {openedMenu && <MainMenu />}
    </>
  );
}

export default App;
