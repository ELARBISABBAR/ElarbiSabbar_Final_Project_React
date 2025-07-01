import React from 'react';
import Images from '../../../constant/images';
import { motion } from 'framer-motion';

const StoryPage = () => {
    return (
        <>
            {/* Banner */}
            <div
                className="w-full h-64 flex items-center justify-center relative"
                style={{ background: `url(${Images.banner07}) center/cover` }}
            >
                <h1 className="text-white text-5xl font-extrabold tracking-wide text-center z-10">
                    ABOUT
                </h1>
                <div className="absolute inset-0 bg-black opacity-30"></div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col md:flex-row items-center justify-center  py-20 px-6 max-w-4xl mx-auto">
                {/* Left Image */}
                <div className="w-full md:w-[45%] flex justify-center">
                    <motion.img
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        src={Images.shopy4}
                        alt="about"
                        className="rounded object-cover"
                        style={{ width: '300px', height: '450px' }}
                    />
                </div>

                {/* Right Text */}
                <div className="w-full md:w-[55%] text-left">
                    <h2 className="text-[24px] font-light mb-6 text-gray-800">Our story</h2>
                    <p className="text-[13.5px] text-gray-600 mb-8 leading-relaxed w-170">
                        Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum
                        pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem
                        accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum
                        viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit,
                        quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam
                        imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue
                        ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu
                        facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum
                        rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum,
                        turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula
                        ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.
                    </p>

                    <blockquote className="border-l-4 border-gray-300 pl-6 py-4 text-gray-700 italic">
                        <p className="text-[14.5px] leading-relaxed mb-2">
                            Creativity is just connecting things. When you ask creative people how they
                            did something, they feel a little guilty because they didn't really do it,
                            they just saw something. It seemed obvious to them after a while.
                        </p>
                        <footer className="text-sm text-gray-500 mt-2">- Steve Job's</footer>
                    </blockquote>
                </div>
            </div>
        </>
    );
};

export default StoryPage;
