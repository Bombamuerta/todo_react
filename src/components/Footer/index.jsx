import React from 'react'
import { Button } from '../Button'
import { FooterWrapper } from './styled'

export const Footer = ({ deleteAllTodos }) => {

  return (
    <FooterWrapper>
      <Button 
        title='delete all'
        handleClick={deleteAllTodos}
      />
  </FooterWrapper>
  )

}

