import React, { useRef, useState } from "react";
import NoteCreationNavigation from "../Main/NoteCreationPage/NoteCreationNavigation";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import useSaveNote from "../../Hooks/useSaveNote";

const Content = styled.div`
    width: 40%;
    height: 400px;
    background: #048399;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;
const StyledNavigation = styled.nav`
    width: 90%;
    position: relative;
    top: 1%;
    display: flex;
    /* border: 1px solid #000; */
`;

const CreationLayout = () => {
    const [title, setTitle] = useState("");
    const saveNote = useSaveNote({ title: title});
    return (
        <Content>
            <StyledNavigation>
                <NoteCreationNavigation />
            </StyledNavigation>
            <input onChange={(e) => setTitle(e.target.value)} type="text" />
            <Outlet></Outlet>
            <button onClick={() => saveNote()}>Добавить</button>
        </Content>
    );
};

export default CreationLayout;
