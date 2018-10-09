import React, { Component } from 'react';
import './index.less'

class Header extends Component {
    render() {
        return (
            <div className='header-wrap'>
                <div className='header clearfix'>
                    <div className='user-info flr'>
                        <div className="user-wrap fll">欢迎，<span className="username">姓名</span></div>
                        <div className='logout fll'>退出</div>
                    </div>
                </div>
                <div className='header-detail clearfix'>
                    <div className="breadcrumb-title fll">首页</div>
                    <div className="weather flr clearfix">
                        <div className="date">时间</div>
                        <div className="weather-detail">天气</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;