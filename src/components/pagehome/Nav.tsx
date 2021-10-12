import { NavLink } from 'react-router-dom';
import { Button, Menu } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { Item } = Menu;

function Nav () {

    return (
        <>
            <Menu mode="horizontal" defaultSelectedKeys={['2']}>
                <Item key={1}>
                    <NavLink
                        activeStyle={{ color: "black" }}
                        to="/home">Home
                    </NavLink>
                </Item>
                <Item key={2}>
                    <NavLink to="/favourties">Favourites</NavLink>
                </Item>
                
            </Menu>
        </>
      );
}

export default Nav;