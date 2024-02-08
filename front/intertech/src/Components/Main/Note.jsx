import React from 'react'
import styled from 'styled-components'

const ListItem = styled.div`
  padding: 10px 0;
  background-color:#FEB9C6;
  border-radius:2px;
  font-size:1em;
  width:100%;
`

const Note = ({ className, id, title }) => {
  return (
    <ListItem className={className}>
      <h4>{title}</h4>
    </ListItem>
  )
}

export default Note