import React from 'react';
import Images from '../../../constant/images';
import emailjs from "@emailjs/browser";
import { motion } from 'framer-motion';

const FormPage = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_mmcwzcp', 'template_lkxqq2r', e.target, 'tKZSsK844BC4zJ_8f')
            .then((result) => {
                console.log('SUCCESS!', result.text);
                alert("Message sent successfully!");
            }, (error) => {
                console.log('FAILED...', error.text);
                alert("Failed to send message. Please try again.");
            });
        e.target.reset(); 
    };

    return (
        <>
            <div className="w-full h-64 flex items-center justify-center relative" style={{ background: `url(${Images.banner08}) center/cover` }}>
                <h1 className="text-white text-5xl font-extrabold tracking-wide text-center z-10">CONTACT</h1>
                <div className="absolute inset-0 bg-black opacity-30"></div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-24 py-20 px-4 md:px-12 max-w-7xl mx-auto">
                <div className="w-full md:w-[60%] flex justify-center">
                    <motion.iframe
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.6362761737046!2d-7.5364266245035445!3d33.60378817332928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cdb2f812837f%3A0xbbcfc74fbc11b2d9!2sLionsGeek!5e1!3m2!1sen!2sma!4v1749028606804!5m2!1sen!2sma"
                        className="rounded object-cover border-0 shadow-lg"
                        style={{ width: '100%', maxWidth: '600px', height: '450px' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps"
                    />
                </div>
                <div className="w-full md:w-[55%] text-left">
                    <h2 className="text-[24px] font-light mb-6 text-gray-800">Send us your message</h2>
                    <form className="space-y-4" onSubmit={sendEmail}>
                        <div>
                            <input
                                type="text"
                                name="user_name"
                                placeholder="Name"
                                aria-label="Name"
                                className="w-full px-4 py-2 text-[13px] text-gray-700 bg-white border border-gray-300 rounded focus:outline-none focus:border-gray-400"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="user_email"
                                placeholder="Email"
                                aria-label="Email"
                                className="w-full px-4 py-2 text-[13px] text-gray-700 bg-white border border-gray-300 rounded focus:outline-none focus:border-gray-400"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="tel"
                                name="user_phone"
                                placeholder="Phone"
                                aria-label="Phone"
                                className="w-full px-4 py-2 text-[13px] text-gray-700 bg-white border border-gray-300 rounded focus:outline-none focus:border-gray-400"
                                required
                            />
                        </div>
                        <div>
                            <textarea
                                name="message"
                                placeholder="Message"
                                aria-label="Message"
                                rows="5"
                                className="w-full px-4 py-2 text-[13px] text-gray-700 bg-white border border-gray-300 rounded focus:outline-none focus:border-gray-400 resize-none"
                                required
                            ></textarea>
                        </div>
                        <div className="flex justify-start pt-2">
                            <button
                                type="submit"
                                className="px-10 py-2.5 bg-black hover:bg-[#e65540] text-white text-sm font-normal rounded transition duration-300"
                            >
                                SEND
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default FormPage;
