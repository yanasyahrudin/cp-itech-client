import React, { useRef, useState } from 'react';
import { IoReader } from 'react-icons/io5';
import { FaReadme } from 'react-icons/fa6';
import { motion, useInView } from 'framer-motion';

const WhyChoose = () => {
    const [highQualityP, setHighQualityP] = useState(false);
    const [oneHundredP, setOneHundredP] = useState(false);

    // Refs for each section
    const highQualityRef = useRef(null);
    const oneHundredRef = useRef(null);

    // Ref to track when the component is in view
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    const toggleHighQualityP = () => {
        setHighQualityP(!highQualityP);
        // Scroll to the section when the text expands/collapses
        if (highQualityRef.current) {
            highQualityRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    const toggleOneHundredP = () => {
        setOneHundredP(!oneHundredP);
        // Scroll to the section when the text expands/collapses
        if (oneHundredRef.current) {
            oneHundredRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    const truncateText = (text, limit) => {
        const words = text.split(' ');
        if (words.length > limit) {
            return words.slice(0, limit).join(' ') + '...';
        }
        return text;
    };

    const textHighQualityP =
        'At the foundation of what we provide are quality spare parts. Each of our products is meticulously crafted and put through rigorous testing to ensure that it meets the strictest requirements for strength and effectiveness for the particular vehicle.';
    const textOneHundredP =
        'A 100% Secured Spare Part is a component or part that provides a high level of protection and safety for the overall system or device for which it is intended.';

    const wordLimit = 30;

    const imageHQP = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    };

    const imageOHP = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
    };

    const textHQP = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div
            
            className='flex justify-center items-center min-h-auto bg-gradient-to-r from-gray-400 to-gray-600'
        >
            <div ref={sectionRef} className='max-w-full mx-auto p-5 sm:p-8 md:p-10 lg:p-12 '>
                <h2 className='text-white text-center pb-8 sm:pb-10 text-3xl sm:text-2xl md:text-3xl font-extrabold'>
                    Why choose ITech?
                </h2>

                <div className='md:flex max-w-5xl  mx-auto md:gap-10 justify-center'>
                    {/* High Quality Performance Section */}
                    <motion.div
                        initial='hidden'
                        animate={isInView ? 'visible' : 'hidden'} // Only animate when in view
                        transition={{ duration: 0.8 }}
                        variants={imageHQP}
                        className=' rounded-md  overflow-hidden flex flex-col max-w-lg mx-auto md:mx-0 md:w-1/2'
                    >
                        <img
                            className='w-full h-auto rounded-md'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_450,h_300/v1709974935/cp-itech/whyChoose/2149631010_4_gadxru.png'
                            alt='High Quality Performance'
                        />
                        <motion.div
                            initial='hidden'
                            animate={isInView ? 'visible' : 'hidden'} // Only animate when in view
                            transition={{ duration: 0.6, delay: 0.2 }}
                            variants={textHQP}
                            className='relative shadow-md -mt-16 px-6 sm:px-8 pt-5 pb-8 bg-gradient-to-r from-gray-100 to-gray-300 mx-5 sm:mx-8 md:mx-8 md:p-10 rounded-md'
                        >
                            <h4 className='font-extrabold text-gray-500 text-lg md:text-xl mb-3 text-center'>
                                High Quality Performance
                            </h4>
                            <p className='text-gray-600 text-sm md:text-base text-center'>
                                {highQualityP
                                    ? textHighQualityP
                                    : truncateText(textHighQualityP, wordLimit)}
                                {textHighQualityP.split(' ').length >
                                    wordLimit && (
                                    <button
                                        className='text-white shadow-md hover:text-gray-500 hover:bg-white font-bold ml-2 bg-gray-500 p-2 rounded-md'
                                        onClick={toggleHighQualityP}
                                    >
                                        {highQualityP ? (
                                            <IoReader />
                                        ) : (
                                            <FaReadme />
                                        )}
                                    </button>
                                )}
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* 100% Secured Section */}
                    <motion.div
                        initial='hidden'
                        animate={isInView ? 'visible' : 'hidden'} // Only animate when in view
                        transition={{ duration: 0.8 }}
                        variants={imageOHP}
                        className='rounded-md overflow-hidden flex flex-col max-w-lg mx-auto md:mx-0 md:w-1/2 mt-5 sm:mt-0'
                    >
                        <img
                            className='w-full h-auto rounded-md'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_450,h_300/v1709974937/cp-itech/whyChoose/2149631022_3_sq1qrw.png'
                            alt='100% Secured'
                        />
                        <motion.div 
                        initial='hidden'
                        animate={isInView ? 'visible' : 'hidden'} // Only animate when in view
                        transition={{ duration: 0.6, delay: 0.2 }}
                        variants={textHQP}
                        className='relative shadow-md -mt-16 px-6 sm:px-8 pt-5 pb-8 bg-gradient-to-r from-gray-100 to-gray-300  mx-5 sm:mx-8 md:mx-8 md:p-10 rounded-md'>
                            <h4 className='font-extrabold text-gray-500 text-lg md:text-xl mb-3 text-center'>
                                100% Secured
                            </h4>
                            <p className='text-gray-600 text-sm md:text-base text-center'>
                                {oneHundredP
                                    ? textOneHundredP
                                    : truncateText(textOneHundredP, wordLimit)}
                                {textOneHundredP.split(' ').length >
                                    wordLimit && (
                                    <button
                                        className='text-white shadow-md hover:text-gray-500 hover:bg-white font-bold ml-2 bg-gray-500 p-2 rounded-md'
                                        onClick={toggleOneHundredP}
                                    >
                                        {oneHundredP ? (
                                            <IoReader />
                                        ) : (
                                            <FaReadme />
                                        )}
                                    </button>
                                )}
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;
