import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { SelectedNoteObjectState } from "../../../Recoil/Atoms/SelectedNoteObjectState";
import styled from "styled-components";

const StyledTextContent = styled.div`
    border: 1px solid red;
    width: 100%;
    display: block;
`;

const StyledText = styled.p`
    text-align: left;
    white-space: pre-wrap;
`;

const TextNoteContent = () => {
    const selectedNote = useRecoilValue(SelectedNoteObjectState);
    console.log(selectedNote);
    return (
        <StyledTextContent>
            <h4>{selectedNote.title}</h4>
            <StyledText>{selectedNote.content.content}</StyledText>
        </StyledTextContent>
    );
};

export default TextNoteContent;
