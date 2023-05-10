import { ActionCreator, AnyAction, Reducer } from "redux";

export type RootState = {
  lang: string;
  isOpenedMainMenu: boolean;
  isOpenedSubMenu: boolean;
  isOpenedLastMenu: boolean;
  choosedSubMenu: string;
};

const initialState = {
  lang: "en",
  isOpenedMainMenu: false,
  isOpenedSubMenu: false,
  isOpenedLastMenu: false,
  choosedSubMenu: "",
};

const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";
const OPENED_MAIN_MENU = "OPENED_MAIN_MENU";
const OPENED_SUB_MENU = "OPENED_SUB_MENU";
const OPENED_LAST_MENU = "OPENED_LAST_MENU";
const CHOOSED_SUB_MENU = "CHOOSED_SUB_MENU";

export const changeLanguage: ActionCreator<AnyAction> = (lang) => ({
  type: CHANGE_LANGUAGE,
  lang,
});

export const isOpenedMainMenuAction: ActionCreator<AnyAction> = (
  isOpenedMainMenu
) => ({
  type: OPENED_MAIN_MENU,
  isOpenedMainMenu,
});

export const isOpenedSubMenuAction: ActionCreator<AnyAction> = (
  isOpenedSubMenu
) => ({
  type: OPENED_SUB_MENU,
  isOpenedSubMenu,
});

export const isOpenedLastMenuAction: ActionCreator<AnyAction> = (
  isOpenedLastMenu
) => ({
  type: OPENED_LAST_MENU,
  isOpenedLastMenu,
});

export const choosedSubMenuAction: ActionCreator<AnyAction> = (
  choosedSubMenu
) => ({
  type: CHOOSED_SUB_MENU,
  choosedSubMenu,
});

export const rootReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        lang: action.lang,
      };
    case OPENED_MAIN_MENU:
      return {
        ...state,
        isOpenedMainMenu: action.isOpenedMainMenu,
      };
    case OPENED_SUB_MENU:
      return {
        ...state,
        isOpenedSubMenu: action.isOpenedSubMenu,
      };
    case OPENED_LAST_MENU:
      return {
        ...state,
        isOpenedLastMenu: action.isOpenedLastMenu,
      };
    case CHOOSED_SUB_MENU:
      return {
        ...state,
        choosedSubMenu: action.choosedSubMenu,
      };
    default:
      return state;
  }
};
