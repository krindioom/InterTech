import React from "react";
import { useRecoilValue } from "recoil";
import { SelectedNoteObjectState } from "../../../Recoil/Atoms/SelectedNoteObjectState";

const TextNoteContent = () => {
    const selectedNote = useRecoilValue(SelectedNoteObjectState);

    return (
        <div>
            <h4>{selectedNote.title}</h4>
            <p>{selectedNote.content.text}</p>
        </div>
    );
};

export default TextNoteContent;
