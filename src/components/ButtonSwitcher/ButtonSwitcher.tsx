import React, {useState} from "react";
import Button from "../Button/Button";
import {ButtonSwitcherProps} from './ButtonSwitcher.d'

function ButtonSwitcher(props: ButtonSwitcherProps) {
  const {on, off, switched, onSwitch, ...other} = props;

  const [switchedState, setSwitchedState] = useState(switched ?? false);

  const onClick = () => {
    onSwitch && onSwitch();
    setSwitchedState(!switchedState);
  }

  return <Button {...other} onClick={onClick}>{switchedState ? on : off}</Button>
}

export default ButtonSwitcher;