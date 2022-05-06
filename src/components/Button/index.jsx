import React from 'react'
import { ButtonWrapper, ButtonIcon } from './styled'

export const Button = ({ 
  handleClick, 
  src, 
  customMargin, 
  isDisabled 
  }) => {

  return (
    <ButtonWrapper 
      onClick={handleClick} 
      customMargin={customMargin}
      isDisabled={isDisabled}
    >
      <ButtonIcon src={src} />
    </ButtonWrapper>
  )
}
