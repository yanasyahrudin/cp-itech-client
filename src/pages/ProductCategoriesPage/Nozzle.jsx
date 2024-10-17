import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Helmet } from 'react-helmet';

const NozzleCategories = () => {
    const categories = [
        {
            id: 1,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1724657136/cp-itech/categories/nozzle/nozzle_assy_DSC_0166b-removebg-preview_ryuzfm_nwc1ok.png',
            name: 'Nozzle Assy Pencil',
            type: 'Nozzle Assy',
            link: '/products/fuel-injection-systems/conventional/nozzle/nozzle-assy-pencil',
        },
        {
            id: 2,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1724657137/cp-itech/categories/nozzle/nozzle_assy_DSC_0195-removebg-preview_pbscst_nwpifs.png',
            name: 'Nozzle Assy Injetcor',
            type: 'Nozzle Assy',
            link: '/products/fuel-injection-systems/conventional/nozzle/nozzle-assy-injector-1',
        },
        {
            id: 3,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1724657138/cp-itech/categories/nozzle/nozzle_assy_DSC_0510-removebg-preview_nfcigk_tgta6r.png',
            name: 'Nozzle Assy Injector',
            type: 'Nozzle Assy',
            link: '/products/fuel-injection-systems/conventional/nozzle/nozzle-assy-injector',
        },
        {
            id: 4,
            imageSrc:
            'https://res.cloudinary.com/dcbryptkx/image/upload/v1724657135/cp-itech/categories/nozzle/DSC_0314b-removebg-preview_vezxbp_ke4xof.png',
            name: 'Nozzle FIP',
            type: 'Nozzle FIP',
            link: '/products/fuel-injection-systems/conventional/nozzle/nozzle-fip',
        },

        {
            id: 6,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1724657138/cp-itech/categories/nozzle/DSC_0275-removebg-preview_eypeg8_dpmwnf.png',
            name: 'Nozzle FIP',
            type: 'Nozzle FIP',
            link: '/products/fuel-injection-systems/conventional/nozzle/nozzle-fip-1',
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
                <title>Nozzle Categories | Itech Persada Nusantara</title>
                <meta
                    name='description'
                    content='All product categories are original Itech brand with the best quality, affordable prices and guaranteed quality.'
                />
                <meta name='keywords' content='Nozzle, Nozzle Itech Persada Nusantara, Itech' />
            </Helmet>
            <div className='mx-auto text-center bg-gradient-to-r from-gray-400 to-gray-600 py-4 w-full'>
                <h2 className='text-3xl font-extrabold leading-tight text-gray-100 sm:text-4xl xl:text-3xl '>
                    Nozzle Categories
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
                            selectedType === 'Nozzle Assy'
                                ? 'text-gray-700 bg-gray-300'
                                : 'text-gray-700 bg-white'
                        } rounded-md`}
                        onClick={() => setSelectedType('Nozzle Assy')}
                    >
                        Nozzle Assy
                    </button>
                    <button
                        className={`px-4 py-2 font-semibold ${
                            selectedType === 'Nozzle FIP'
                                ? 'text-gray-700 bg-gray-300'
                                : 'text-gray-700 bg-white'
                        } rounded-md`}
                        onClick={() => setSelectedType('Nozzle FIP')}
                    >
                        Nozzle FIP
                    </button>
                </div>
            </div>
            <div className='px-4 mx-auto w-full sm:px-6 lg:px-0 bg-white'>
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

export default NozzleCategories;
