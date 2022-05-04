import React, { useState } from 'react'

import { Button } from '../Button'

import { 
  ListItem,
  ListItemText,
  ListItemNumber,
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

  // TODO change "complete" btn to trash icon
  return (
    <ListItem> 
      <ListItemNumber>{index + 1}</ListItemNumber>
      <ListItemText isCompleted={completed}>
        {text}
      </ListItemText>
      <Button 
        title='complete'
        handleClick={completeTodo}
      />
      <Button 
        title='delete'
        handleClick={deleteTodo} 
      />
    </ListItem>
  )
}