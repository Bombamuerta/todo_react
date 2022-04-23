import React from 'react'
import { Button } from '../Button'

import { List, ListItem, ListItemNumber, ListItemText } from './styled'

export const TodoList = ({ todoList, deleteTodo }) => {
// console.log(todos)
  return (
    <List>
      {todoList.map((item, index) => (
        <ListItem key={item.id}>
          <ListItemNumber>{index + 1}.</ListItemNumber>
          <ListItemText>{item.text}</ListItemText>
          <Button title='delete' handleClick={() => deleteTodo(item)} />
        </ListItem>
      ))}
    </List>
  )
}
