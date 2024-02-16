import React from "react";
import { useRecoilValue } from "recoil";
import { SelectedNoteObjectState } from "../../../Recoil/Atoms/SelectedNoteObjectState";
import styled from "styled-components";

const ContentRefNoteContent = () => {
    const StyledIframd = styled.iframe`
        width: 100%;
        height: 100vh;
    `;

    const selectedNote = useRecoilValue(SelectedNoteObjectState);

    return (
        <div>
            <h3>{selectedNote.title}</h3>
            <StyledIframd src={selectedNote.content.content} alt="" />
        </div>
    );
};

export default ContentRefNoteContent;
