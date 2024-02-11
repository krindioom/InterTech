import React from 'react'
import { NoteSelector } from '../../../Recoil/Selectors/NoteSelector';
import { useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';

const NoteView = () => {

    const { id } = useParams();

    const view = useRecoilValue(NoteSelector(id));
    console.log(view);

    return (
        <div>
            <h4>{view.title}</h4>
            <p>
                {view.text}
            </p>
        </div>
    )
}

export default NoteView