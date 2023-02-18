import React, { useState } from 'react';

const NormalState = () => {
    const [counter, setCounter] = useState(0);
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

export default NormalState;