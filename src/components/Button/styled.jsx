import styled from 'styled-components'

import { devices } from '../../devices'

export const ButtonWrapper = styled.button`
  min-width: 100px;
  height: 30px;
  font-size: 11px;
  font-family: inherit;
  text-transform: capitalize;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  color: rgb(86, 99, 102);
  font-weight: 700;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 30%) 0px 1px 1px;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  color: rgb(83, 95, 98);
  filter: drop-shadow(rgba(0, 0, 0, 0.3) 0px 1px 1px);
  background: linear-gradient(
      rgba(255, 255, 255, 0.05) 0%,
      rgba(0, 0, 0, 0.05) 100%
    ),
    rgb(255, 255, 255);

  &:hover {
    background: linear-gradient(
      0deg,
      rgb(232, 232, 232) 0%,
      rgb(221, 221, 221) 100%
    );
  }

  /* opacity: ${({ isDisabled }) => ( isDisabled ? '0.5' : '1')}; */

  &:focus {
    outline: 1px solid #000;
  }

  @media ${devices.mobile} {
    min-width: 75px;
  }
`
