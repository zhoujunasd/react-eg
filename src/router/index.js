import React, { Component } from 'react';
import {Route, HashRouter, Switch,Redirect} from 'react-router-dom'
import Home from './../views/home/index';
import NotMatch from './../views/notMatch/index';
import Admin from './../views/admin/admin';
import Second from './../views/second/index';

class Router extends Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <Switch>
                        <Redirect from='/' exact to='/admin/home' />
                        <Redirect from='/admin' exact to='/admin/home' />
                        <Route path='/admin'  render={() => 
                            <Admin>
                                <Route path='/admin/home' component={Home}></Route>
                                <Route path='/admin/second' component={Second}></Route>
                            </Admin>
                        }></Route>
                        <Route component={NotMatch}/>
                    </Switch>
                </HashRouter>
            </div>
        );
    }
}

export default Router;