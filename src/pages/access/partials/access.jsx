import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Access = () => {
    const [showCreate, setShowCreate] = useState(false);
    const navigate = useNavigate();

    if (showCreate) {
        return (
            <div className="container mx-auto max-w-[900px] min-h-screen flex flex-col items-start justify-center px-4 py-12">
                <nav className="mb-6 text-sm text-gray-500">
                    <span>Home</span> &gt; <span>Create Account</span>
                </nav>
                <h1 className="text-4xl font-light mb-2">Create Account</h1>
                <h2 className="text-lg text-gray-600 mb-8">Your Personal Details</h2>
                <form className="w-full max-w-2xl flex flex-col gap-6">
                    <div>
                        <label className="block text-base mb-1">First Name</label>
                        <input type="text" placeholder="First Name" className="w-full border border-gray-300 p-3 text-base" />
                    </div>
                    <div>
                        <label className="block text-base mb-1">Last Name</label>
                        <input type="text" placeholder="Last Name" className="w-full border border-gray-300 p-3 text-base" />
                    </div>
                    <div>
                        <label className="block text-base mb-1">Email</label>
                        <input type="email" placeholder="Email" className="w-full border border-gray-300 p-3 text-base" />
                    </div>
                    <div>
                        <label className="block text-base mb-1">Password</label>
                        <input type="password" placeholder="Password" className="w-full border border-gray-300 p-3 text-base" />
                    </div>
                    <div className="flex items-center mt-2">
                        <button type="submit" className="bg-gray-900 hover:bg-[#e65540] transition-colors text-white text-base font-semibold py-3 px-10 flex items-center gap-2">
                            <span role="img" aria-label="user">👤</span> CREATE
                        </button>
                        <a href="#" onClick={e => { e.preventDefault(); navigate('/'); }} className="ml-6 text-gray-600 hover:text-[#e65540] transition-colors text-base">
                            or Return to Store
                        </a>
                    </div>
                </form>
            </div>
        );
    }

    return (
        <>
            <div className="container mx-auto max-w-[1300px] min-h-screen flex items-center justify-center">
                <div className="flex gap-10 px-5">

                    <div className="flex-1 max-w-[600px] border border-gray-300 p-8">
                        <h1 className="text-[32px] mb-4">New Customer</h1>
                        <h2 className="text-[15px] font-bold text-gray-600 mb-4">Register Account</h2>
                        <p className="text-[15px] font-normal text-gray-600 mb-6 leading-relaxed">
                            By creating an account you will be able to shop faster, be up to date
                            on an order's status, and keep track of the orders you have previously
                            made.
                        </p>
                        <button onClick={() => setShowCreate(true)} className="bg-gray-800 hover:bg-[#e65540] transition-colors text-white text-xs uppercase py-3 px-6">
                            Continue
                        </button>
                    </div>

                    <div className="flex-1 max-w-[600px] border border-gray-300 p-8">
                        <h1 className="text-[32px] mb-4">Returning Customer</h1>
                        <p className="text-[15px] text-gray-600 mb-6">I am a returning customer</p>
                        
                        <div className="mb-4">
                            <label className="block text-[15px] text-gray-800 mb-2">Email</label>
                            <input type="email" className="w-full p-2 border border-gray-300 text-[13px]" />
                        </div>
                        
                        <div className="mb-4">
                            <label className="block text-[15px] text-gray-800 mb-2">Password</label>
                            <input type="password" placeholder="Password" className="w-full p-2 border border-gray-300 text-[13px]" />
                        </div>
                        
                        <a href="#" className="block text-[15px] text-gray-600 mb-5 hover:text-[#e65540] transition-colors">
                            Forgot your password?
                        </a>
                        
                        <div className="flex items-center">
                            <button className="bg-gray-800 hover:bg-[#e65540] transition-colors text-white text-xs uppercase py-3 px-6">
                                Sign In
                            </button>
                            <a href="#" className="text-[15px] text-gray-600 ml-4 hover:text-[#e65540] transition-colors">
                                or Return to Store
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Access;