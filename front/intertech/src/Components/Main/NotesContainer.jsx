import React from 'react'
import { useRecoilValue } from 'recoil';
import { ListViewSelector } from '../../Recoil/Selectors/ListViewSelector';
import Note from './Note';
import styled from 'styled-components';

const NotesList = styled.div`
  background-color: #B96B85; 
  width:50%;
  height:400px;
  border-radius: 4px; 
  overflow-x:hidden;
  overflow-y:auto;
  padding:4px;
`;

const StyledNoteWrapper = styled(Note)`
  margin-bottom:4px;
`;

const NotesContainer = () => {
    const notesList = useRecoilValue(ListViewSelector);

    return (
        <NotesList>
            {
                notesList.map((item) => {
                    return <StyledNoteWrapper key={item.id} id={item.id} title={item.title} ></StyledNoteWrapper>
                })
            }
        </NotesList>
    )
}

export default NotesContainer