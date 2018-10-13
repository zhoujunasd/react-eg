import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './index.less'
import { connect } from 'react-redux';
import actions from '../../actions/menuText'
import {bindActionCreators} from 'redux'

import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;



class NavBar extends Component {

    handleClick = ({item,key,keyPath}) => {
        // console.log(item);
        // console.log(key);
        // console.log(keyPath);

        // let title = item.props.children.props.children
        // console.log(title);

        // let title1 = key
        // console.log(title1);
        // console.log(this.props.dispatch({type:'CHANGE_TITLE', key}))
        // this.props.dispatch({type:'CHANGE_TITLE', text: key})
        this.props.changeMenu(key)
    }

    componentWillMount(){
        // console.log(this.props);
    }

    render() {
        return (
            <div className='navbar-left'>
                <Menu mode='vertical' theme='dark' onClick={this.handleClick}>
                    <SubMenu key="link1" title={<span><Icon type="home" theme="twoTone" /><span>首页</span></span>}>
                        {/* <MenuItemGroup title='首页'> */}
                            <Menu.Item key="首页">
                                <Link to='/admin'>首页</Link>
                            </Menu.Item>
                            <Menu.Item key='第二页'>
                                <Link to='/admin/second'>第二页</Link>
                            </Menu.Item>
                        {/* </MenuItemGroup> */}
                    </SubMenu>
                    <SubMenu key='link2' title={<span><Icon type="edit" theme="twoTone" /><span></span>订单管理</span>}>
                        <MenuItemGroup titl='管理页'>
                            <Menu.Item key="订单页">
                                <Link to='/admin/order'>订单页</Link>
                            </Menu.Item>
                            <Menu.Item key="404">
                                <Link to='/admin/a'>404</Link>
                            </Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>
                    <SubMenu key='link3' title={<span><Icon type="picture" theme="twoTone" /><span></span>图像数据</span>}>
                        <MenuItemGroup>
                            <Menu.Item key="柱形图">
                                <Link to='/admin/histogram'>柱形图</Link>
                            </Menu.Item>
                        </MenuItemGroup>
                        <MenuItemGroup>
                            <Menu.Item key="扇形图">
                                <Link to='/admin/piediagram'>扇形图</Link>
                            </Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

// export default NavBar;

// export default connect()(NavBar) ;

// export default connect(
//     null,
//     (dispatch)=> ({
//         actions: bindActionCreators(actions, dispatch)
//     })
// )(NavBar)

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}
export default connect(null,mapDispatchToProps)(NavBar);