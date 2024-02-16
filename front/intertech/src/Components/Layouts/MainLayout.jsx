import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import NavigationPanel from "../Main/NavigationPanel";

const StyledContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledHeader = styled.header`
    position: relative;
    bottom: 10px;
    width: 40%;
    overflow: hidden;
    border-radius: 10px;
`;

const StyledMain = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MainLayout = () => {
    return (
        <StyledMain>
            <StyledHeader>
                <NavigationPanel />
            </StyledHeader>
            <StyledContent>
                <Outlet />
            </StyledContent>
        </StyledMain>
    );
};

export default MainLayout;
