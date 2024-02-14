import React from "react";
import { useRecoilValue } from "recoil";
import { SelectedNoteObjectState } from "../../../Recoil/Atoms/SelectedNoteObjectState";

const ContentRefNoteContent = () => {
    const selectedNote = useRecoilValue(SelectedNoteObjectState);


    return <div>
        <h3>{selectedNote.title}</h3>
        <img src={selectedNote.content.url} alt="" />
    </div>;
};

export default ContentRefNoteContent;
