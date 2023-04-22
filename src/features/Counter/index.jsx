import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease } from './counterSlice';

function CounterFeature(props) {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter)
    const handleIncrease= () => {
        dispatch(increase())
    }
    const handleDecrease= () => {
        dispatch(decrease())        
    }
    return (
        <div>
            Counter Filter: {count}
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrese</button>
        </div>
    );
}

export default CounterFeature;