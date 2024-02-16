import { Button } from 'antd';
import Dropdown from 'antd/es/dropdown/dropdown'
import React from 'react'
import { Link } from 'react-router-dom'

const DropDownRouter = ({ menuItems, children }) => {
    const createMenu = () => {
      return menuItems.map((item, index) => ({
        key: index,
        label: <Link to={item.path}>{item.pathName}</Link>,
      }));
    };

    const items = createMenu();
  
    return (
        <Dropdown
        menu={{
          items,
        }}
        placement="bottomRight"
        arrow
      >
        {children}
      </Dropdown>
    );
  };
  

export default DropDownRouter