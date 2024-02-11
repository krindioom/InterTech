import { PlusOutlined } from '@ant-design/icons'
import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const StyledNoteCreationButton = styled(Link)`
    color:black;
    background: #9c6363;
    display: block;
    &:hover{
      background-color:#048399;
    }
`

const NoteCreationButton = () => {
  return (
    <StyledNoteCreationButton to="/create">
        <PlusOutlined/>
    </StyledNoteCreationButton>
  )
}

export default NoteCreationButton