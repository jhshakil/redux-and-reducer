import React, { useReducer } from 'react';

const FormReducer = () => {
    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'input':
                return {
                    ...state,
                    [action.payload.name]: action.payload.value
                }
            default:
                return state
        }

    }
    const [state, dispatch] = useReducer(reducer, initialState)
    const submit = (event) => {
        event.preventDefault();
        console.log(state)
    }
    return (
        <div>
            <div className="font-mono">
                <div className="container mx-auto">
                    <div className="flex justify-center px-6 my-12">
                        <div className="w-full xl:w-3/4 lg:w-11/12">
                            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                                <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
                                <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={submit}>
                                    <div className="mb-4 md:flex md:justify-between">
                                        <div className="mb-4 md:mr-2 md:mb-0">
                                            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">
                                                First Name
                                            </label>
                                            <input
                                                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="firstName"
                                                type="text"
                                                name='firstName'
                                                placeholder="First Name"
                                                onBlur={(e) => dispatch({ type: "input", payload: { name: "firstName", value: e.target.value } })}
                                            />
                                        </div>
                                        <div className="md:ml-2">
                                            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                                                Last Name
                                            </label>
                                            <input
                                                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="lastName"
                                                type="text"
                                                name='lastName'
                                                placeholder="Last Name"
                                                onBlur={(e) => dispatch({ type: "input", payload: { name: "lastName", value: e.target.value } })}
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                                            Email
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="email"
                                            type="email"
                                            name='email'
                                            placeholder="Email"
                                            onBlur={(e) => dispatch({ type: "input", payload: { name: "email", value: e.target.value } })}
                                        />
                                    </div>
                                    <div className="mb-4 md:flex md:justify-between">
                                        <div className="mb-4 md:mr-2 md:mb-0">
                                            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                                                Password
                                            </label>
                                            <input
                                                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="password"
                                                name='password'
                                                type="password"
                                                placeholder="Password"
                                                onBlur={(e) => dispatch({ type: "input", payload: { name: "password", value: e.target.value } })}
                                            />
                                            <p className="text-xs italic text-red-500">Please choose a password.</p>
                                        </div>
                                        <div className="md:ml-2">
                                            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="c_password">
                                                Confirm Password
                                            </label>
                                            <input
                                                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="c_password"
                                                name='confirmPassword'
                                                type="password"
                                                placeholder="Confirm Password"
                                                onBlur={(e) => dispatch({ type: "input", payload: { name: "confirmPassword", value: e.target.value } })}
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-6 text-center">
                                        <input
                                            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                            type="submit"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormReducer;