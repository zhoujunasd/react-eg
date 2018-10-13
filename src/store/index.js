import {createStore, applyMiddleware } from 'redux'
import reducer from '../reducers/index'
import thunkMiddleware from 'redux-thunk'

const state = {
    counter: 0,
    menuText: "首页",
    // loading: true,
    // film:[],
    // sutdent:{}
}

// const store =  createStore (reducer,state)
// export default store

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
)(createStore)

const store = createStoreWithMiddleware(
    reducer,
    state,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store