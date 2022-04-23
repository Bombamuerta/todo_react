import React from 'react'
import { ButtonWrapper } from './styled'

export const Button = ({ title, handleClick }) => {

  return (
    <ButtonWrapper 
      onClick={handleClick}
    >
      {title}
    </ButtonWrapper>
  )
}
