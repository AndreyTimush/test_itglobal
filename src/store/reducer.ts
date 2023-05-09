import { ILanguage, changeLanguageAction } from "./actionsLanguage";

const initialState: ILanguage = { lang: "ru" };

export function reducer(
  state: ILanguage = initialState,
  action: changeLanguageAction
): ILanguage {
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      return action.payload;
    default:
      return state;
  }
}
