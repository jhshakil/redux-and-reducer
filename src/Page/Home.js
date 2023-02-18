import React from 'react';
import ContextParent from '../Components/ContextAPI/ContextParent';
import NormalState from '../Components/NormalState';

const Home = () => {
    return (
        <div>
            {/* <NormalState></NormalState> */}
            <ContextParent></ContextParent>
        </div>
    );
};

export default Home;