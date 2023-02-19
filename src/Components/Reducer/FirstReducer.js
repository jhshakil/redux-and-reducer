import React, { useReducer } from 'react';

const FirstReducer = () => {
    const initialState = 10;
    const reducer = (state, action) => {
        if (action.type === 'increment') {
            return state + action.payload.count;
        } else if (action.type === 'decrement') {
            return state - 1;
        }

    };
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <button onClick={() => dispatch({ type: 'increment', payload: { count: 5 } })}>+</button>
            <h1>Counter {state}</h1>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        </div>
    );
};

export default FirstReducer;