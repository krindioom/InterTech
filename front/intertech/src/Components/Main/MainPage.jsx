import React from 'react'
import NotesContainer from './NotesContainer';
import ToolBar from './ToolBar';
import styled from 'styled-components';

const StyledMainPage = styled.div`
  width:50%;
`

const MainPage = () => {
  return (
    <StyledMainPage>
      <ToolBar/>
      <NotesContainer />
    </StyledMainPage>
  )
}

export default MainPage;