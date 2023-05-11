import { ActionCreator, AnyAction, Reducer } from "redux";

export type RootState = {
  lang: string;
  isOpenedMainMenu: boolean;
  isOpenedSubMenu: boolean;
  isOpenedLastMenu: boolean;
  choosedSubMenu: string;
  isOpenedDropdownMenu: boolean;
  choosedLastMenu: string;
  choosedSubMenuKey: string;
  choosedLastMenuKey: string;
  isOpenedContacts: boolean;
  isOpenedSearch: boolean;
};

const initialState = {
  lang: "en",
  isOpenedMainMenu: false,
  isOpenedSubMenu: false,
  isOpenedLastMenu: false,
  choosedSubMenu: "",
  choosedLastMenu: "",
  isOpenedDropdownMenu: false,
  choosedSubMenuKey: "",
  choosedLastMenuKey: "",
  isOpenedContacts: false,
  isOpenedSearch: false,
};

const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";
const OPENED_MAIN_MENU = "OPENED_MAIN_MENU";
const OPENED_SUB_MENU = "OPENED_SUB_MENU";
const OPENED_LAST_MENU = "OPENED_LAST_MENU";
const CHOOSED_SUB_MENU = "CHOOSED_SUB_MENU";
const CHOOSED_LAST_MENU = "CHOOSED_LAST_MENU";
const OPENED_DROWPDOWN_MENU = "OPENED_DROWPDOWN_MENU";
const CHOOSED_SUB_MENU_KEY = "CHOOSED_SUB_MENU_KEY";
const CHOOSED_LAST_MENU_KEY = "CHOOSED_LAST_MENU_KEY";
const IS_OPENED_CONTACTS = "IS_OPENED_CONTACTS";
const IS_OPENED_SEARCH = "IS_OPENED_SEARCH";

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

export const choosedLastMenuAction: ActionCreator<AnyAction> = (
  choosedLastMenu
) => ({
  type: CHOOSED_LAST_MENU,
  choosedLastMenu,
});

export const isOpenedDropdownMenuAction: ActionCreator<AnyAction> = (
  isOpenedDropdownMenu
) => ({
  type: OPENED_DROWPDOWN_MENU,
  isOpenedDropdownMenu,
});

export const choosedSubMenuKeyAction: ActionCreator<AnyAction> = (
  choosedSubMenuKey
) => ({
  type: CHOOSED_SUB_MENU_KEY,
  choosedSubMenuKey,
});

export const choosedLastMenuKeyAction: ActionCreator<AnyAction> = (
  choosedLastMenuKey
) => ({
  type: CHOOSED_LAST_MENU_KEY,
  choosedLastMenuKey,
});

export const isOpenedContactsAction: ActionCreator<AnyAction> = (
  isOpenedContacts
) => ({
  type: IS_OPENED_CONTACTS,
  isOpenedContacts,
});

export const isOpenedSearchAction: ActionCreator<AnyAction> = (
  isOpenedSearch
) => ({
  type: IS_OPENED_SEARCH,
  isOpenedSearch,
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
    case CHOOSED_LAST_MENU:
      return {
        ...state,
        choosedLastMenu: action.choosedLastMenu,
      };
    case OPENED_DROWPDOWN_MENU:
      return {
        ...state,
        isOpenedDropdownMenu: action.isOpenedDropdownMenu,
      };
    case CHOOSED_SUB_MENU_KEY:
      return {
        ...state,
        choosedSubMenuKey: action.choosedSubMenuKey,
      };
    case CHOOSED_LAST_MENU_KEY:
      return {
        ...state,
        choosedLastMenuKey: action.choosedLastMenuKey,
      };
    case IS_OPENED_CONTACTS:
      return {
        ...state,
        isOpenedContacts: action.isOpenedContacts,
      };
    case IS_OPENED_SEARCH:
      return {
        ...state,
        isOpenedSearch: action.isOpenedSearch,
      };
    default:
      return state;
  }
};
