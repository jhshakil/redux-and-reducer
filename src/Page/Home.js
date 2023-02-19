import React from 'react';
import ContextParent from '../Components/ContextAPI/ContextParent';
import Form from '../Components/Form';
import NormalState from '../Components/NormalState';
import FirstReducer from '../Components/Reducer/FirstReducer';
import FormReducer from '../Components/Reducer/FormReducer';

const Home = () => {
    return (
        <div>
            {/* <NormalState></NormalState> */}
            {/* <ContextParent></ContextParent> */}
            {/* <Form></Form> */}
            {/* <FirstReducer></FirstReducer> */}
            <FormReducer></FormReducer>
        </div>
    );
};

export default Home;