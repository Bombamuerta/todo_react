import styled from 'styled-components'

export const FormWrapper = styled.form`
  width: 100%;
  margin: 5px 0;
  padding: 0 5px 5px;
  border-bottom: 1px solid rgb(219, 225, 226);
`

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Input = styled.input`
  height: 30px;
  flex: 1;

  font-family: inherit;
  font-size: 12px;
  border-radius: 5px;
  outline: none;
  margin-right: 5px;

  padding: 5px 10px;
  border: none;
  background-color: rgb(237, 237, 237);

  &:focus {
    border-width: 1px;
    border-style: solid;
    border-color: rgb(202, 202, 202) rgb(225, 225, 225) rgb(225, 225, 225);
  }
`
