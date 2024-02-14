import React from "react";
import TextNoteContent from "./TextNoteContent";
import ContentRefNoteContent from "./ContentRefNoteContent";
import { useRecoilValue } from "recoil";
import { SelectedNoteObjectState } from "../../../Recoil/Atoms/SelectedNoteObjectState";

const NoteContentWrapper = () => {
    const contentViews = {
        text: <TextNoteContent />,
        contentRef: <ContentRefNoteContent />,
    };

    const selectedNote = useRecoilValue(SelectedNoteObjectState);

    return (
        <div>
            {contentViews[selectedNote.type]}
        </div>
    );
};

export default NoteContentWrapper;
