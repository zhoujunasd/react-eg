import {combineReducers} from 'redux'

import counter from './counter';
import menuText from './menuText';

const reducer = combineReducers({
    counter,
    menuText,
})

export default reducer