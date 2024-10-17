import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Hero = () => {
    const scrollToSectionProducts = (sectionId) => {
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Ref to track when the component is in view
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    const textVariant = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    };

    const buttonVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const imageVariant = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <div
            ref={sectionRef}
            id='homeSection'
            className='bg-gradient-to-r from-gray-100 to-gray-300'
        >
            <div className='w-full max-w-[1200px] mx-auto flex flex-col md:flex-row py-10 px-6 md:px-20 items-center justify-center bg-hero md:h-auto overflow-hidden'>
                <motion.div
                    className='w-full text-left md:pr-10'
                    initial='hidden'
                    animate={isInView ? 'visible' : 'hidden'} // Only animate when in view
                    transition={{ duration: 0.8 }}
                    variants={textVariant}
                >
                    <h2 className='text-2xl md:text-4xl text-gray-500 font-extrabold text-center'>
                        Indonesia's Top Choice for{' '}
                        <span className='text-red-500'>
                            Quality Diesel and Automotive Spare Parts
                        </span>
                    </h2>
                    <h3 className='mt-4 md:mt-6 text-md md:text-md text-gray-500 font-normal text-center'>
                        For businesses, SMEs, and the government, discover a
                        thorough, simple, and clear variety of industrial and
                        engineering equipment goods.
                    </h3>

                    <motion.div
                        className='mt-6 md:mt-10 flex flex-col sm:flex-row justify-center'
                        initial='hidden'
                        animate={isInView ? 'visible' : 'hidden'} // Trigger button animation in view
                        transition={{ duration: 0.6, delay: 0.2 }}
                        variants={buttonVariant}
                    >
                        <button
                            className='w-auto max-w-xs lg:max-w-none shadow-md px-4 py-3 rounded-md font-bold text-md bg-gray-500 text-white hover:bg-white hover:text-gray-500 self-center '
                            onClick={() =>
                                scrollToSectionProducts('productsSection')
                            }
                        >
                            Get Products
                        </button>
                    </motion.div>
                </motion.div>

                <motion.div
                    className='w-full flex justify-center md:justify-end mt-6 md:mt-0'
                    initial='hidden'
                    animate={isInView ? 'visible' : 'hidden'} // Animate image when in view
                    transition={{ duration: 0.8, delay: 0.3 }}
                    variants={imageVariant}
                >
                    <img
                        className='rounded-md w-full max-w-[400px] h-auto '
                        src='https://res.cloudinary.com/dcbryptkx/image/upload/w_500/v1725424410/cp-itech/ITech_2_bkydom.png'
                        alt='Product Display'
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
