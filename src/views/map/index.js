import React from 'react';
import PropTypes from 'prop-types';

class MapCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount(){
        console.log(this.props.match.params.id)
    }

    render() {
        return (
            <div>
                <h2>详情</h2>
            </div>
        );
    }
}

MapCreate.propTypes = {};

export default MapCreate;
