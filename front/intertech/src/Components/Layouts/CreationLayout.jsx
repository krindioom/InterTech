import React from "react";
import NoteCreationNavigation from "../Main/NoteCreationPage/NoteCreationNavigation";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

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
    return (
        <Content>
            <StyledNavigation>
                <NoteCreationNavigation />
            </StyledNavigation>
            <input type="text" />
            <Outlet></Outlet>
            <button>Добавить</button>
        </Content>
    );
};

export default CreationLayout;
