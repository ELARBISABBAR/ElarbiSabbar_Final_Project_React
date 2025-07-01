import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
    return (
        <>

            <section className="py-16">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-[30px] font-bold text-black text-center mb-16"
                >
                    @ FOLLOW US ON INSTAGRAM
                </motion.h2>

                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-start text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
                        {[0,1,2].map((i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + i * 0.2, duration: 0.8 }}
                                className="w-full md:w-1/3 p-8"
                            >
                                {i === 0 && (
                                    <>
                                        <h3 className="text-[18px] font-semibold text-[#555555] mb-2">
                                            Free Delivery Worldwide
                                        </h3>
                                        <p className="text-[13px] text-[#888888] italic">
                                            Mirum est notare quam littera gothica
                                        </p>
                                    </>
                                )}
                                {i === 1 && (
                                    <>
                                        <h3 className="text-[18px] font-semibold text-[#555555] mb-2">
                                            30 Days Return
                                        </h3>
                                        <p className="text-[13px] text-[#888888] italic">
                                            Simply return it within 30 days for an exchange.
                                        </p>
                                    </>
                                )}
                                {i === 2 && (
                                    <>
                                        <h3 className="text-[18px] font-semibold text-[#555555] mb-2">
                                            Store Opening
                                        </h3>
                                        <p className="text-[13px] text-[#888888] italic">
                                            Shop open from Monday to Sunday
                                        </p>
                                    </>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    );
};

export default Services;