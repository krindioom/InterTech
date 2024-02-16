import {
    AppstoreOutlined,
    HomeTwoTone,
    LogoutOutlined,
    MailOutlined,
    ManOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import { Drawer, Menu } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DrawerButton from "../DrawerButton";
import SideBarContent from "./SideBarContent";

const NavigationPanel = () => {
    const items = [
        {
            label: (<DrawerButton>
                <SideBarContent/>
            </DrawerButton>),
            key: "mail",
        },
        {
            label: (<Link to="/">Home</Link>),
            key: "home",
            icon: <HomeTwoTone />,
        },
        
    ];
    const [current, setCurrent] = useState("mail");
    const onClick = (e) => {
        console.log("click ", e);
        setCurrent(e.key);
    };
    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
            theme="dark"
        />
    );
};

export default NavigationPanel;
