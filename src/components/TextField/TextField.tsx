import React, {useState} from "react";
import {StyledTextField} from "./TextField.styled";
import {TextFieldProps} from './TextField.d';

function TextField(props: TextFieldProps) {
  const {filter, type, ...other} = props;

  const [text, setText] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(filter ? filter(e.target.value) : e.target.value);
  };

  return (
    <StyledTextField {...other} value={text} onChange={onChange}/>
  );
}

export default TextField;