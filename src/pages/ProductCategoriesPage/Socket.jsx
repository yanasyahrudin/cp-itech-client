import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Helmet } from 'react-helmet';

const SocketCategories = () => {
    const categories = [
        {
            id: 1,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1724666211/cp-itech/categories/socket/Soket_SCV_Denso_Injector_Denso_Dmax-removebg-preview_af8myr.png',
            name: 'Socket SCV Injector',
            type: 'Socket',
            link: '/products/other-products/socket/socket-scv-injector',
        },
        {
            id: 2,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1724666210/cp-itech/categories/socket/Soket_Selenoid_valve_hidrolik-removebg-preview_udlrvc.png',
            name: 'Socket Solenoid Valve Hydraulic',
            type: 'Socket',
            link: '/products/other-products/socket/socket-solenoid-valve',
        },
        {
            id: 3,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1724666210/cp-itech/categories/socket/Soket_Oil_Temperature_Sensor_Denso-removebg-preview_zfcyag.png',
            name: 'Socket Oil Temperature Sensor',
            type: 'Socket',
            link: '/products/other-products/socket/socket-oil-temperature',
        },
    ];

    const [selectedType, setSelectedType] = useState('All');

    const filteredCategories =
        selectedType === 'All'
            ? categories
            : categories.filter((category) => category.type === selectedType);

    // Ref to track when the component is in view
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    const animationCard = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    const Card = ({ imageSrc, name, link }) => {
        return (
            <div className='overflow-hidden bg-gradient-to-r from-gray-100 to-gray-300 rounded-md hover:opacity-60 shadow-md'>
                <a href={link}>
                    <div className='p-2'>
                        <img src={imageSrc} alt={name} />
                        <h3 className='mt-3 text-lg text-center font-bold text-gray-900 sm:mt-5'>
                            {name}
                        </h3>
                    </div>
                </a>
            </div>
        );
    };

    return (
        <section
            ref={sectionRef}
            className='pt-8 bg-gradient-to-r from-gray-100 to-gray-300 text-gray-100'
        >
            <Helmet>
                <title>Socket Categories | Itech Persada Nusantara</title>
                <meta
                    name='description'
                    content='All product categories are original Itech brand with the best quality, affordable prices and guaranteed quality.'
                />
                <meta name='keywords' content='Socket, Socket Itech Persada Nusantara, Itech' />
            </Helmet>
            <div className='mx-auto text-center bg-gradient-to-r from-gray-400 to-gray-600 py-4 w-full'>
                <h2 className='text-3xl font-extrabold leading-tight text-gray-100 sm:text-4xl xl:text-3xl '>
                   Socket Categories
                </h2>
                <div className='flex justify-center space-x-4 mt-4'>
                    <button
                        className={`px-4 py-2 font-semibold ${
                            selectedType === 'All'
                                ? 'text-gray-700 bg-gray-300'
                                : 'text-gray-700 bg-white'
                        } rounded-md`}
                        onClick={() => setSelectedType('All')}
                    >
                        All
                    </button>
                    <button
                        className={`px-4 py-2 font-semibold ${
                            selectedType === 'Socket'
                                ? 'text-gray-700 bg-gray-300'
                                : 'text-gray-700 bg-white'
                        } rounded-md`}
                        onClick={() => setSelectedType('Socket')}
                    >
                        Socket
                    </button>
                </div>
            </div>
            <div className='px-4 mx-auto w-full sm:px-6 lg:px-0 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100'>
                <motion.div
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                    variants={animationCard}
                    transition={{ duration: 0.5 }} // Control the speed of the animation
                    className='grid py-8 max-w-4xl lg:max-w-5xl grid-cols-1 mx-auto text-center gap-y-6 sm:gap-x-6 sm:grid-cols-2 lg:grid-cols-4 lg:py-10 sm:text-left'
                >
                    {filteredCategories.map((category, index) => (
                        <Card
                            key={index}
                            imageSrc={category.imageSrc}
                            name={category.name}
                            link={category.link}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SocketCategories;
