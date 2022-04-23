import React, { 
  useState, 
  useEffect 
} from 'react'
// import { v4 as uuidv4 } from 'uuid'

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
  const [todo, setTodo] = useState([])

  
  useEffect(() => {
    setTodo([...todoList, todo])
  }, [])
  
  console.log('todo list', todoList)

  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todos))
  // },[todos])

  // console.log('todos', localStorage.getItem('todos'))

  useEffect(() => {
    const items = localStorage.getItem('todo')
    console.log('items',items)
    setTodo([...todo, items])
  }, [])

  
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
    
    localStorage.setItem('todo', JSON.stringify(todo))
    setInputValue('')
  }
  
  
  const deleteAllTodos = (e) => {
    e.preventDefault()
    setTodoList([])
    setInputValue('')
  }

  const deleteTodo = (item) => {
    setTodoList(todoList.filter((todo) => todo !== item))
  }

  // const getLocalTodos = () => {

  //   console.log('saved to local', mytodos)

  // }

  // console.log('state todo',todos)

  const emptyTodos = todoList.length === 0

  return (
    <AppWrapper>
      <GlobalStyle />
      <Header todoList={todoList} />
      {/* <button onClick={getLocalTodos}>local</button> */}

      <Form
        getInputValue={getInputValue}
        submitTodo={submitTodo}
        inputValue={inputValue}
      />
      {emptyTodos && <Message>your todos will be here...</Message>}
      <TodoList 
        todoList={todoList} 
        deleteTodo={deleteTodo} 
      />

      <Footer 
        deleteAllTodos={deleteAllTodos} 
        todoList={todoList} 
      />
    </AppWrapper>
  )
}
