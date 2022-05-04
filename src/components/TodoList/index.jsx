import React from 'react'

import { TodoListItem } from '../TodoListItem'

import { List } from './styled'

export const TodoList = ({ todoList, setTodoList }) => {

  return (
    <List>
      {todoList.map((todo, index) => (
        <TodoListItem 
          text={todo.text}
          id={todo.id}
          index={index}
          key={todo.id}
          setTodoList={setTodoList}
          todoList={todoList}
          todo={todo}
          completed={todo.completed}
        />
      ))}
    </List>
  )
}
