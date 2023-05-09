import { ActionCreator } from "redux";

export const OPENED_MAIN_MENU = "OPENED_MAIN_MENU";

export type openedMainMenuAction = {
  type: typeof OPENED_MAIN_MENU;
};

export const openedMainMenu: ActionCreator<openedMainMenuAction> = () => ({
  type: OPENED_MAIN_MENU,
  
});

// export interface IOpenedMenu {
//   main: false;
// }

// export type changeOpenedMenu = {
//   type: "OPENED_MAIN_MENU";
//   payload: IOpenedMenu;
// };
