import React, { useState } from 'react';

const Form = () => {
    const [isSignup, setisSignup] = useState(true);

    const toggleForm = () => {
        setisSignup(!isSignup);
    };

    return (
        <div className="flex items-center justify-center">
            <div className="form-box border-2 w-4/5 sm:w-4/6 lg:w-1/2 xl:w-2/5 p-8 mt-28 mb-10 rounded-2xl shadow-xl">

                {/* Title Text */}
                <div className="overflow-hidden">
                    <div className="flex justify-center transition-transform duration-500" style={{ transform: `translateX(${isSignup ? '0%' : '-50%'})`, width: '200%' }}>
                        <div className="w-1/2 text-3xl font-semibold text-center">
                            Signup Form
                        </div>
                        <div className="w-1/2 text-3xl font-semibold text-center">
                            Login Form
                        </div>
                    </div>
                </div>

                {/* Slide Controls */}
                <div className="relative flex justify-between mt-8 mb-4 border border-gray-300 rounded-lg overflow-hidden">
                    <label className={`w-1/2 text-center py-3 cursor-pointer ${isSignup ? 'text-white z-10' : 'text-black'} transition-colors duration-500`} onClick={() => setisSignup(true)}>
                        Signup
                    </label>
                    <label className={`w-1/2 text-center py-3 cursor-pointer ${!isSignup ? 'text-white z-10' : 'text-black'} transition-colors duration-500`} onClick={() => setisSignup(false)}>
                        Login
                    </label>
                    <div
                        className={`absolute top-0 left-0 h-full w-1/2 bg-gray-800 transition-all duration-500 ${isSignup ? 'translate-x-0' : 'translate-x-full'}`}>
                    </div>
                </div>

                {/* Form Inner */}
                <div className="overflow-hidden relative w-full">

                    <div className="flex transition-transform duration-500" style={{ transform: `translateX(${isSignup ? '0%' : '-50%'})`, width: '200%' }}>

                        {/* Signup Form */}
                        <form className="w-1/2 sm:px-4">
                            <div className="mb-4">
                                <input
                                    type="text"
                                    placeholder="Email Address"
                                    className="w-full h-12 px-4 border border-gray-300 rounded-lg"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="tel"
                                    placeholder="Contact Number"
                                    className="w-full h-12 px-4 border border-gray-300 rounded-lg"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full h-12 px-4 border border-gray-300 rounded-lg"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="password"
                                    placeholder="Confirm password"
                                    className="w-full h-12 px-4 border border-gray-300 rounded-lg"
                                />
                            </div>
                            <div className="btn relative">
                                <input
                                    type="submit"
                                    value="Signup"
                                    className="w-full h-12 bg-gray-800 text-white rounded-lg cursor-pointer"
                                />
                            </div>
                            <div className="login-link text-center mt-4">
                                Already have an account?{' '}
                                <a
                                    href="#"
                                    onClick={toggleForm}
                                    className="text-blue-500 hover:underline"
                                >
                                    Login now
                                </a>
                            </div>
                        </form>

                        {/* Login Form */}
                        <form className="w-1/2 sm:px-4">
                            <div className="mb-4">
                                <input
                                    type="text"
                                    placeholder="Email Address"
                                    className="w-full h-12 px-4 border border-gray-300 rounded-lg"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full h-12 px-4 border border-gray-300 rounded-lg"
                                />
                            </div>
                            <div className="btn relative">
                                <input
                                    type="submit"
                                    value="Login"
                                    className="w-full h-12 bg-gray-800 text-white rounded-lg cursor-pointer"
                                />
                            </div>
                            <div className="signup-link text-center mt-4">
                                Not a member?{' '}
                                <a
                                    href="#"
                                    onClick={toggleForm}
                                    className="text-blue-500 hover:underline"
                                >
                                    Signup now
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
