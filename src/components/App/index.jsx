import React, { 
  useState, 
  useEffect 
} from 'react'

import { Header } from '../Header'
import { Form } from '../Form'
import { TodoList } from '../TodoList'
import { Footer } from '../Footer'

import { AppWrapper, Message } from './styled'
import { GlobalStyle } from '../../globalStyles'

export const App = () => {

  const idGenerator = Math.floor(Math.random(Date.now()) * 999999)

  const [todoList, setTodoList] = useState([])
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'))
    if (savedTodos) {
      setTodoList(savedTodos)
    }
  },[])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList))
  }, [todoList])
  
  const getInputValue = (e) => {
    setInputValue(e.target.value)
  }
  
  const submitTodo = (e) => {
    e.preventDefault()
    const newTodo = {
      id: idGenerator,
      text: inputValue,
    }
    
    inputValue !== ''
    ? setTodoList([...todoList, newTodo])
    : alert('no text entered!')
    
    setInputValue('')
  }
  
  const deleteAllTodos = (e) => {
    e.preventDefault()
    setTodoList([])
    setInputValue('')
  }

  const emptyTodos = todoList.length === 0
 
  return (
    <AppWrapper>
      <GlobalStyle />
      <Header todoList={todoList} />
      <Form
        getInputValue={getInputValue}
        submitTodo={submitTodo}
        inputValue={inputValue}
      />
      {
        emptyTodos && 
        <Message>your todos will be here...</Message>
      }
      <TodoList 
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <Footer 
        deleteAllTodos={deleteAllTodos} 
        todoList={todoList} 
      />
    </AppWrapper>
  )
}
