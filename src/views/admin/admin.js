import React, { Component } from 'react';

import {Row, Col} from 'antd'
import NavBar from './../../components/nvaBar/index';
import Header from './../../components/header/index';
import Footer from './../../components/footer/index';

class Admin extends Component {
    render() {
        return (
            <div className='admin'>
                <Row>
                    <Col span={4}><NavBar/></Col>
                    <Col span={20}>
                        <Header/>
                        <div className='content'>
                            {this.props.children}    
                        </div>
                        <Footer/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Admin;