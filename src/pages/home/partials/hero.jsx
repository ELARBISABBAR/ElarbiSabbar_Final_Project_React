import React from 'react';
import Images from '../../../constant/images'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <>
            <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                autoPlay
                interval={2000}
                transitionTime={800}
                className="rounded-lg overflow-hidden"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{ backgroundImage: `url(${Images.carousel1})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '550px' }}
                    className="flex flex-col items-center justify-center text-center space-y-6"
                >
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-white text-sm sm:text-lg tracking-widest uppercase mb-2"
                    >Women Collection 2018</motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-wider mb-6"
                        style={{ WebkitTextStroke: '2px white' }}
                    >New Arrivals</motion.h1>
                    <button className="bg-white text-black rounded-full px-5 sm:px-7 py-2 sm:py-3 font-medium shadow text-xs sm:text-sm hover:bg-[#e65540] hover:text-white transition-colors duration-300 cursor-pointer">SHOP NOW</button>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{ backgroundImage: `url(${Images.carousel2})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '550px' }}
                    className="flex flex-col items-center justify-center text-center space-y-6"
                >
                    <motion.p
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-white text-sm sm:text-lg tracking-widest uppercase mb-2"
                    >Women Collection 2018</motion.p>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-wider mb-6"
                        style={{ WebkitTextStroke: '2px white' }}
                    >New Arrivals</motion.h1>
                    <button className="bg-white text-black rounded-full px-5 sm:px-7 py-2 sm:py-3 font-medium shadow text-xs sm:text-sm hover:bg-[#e65540] hover:text-white transition-colors duration-300 cursor-pointer">SHOP NOW</button>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{ backgroundImage: `url(${Images.carousel3})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '550px' }}
                    className="flex flex-col items-center justify-center text-center space-y-6"
                >
                    <motion.p
                        initial={{ opacity: 0, rotate: -10 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-white text-sm sm:text-lg tracking-widest uppercase mb-2"
                    >Women Collection 2018</motion.p>
                    <motion.h1
                        initial={{ opacity: 0, rotate: 10 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-wider mb-6"
                        style={{ WebkitTextStroke: '2px white' }}
                    >New Arrivals</motion.h1>
                    <button className="bg-white text-black rounded-full px-5 sm:px-7 py-2 sm:py-3 font-medium shadow text-xs sm:text-sm hover:bg-[#e65540] hover:text-white transition-colors duration-300 cursor-pointer">SHOP NOW</button>
                </motion.div>
            </Carousel>
        </>
    );
};

export default HeroSection;