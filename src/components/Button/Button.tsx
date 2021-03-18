import React from "react";
import {ButtonProps} from './Button.d'
import {StyledButton} from "./Button.styled";


const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return (
    <StyledButton {...props} ref={ref}>
      {props.children}
    </StyledButton>
  );
});

export default Button;