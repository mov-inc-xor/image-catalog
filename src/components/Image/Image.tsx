import React from "react";
import {ImageProps} from './Image.d';
import {StyledImageContainer} from './Image.styled';

function Image(props: ImageProps) {
  const {srcs, ...other} = props;

  return (
    <StyledImageContainer>
      {srcs.length > 1 ? srcs.map((link, i) => <img key={i} src={link} {...other} alt={link}/>) :
        <img src={srcs[0]} {...other} alt={srcs[0]}/>}
    </StyledImageContainer>
  );
}

export default Image;