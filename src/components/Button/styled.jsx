import styled, { css } from 'styled-components'

export const ButtonWrapper = styled.button`
  width: 25px;
  height: 25px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  margin: ${({ customMargin }) => (customMargin)};
  &:hover {
    transition: .2s;
    transform: scale(1.2);
  }

  ${({ isDisabled }) => isDisabled 
    ? css`
      opacity: 0.5;
      pointer-events: none;
    ` 
    : ''};
`

export const ButtonIcon = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`