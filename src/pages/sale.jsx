import React, { useState } from 'react';

const currencies = ['USD', 'EUR', 'GBP', 'PKR', 'CAD', 'JPY'];

const SalePage = () => {
    const [currency, setCurrency] = useState('USD');
    const [showCurrency, setShowCurrency] = useState(false);
    return (
        <div className="min-h-screen bg-white px-6 pt-8">
            <nav className="mb-10 text-sm text-gray-500">
                <span>Home</span> &gt; <span>Search</span>
            </nav>
            <h1 className="text-5xl font-light text-gray-900 mb-8 ml-8">Search</h1>
            <div className="ml-8 mt-8 relative w-24">
                <button
                    className="flex items-center justify-between w-full px-4 py-2 border border-gray-200 bg-white text-[#888] font-semibold focus:outline-none"
                    onClick={() => setShowCurrency(v => !v)}
                >
                    {currency} <span className="ml-2">&#9662;</span>
                </button>
                {showCurrency && (
                    <div className="absolute left-0 mt-1 w-full bg-white border border-gray-200 rounded shadow z-50">
                        {currencies.map(cur => (
                            <button
                                key={cur}
                                onClick={() => { setCurrency(cur); setShowCurrency(false); }}
                                className={`w-full text-left px-4 py-2 text-[15px] ${currency === cur ? 'bg-[#e65540] text-white font-bold' : 'hover:bg-[#f2f2f2] text-[#888]'}`}
                            >
                                {cur}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SalePage; 