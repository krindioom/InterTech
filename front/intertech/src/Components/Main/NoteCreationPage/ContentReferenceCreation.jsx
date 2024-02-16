import React, { useState, useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { NoteContentState } from "../../../Recoil/Atoms/NoteContentState";
import { NoteTypesState } from "../../../Recoil/Atoms/NoteTypesState";

const StyledContentRefWrapper = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
`;
const StyledIframe = styled.iframe`
    width: 100%;
    height: 100%;
`;
const ContentReferenceCreation = () => {
    const [url, setUrl] = useState("");
    const setContent = useSetRecoilState(NoteContentState);
    const type = useRecoilValue(NoteTypesState);

    useEffect(() => {
        setContent((current) => ({
            ...current,
            type: type.contentRef,
            content: url,
        }));
    }, [url, setContent, type.contentRef]);

    const handleInputChange = (e) => {
        const { value } = e.target;
        setUrl(value);
        setContent((current) => ({ ...current, content: value }));
    };

    return (
        <StyledContentRefWrapper>
            <input
                placeholder="URL"
                type="url"
                value={url}
                onChange={handleInputChange}
            />
            <StyledIframe src={url} frameBorder="0"></StyledIframe>
        </StyledContentRefWrapper>
    );
};

export default ContentReferenceCreation;
