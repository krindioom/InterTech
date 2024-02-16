import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { NoteContentState } from "../../../Recoil/Atoms/NoteContentState";
import { NoteTypesState } from "../../../Recoil/Atoms/NoteTypesState";

const StyledTextArea = styled.textarea`
    display: block;
    width: 80%;
    height: 100%;
`;
const NoteCreation = () => {
    const setContent = useSetRecoilState(NoteContentState);
    const type = useRecoilValue(NoteTypesState);

    useEffect(() => {
        setContent({
            type: type.text,
            content: "",
        });
    }, [setContent, type.text]);

    const handleContentChange = (e) => {
        setContent((current) => ({
            ...current,
            text: e.target.value,
        }));
    };

    return (
        <StyledTextArea
            onChange={handleContentChange}
            placeholder="Сюда пиши!"></StyledTextArea>
    );
};

export default NoteCreation;
