import React from 'react'
import { NoteSelector } from '../../../Recoil/Selectors/NoteSelector';
import { useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';
import NoteContentWrapper from './NoteContentWrapper';

const NoteView = () => {

    const { id } = useParams();

    //const view = useRecoilValue(NoteSelector(id));

    return (
        <div>
            <NoteContentWrapper/>
        </div>
    )
}

export default NoteView