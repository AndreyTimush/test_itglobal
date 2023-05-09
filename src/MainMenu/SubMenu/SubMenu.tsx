import React from "react";
import styles from "./submenu.css";
import { ArrowLeftImg } from "../../images/ArrowLeftImg";

interface IProps {
  choiceMenu: string;
}

export function SubMenu(props: IProps) {
  return (
    <div>
      <ArrowLeftImg />
      <p>{props.choiceMenu}</p>
    </div>
  );
}
