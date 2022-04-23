import React from 'react'
import { HeaderWrapper } from './styled'

export const Header = ({ todoList }) => (
    <HeaderWrapper>Todo list: {todoList.length}</HeaderWrapper>
)