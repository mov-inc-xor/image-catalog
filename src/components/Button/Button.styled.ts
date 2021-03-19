import styled, {css} from "styled-components";
import {ButtonProps} from './Button.d';

export const StyledButton = styled.button<ButtonProps>`
  border: none;
  background: #eeeeee;
  outline: none;
  color: rgb(63, 69, 74);
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: 0.1s;
  margin-right: 5px;
  margin-bottom: 5px;

  ${props => !props.disabled && css`
    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.7;
    }
  `}

  ${props => props.primary && css`
    background: rgb(0, 108, 255);
    color: white;
  `}

  ${props => props.secondary && css`
    background: rgb(255, 0, 103);
    color: white;
  `}

  ${props => props.disabled && css`
    color: #b8b8b8;
    background: rgb(241, 241, 241);
    cursor: auto;
  `}
`;