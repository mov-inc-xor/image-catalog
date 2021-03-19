import React from "react";
import {ComplexImageProps} from './ComplexImage.d';
import {StyledComplexImageContainer} from './ComplexImage.styled';

function ComplexImage(props: ComplexImageProps) {
  const {ids, srcs, tags, showTag, ...other} = props;

  return (
    <StyledComplexImageContainer>
      {srcs.length > 1 ?
        srcs.map((link, i) => (
          <img {...other} key={ids[i]} src={link} alt={link} onClick={() => showTag(tags[i])}/>
        )) :
        <img {...other} key={ids[0]} src={srcs[0]} alt={srcs[0]} onClick={() => showTag(tags[0])}/>}
    </StyledComplexImageContainer>
  );
}

export default ComplexImage;