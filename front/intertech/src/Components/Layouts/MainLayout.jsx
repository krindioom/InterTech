import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import NoteCreationNavigation from "../Main/NoteCreationPage/NoteCreationNavigation";
import DrawerButton from "../DrawerButton";
import { Button, Table } from "antd";
import Closer from "../Closer";
import DropDownRouter from "../DropDownRouter";

const StyledContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const MainLayout = () => {
    return (
        <>
            <header>
                
            </header>
            <StyledContent>
                <Outlet />
            </StyledContent>
        </>
    );
};

export default MainLayout;
