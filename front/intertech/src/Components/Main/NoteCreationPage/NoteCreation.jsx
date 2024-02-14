import React from 'react'
import styled from 'styled-components'

const StyledTextArea = styled.textarea`
  display: block;
  width:80%;
  height:100%;
  &:placeholder{
    color:red;
  }
`

const NoteCreation = () => {
  return (
    <StyledTextArea placeholder='Сюда пиши!'></StyledTextArea>
  )
}

export default NoteCreation

