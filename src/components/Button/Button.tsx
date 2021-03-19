import React from "react";
import {ButtonProps} from './Button.d'
import {StyledButton} from "./Button.styled";

function Button(props: ButtonProps) {
  return (
    <StyledButton {...props}>
      {props.children}
    </StyledButton>
  );
}

export default Button;