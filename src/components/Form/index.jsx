import React from 'react'

import { Button } from '../Button'
import { 
  FormWrapper,
  Input,
  InputWrapper 
} from './styled'

export const Form = ({ inputValue, getInputValue, submitTodo }) => {

  return (
    <FormWrapper>
      <InputWrapper>
        <Input
          placeholder='type here'
          value={inputValue}
          onChange={getInputValue}
        />
        <Button 
          title='submit todo'
          handleClick={submitTodo} 
        />
      </InputWrapper>
    </FormWrapper>
  )
}
