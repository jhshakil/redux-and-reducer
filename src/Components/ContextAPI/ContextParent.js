import React, { createContext, useState } from 'react';
import ContexChild from './ContexChild';

export const COUNTER_CONTEXT = createContext()
const ContextParent = () => {
    const [counter, setCounter] = useState(0);
    const value = { counter, setCounter }
    return (
        <COUNTER_CONTEXT.Provider value={value}>
            <div>
                <h2>This is Counter</h2>
                <ContexChild></ContexChild>
            </div>
        </COUNTER_CONTEXT.Provider>
    );
};

export default ContextParent;