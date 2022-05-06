import React from 'react'
import { Button } from '../Button'
import { FooterWrapper, DeleteAllMessage } from './styled'

export const Footer = ({ deleteAllTodos, todoList }) => {

  const disabled = todoList.length === 0

  return (
    <FooterWrapper>
      <Button 
        src='/images/icon_trash.svg'
        handleClick={deleteAllTodos}
        isDisabled={disabled}
      />
      <DeleteAllMessage>Delete all</DeleteAllMessage>
  </FooterWrapper>
  )

}

