import React, { useRef, useState } from "react";
import NoteCreationNavigation from "../Main/NoteCreationPage/NoteCreationNavigation";
import { Outlet, redirect, useNavigate } from "react-router-dom";
import styled from "styled-components";

import useSaveNote from "../../Hooks/useSaveNote";
import DropDownRouter from "../DropDownRouter";
import { Button } from "antd";
import { MenuFoldOutlined, MenuOutlined } from "@ant-design/icons";

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
    const saveNote = useSaveNote({ title: title });
    const navigate = useNavigate();
    return (
        <Content>
            <StyledNavigation>
                <DropDownRouter
                    menuItems={[
                        {
                            path: "note",
                            pathName: "записка",
                        },
                        {
                            path: "content-ref",
                            pathName: "ссылка",
                        },
                        {
                            path: "/",
                            pathName: "домой",
                        },
                    ]}>
                    <Button>
                        <MenuOutlined>записки</MenuOutlined>
                    </Button>
                </DropDownRouter>
            </StyledNavigation>
            <input maxLength={20} onChange={(e) => setTitle(e.target.value)} type="text" />
            <Outlet></Outlet>
            <button
                onClick={() => {
                    saveNote();
                    navigate("/");
                }}>
                Добавить
            </button>
        </Content>
    );
};

export default CreationLayout;
