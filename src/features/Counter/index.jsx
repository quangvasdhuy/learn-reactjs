import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

CounterFeature.propTypes = {
    
};

function CounterFeature(props) {
    const count = useSelector(state => state.count)
    return (
        <div>
            Counter Filter: {count}
        </div>
    );
}

export default CounterFeature;