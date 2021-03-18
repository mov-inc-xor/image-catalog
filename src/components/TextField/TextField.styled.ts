import styled from "styled-components";

export const StyledTextField = styled.input.attrs(props => ({
  type: 'text',
}))`
  padding: 5px 10px;
  font-size: 15px;
  border: 1px solid #eaeaea;
  border-radius: 3px;
  flex: 1;
`;