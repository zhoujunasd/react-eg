import React, { Component } from 'react';
import './index.less'
import img from '../../static/imgs/01.jpg'
import { Link } from 'react-router-dom';
class NotMatch extends Component {
    render() {
        return (
            <div className='not-found clearfix'>
                <div className='not-found-left fll'>
                    <div className="title">
                        Oh My God!
                    </div>
                    <h2 className="desc">
                       404 您要的页面没有找到！
                    </h2>
                    <div className="not-found-content">
                        <ul>
                            <li>或者你可以去<Link to="/admin/second">第二页</Link></li>
                            <li><Link to="/admin/home">回首页</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='img-wrap fll'>
                    <img src={img} alt='404'/>
                </div>
            </div>
        );
    }
}

export default NotMatch;