import React from 'react'
import SearchPanel from './SearchPanel'
import NoteCreationButton from './NoteCreationButton'
import styled from 'styled-components'

const StyledToolBar = styled.div`
  width:100%;
  display: flex;
  justify-content:space-between;
  @media (max-width: 1000px) {
    flex-direction:column;
  }
`

const ToolBar = () => {
  return (
    <StyledToolBar>
      <SearchPanel />
      <NoteCreationButton />
    </StyledToolBar>
  )
}

export default ToolBar