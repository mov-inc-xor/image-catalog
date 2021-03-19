import styled from "styled-components";

const MAX_WIDTH = '200px';
const MAX_HEIGHT = '200px';

export const StyledComplexImageContainer = styled.div`
  max-width: ${MAX_WIDTH};
  display: inline-block;
  padding: 5px;
  border: 1px solid #eaeaea;

  & * {
    max-width: ${MAX_WIDTH};
    max-height: ${MAX_HEIGHT};
    cursor: pointer;
  }
`;