import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { SelectedNoteObjectState } from '../../Recoil/Atoms/SelectedNoteObjectState'
import { NoteSelector } from '../../Recoil/Selectors/NoteSelector'
import { useRecoilValue, useSetRecoilState } from 'recoil'

const ListItem = styled(Link)`
  display:block;
  padding: 10px 0;
  background-color:#FEB9C6;
  color:  #e9e9e9;
  border-radius:5px;
  font-size:1.5em;
  width:100%;
  transition:color .5s ease-in, transform .5s ease-out, box-shadow .2s ease-in;

  z-index:1;
  &:hover{
    /* color:#048399; */
    transform:translateY(-15px);
    box-shadow: 0 0 40px #b98690; 
  }
`

const Note = ({ className, id, title }) => {

  const path = `/${id}`

  const setNoteObject = useSetRecoilState(SelectedNoteObjectState);
  const note = useRecoilValue(NoteSelector(id));


  return (
    <ListItem onClick={() => {setNoteObject(note)}} to={path} className={className}>
      <h4>{title}</h4>
    </ListItem>
  )
}

export default Note