export interface ILanguage {
  lang: string;
}

export type changeLanguageAction = {
  type: "CHANGE_LANGUAGE";
  payload: ILanguage;
};
