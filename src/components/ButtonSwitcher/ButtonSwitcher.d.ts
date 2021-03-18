import {ButtonProps} from "../Button/Button.d";
import React from "react";

export interface ButtonSwitcherProps extends ButtonProps {
  on: string,
  off: string,
  switched?: boolean,
  onSwitch?: () => void,
}