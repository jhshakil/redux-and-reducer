import React, { useContext } from 'react';
import { COUNTER_CONTEXT } from './ContextParent';

const ContexChild = () => {
    const { counter, setCounter } = useContext(COUNTER_CONTEXT)
    const increment = () => {
        setCounter(counter + 1)
    }
    const decrement = () => {
        setCounter(counter - 1)
    }
    return (
        <div>
            <button onClick={increment}>+</button>
            <h1>Counter {counter}</h1>
            <button onClick={decrement}>-</button>
        </div>
    );
};

export default ContexChild;