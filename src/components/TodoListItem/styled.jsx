import styled, { css } from 'styled-components'

export const ListItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  min-height: 40px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #444344;
  width: 100%;
  `

export const ListItemNumber = styled.span`
  font-weight: 700;
  margin: 0 5px;
  `

export const ListItemText = styled.span`
  flex: 1;
  margin-right: 5px;
  ${({ isCompleted }) => ( isCompleted 
  ? css`
    text-decoration: line-through;
    opacity: 0.5;
  `
  : '')};
`