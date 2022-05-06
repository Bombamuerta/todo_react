import React, { useState } from 'react'

import { Button } from '../Button'

import { 
  ListItem,
  ListItemText,
  ListItemNumber,
  ListItemWrapper,
} from './styled'

export const TodoListItem = ({
  text, 
  index, 
  setTodoList, 
  todoList, 
  todo, 
 }) => {

  const deleteTodo = () => {
    setTodoList(todoList.filter((el) => el.id !== todo.id))
  }
  
  const [completed, setCompleted] = useState(false)

  const completeTodo = () => {
    setCompleted(!completed)
  }

  return (
    <ListItemWrapper>
    <ListItem> 
      <ListItemNumber>{index + 1}.</ListItemNumber>
      <ListItemText isCompleted={completed}>
        {text}
      </ListItemText>
    </ListItem>
    <Button 
        src='/images/icon_check.svg'
        handleClick={completeTodo}
        customMargin={'0 0 0 20px'}
      />
      <Button 
        src='/images/icon_trash.svg'
        handleClick={deleteTodo}
        customMargin={'0 0 0 20px'} 
      />
    </ListItemWrapper>
  )
}