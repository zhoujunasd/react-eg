import React, { Component } from 'react';
import './index.less'
import {Row, Col,} from 'antd'
import NavBar from './../../components/nvaBar/index';
import HeaderTop from './../../components/header/index';
import FooterBottom from './../../components/footer/index';

// import {Layout} from 'antd'
// const { Header, Footer, Sider, Content } = Layout;

// import {connect} from 'react-redux'
// import {bindActionCreators} from 'redux'
// import * as action from '../../actions/counter'

// import PropTypes from 'prop-types'

class Admin extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.state = {
    //     //     counter: this.props.counter,
    //     //     increment:this.props.increment,
    //     //     decrement:this.props.decrement,
    //     //     incrementAsync:this.props.incrementAsync,
    //     //     incrementIfOdd:this.props.incrementIfOdd,
    //     // };
    // }

    render() {
        // console.log(this.props);
        // var children = React.Children.map(this.props.children, function (child) {
        //     return React.cloneElement(child, {
        //         counter: this.props.counter,
        //         increment: this.props.increment,
        //         decrement: this.props.decrement,
        //         incrementAsync: this.props.incrementAsync,
        //         incrementIfOdd: this.props.incrementIfOdd,
        //     })
        // })
        return (
            // <div className='admin'>
            //     <Layout >
            //         <Sider><NavBar/></Sider>
            //         <Layout>
            //             <Header className='header'>
            //                 <HeaderTop/>
            //             </Header>
            //             <Content>{this.props.children}</Content>
            //             <Footer>
            //                 <FooterBottom/>
            //             </Footer>
            //         </Layout>
            //     </Layout>
            // </div>
            <div className='admin'>
                <Row>
                    <Col span={4} className='nav-left'><NavBar/></Col>
                    <Col span={20} style={{height: '100vh',overflow: 'auto'}}>
                        <HeaderTop />
                        <div className='content-wrap'>
                                        {/* counter={this.props.counter}
                                        increment={this.props.increment}
                                        decrement={this.props.decrement}
                                        incrementAsync={this.props.incrementAsync}
                                        incrementIfOdd={this.props.incrementIfOdd} */}
                            <div className='content'>
                                {this.props.children}
                                {/* {children} */}
{/* render: function() {
 var children = React.Children.map(this.props.children, function (child) {
 return React.cloneElement(child, {
 foo: this.state.foo
 })
 })
 return <div>{children}</div>
} */}
                            </div>
                        </div>
                        <FooterBottom/>
                    </Col>
                </Row>
            </div>
        );
    }
}

// Admin.propTypes = {
//     increment: PropTypes.func.isRequired,
//     decrement: PropTypes.func.isRequired,
//     incrementAsync: PropTypes.func.isRequired,
//     incrementIfOdd: PropTypes.func.isRequired,
// }

// function mapStarteTopProps(state) {
//     return {
//         counter: state.counter
//     }
// }
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(action, dispatch)
// }
// export default connect(mapStarteTopProps,mapDispatchToProps)(Admin);

export default Admin