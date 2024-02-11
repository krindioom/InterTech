import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ListItem = styled(Link)`
  display:block;
  padding: 10px 0;
  background-color:#FEB9C6;
  color:  #e9e9e9;
  border-radius:2px;
  font-size:1em;
  width:100%;

  &:hover{
    color:#048399;
  }
`

const Note = ({ className, id, title }) => {

  const path = `/${id}`

  return (
    <ListItem to={path} className={className}>
      <h4>{title}</h4>
    </ListItem>
  )
}

export default Note