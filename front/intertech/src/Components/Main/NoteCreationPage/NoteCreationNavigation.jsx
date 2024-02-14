import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Dropdown } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NoteCreationNavigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeDrawer = () => {
        setIsOpen(false);
    };

    const showDrawer = () => {
        setIsOpen(true);
    };

    return (
        <>
            <Button onClick={() => showDrawer()}>
                <MenuOutlined spin />
            </Button>
            <Drawer open={isOpen} onClose={() => closeDrawer()}>
                <ul>
                    <li>
                        <Link onClick={() => closeDrawer()} to="note">back</Link>
                    </li>
                    <li>
                        <Link onClick={() => closeDrawer()} to="aaa">back</Link>
                    </li>
                    <li>
                        <Link onClick={() => closeDrawer()} to="to">back</Link>
                    </li>
                </ul>
            </Drawer>
        </>
    );
};

export default NoteCreationNavigation;
