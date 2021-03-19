import React, {InputHTMLAttributes} from "react";
import {StyledTextField} from "./TextField.styled";

function TextField(props: InputHTMLAttributes<HTMLInputElement>) {
  const {type, ...other} = props;

  return (
    <StyledTextField {...other} />
  );
}

export default TextField;