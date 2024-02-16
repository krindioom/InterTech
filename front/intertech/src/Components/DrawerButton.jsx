import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import React, { useState } from "react";

const DrawerButton = ({ children }) => {
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
                {children}
            </Drawer>
        </>
    );
};

export default DrawerButton;
