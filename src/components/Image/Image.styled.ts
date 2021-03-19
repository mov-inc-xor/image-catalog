import styled from "styled-components";

const MAX_WIDTH = '200px';
const MAX_HEIGHT = '200px';

export const StyledImageContainer = styled.div`
  max-width: ${MAX_WIDTH};
  display: inline-block;
  padding: 5px;
  border: 1px solid #eaeaea;
  cursor: pointer;

  & * {
    max-width: ${MAX_WIDTH};
    max-height: ${MAX_HEIGHT};
  }
`;