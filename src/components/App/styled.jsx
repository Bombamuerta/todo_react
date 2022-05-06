import styled from 'styled-components'
import { devices } from '../../devices'

export const AppWrapper = styled.main`
  width: 100%;
  border-radius: 5px;
  border: 1px solid #7FFE02;
  max-width: 450px;
  margin-top: 10rem;

  @media ${devices.mobile} {
    margin: 20px;
  }
`
export const Message = styled.div`
  text-align: center;
  font-weight: 700;
  padding: 5px 0 10px;
`