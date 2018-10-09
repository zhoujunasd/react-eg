import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './index.less'

import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class NavBar extends Component {
    render() {
        return (
            <div className='navbar-left'>
                <Menu mode='vertical' theme='dark'>
                    <SubMenu key="link1" title={<span><Icon type="home" theme="twoTone" /><span>首页</span></span>}>
                        {/* <MenuItemGroup title='首页'> */}
                            <Menu.Item key="1">
                                <Link to='/admin'>首页</Link>
                            </Menu.Item>
                            <Menu.Item key='2'>
                                <Link to='/admin/second'>第二页</Link>
                            </Menu.Item>
                        {/* </MenuItemGroup> */}
                    </SubMenu>
                    <SubMenu key='link2' title={<span><Icon type="edit" theme="twoTone" /><span></span>第二页</span>}>
                        <MenuItemGroup titl='管理页'>
                            <Menu.Item key="1">
                                <Link to='/admin'>首页</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to='/admin'>首页</Link>
                            </Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}
export default NavBar;