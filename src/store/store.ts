import { Action, ActionCreator, AnyAction, Reducer } from "redux";

export type RootState = {
  lang: string;
  isOpenedMainMenu: boolean;
  isOpenedSubMenu: boolean;
  isOpenedLastMenu: boolean;
};

const initialState = {
  lang: "en",
  isOpenedMainMenu: false,
  isOpenedSubMenu: false,
  isOpenedLastMenu: false,
};

const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";
const OPENED_MAIN_MENU = "OPENED_MAIN_MENU";
const OPENED_SUB_MENU = "OPENED_SUB_MENU";
const OPENED_LAST_MENU = "OPENED_LAST_MENU";

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
    default:
      return state;
  }
};
