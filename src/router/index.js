import React, { Component } from 'react';
import {Route, HashRouter, Switch,Redirect,} from 'react-router-dom'
import Home from './../views/home/index';
import NotMatch from './../views/notMatch/index';
import Admin from './../views/admin/admin';
import Second from './../views/second/index';

// import {Provider} from 'react-redux'
// import store from '../store/index'

// import {connect} from 'react-redux'
// import {bindActionCreators} from 'redux'
// import * as action from '../actions/counter'

// import PropTypes from 'prop-types'

class Router extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                {/* <Provider store={store}> */}
                <HashRouter>
                    <Switch>
                        <Redirect from='/' exact to='/admin' />
                        <Redirect from='/admin' exact to='/admin/home' />
                        <Route path='/admin'  render={() => 
                            <Admin>
                                <Switch>
                                    <Redirect from='/admin' exact to='/admin/home' />
                                    <Route  path='/admin/home' component={Home}></Route>
                                    <Route path='/admin/second' component={Second}
                                        // counter={this.props.counter}
                                        // increment={this.props.increment}
                                        // decrement={this.props.decrement}
                                        // incrementAsync={this.props.incrementAsync}
                                        // incrementIfOdd={this.props.incrementIfOdd}
                                        ></Route>
                                    <Route component={NotMatch}/>
                                </Switch>
                            </Admin>
                        }></Route>
                        <Route component={NotMatch}/>
                    </Switch>
                </HashRouter>
                {/* </Provider> */}
                
            </div>
        );
    }
}

// const Root = ({ store }) => (
//     <Provider store={store}>
//       <Router history={browserHistory}>
//         <Route path="/(:filter)" component={App} />
//       </Router>
//     </Provider>
//   );

// Router.propTypes = {
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
// export default connect(mapStarteTopProps,mapDispatchToProps)(Router);

export default Router;