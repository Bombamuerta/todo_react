import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  height: 40px;
  margin-bottom: 5px;
  border-radius: 5px;
  `

export const ListItemNumber = styled.span`
  font-weight: 700;
  margin: 0 5px;
  `

export const ListItemText = styled.span`
  flex: 1;
  margin-right: 5px;
  text-decoration: ${({ isCompleted }) => ( isCompleted ? 'line-through' : '')};
`