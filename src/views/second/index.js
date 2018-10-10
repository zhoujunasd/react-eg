import React, { Component } from 'react';
import './index.less'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as action from '../../actions/counter'

import PropTypes from 'prop-types'

class Second extends Component {
    render() {
        // console.log(this.props)
        return (
            <div>
                <div className='counter'>
                    <strong>counter:{this.props.counter}</strong>
                    <button onClick={()=>this.props.increment()}>加</button>
                    <button onClick={()=>this.props.decrement()}>减</button>
                    <button onClick={()=>this.props.incrementAsync()}>异步加</button>
                    <button onClick={()=>this.props.incrementIfOdd()}>奇数加</button>
                </div>
            </div>
        );
    }
}

Second.propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
}

function mapStarteTopProps(state) {
    return {
        counter: state.counter
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(action, dispatch)
}
export default connect(mapStarteTopProps,mapDispatchToProps)(Second);

// export default Second;