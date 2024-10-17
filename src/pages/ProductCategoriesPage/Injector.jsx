import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Helmet } from 'react-helmet';

const InjectorCategories = () => {
    const categories = [
        {
            id: 1,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1724647442/cp-itech/categories/injector/injector_assy_DSC_0473b-removebg-preview_1_j0mnc8.png',
            name: 'Injector Assy',
            type: 'Injector',
            link: '/products/fuel-injection-systems/common-rail/injector/injector-assy',
        },
        {
            id: 8,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1727172954/cp-itech/categories/injector/nozzle_injector-removebg-preview_qfmpnw.png',
            name: 'Nozzle',
            type: 'Injector',
            link: '/products/fuel-injection-systems/common-rail/injector/nozzle-injector',
        },
        {
            id: 2,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1724652271/cp-itech/categories/injector/DSC_0545-removebg-preview_yenmah_izmsj3.png',
            name: 'Solenoid',
            type: 'Injector',
            link: '/products/fuel-injection-systems/common-rail/injector/solenoid',
        },
        {
            id: 3,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1724652451/cp-itech/categories/injector/valve_seat_yqqiwg_zx0ohu.png',
            name: 'Orifice Valve',
            type: 'Injector',
            link: '/products/fuel-injection-systems/common-rail/injector/orifice-valve',
        },
        {
            id: 4,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1726822452/cp-itech/categories/injector/command-piston-removebg-preview_f0ycst.png',
            name: 'Command Piston',
            type: 'Injector',
            link: '/products/fuel-injection-systems/common-rail/injector/command-piston',
        },
        {
            id: 9,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1725095335/cp-itech/categories/injector/DSC_0599-removebg-preview_tsn4vd_hgu6qa.png',
            name: 'Valve Seat Retaining Nut',
            type: 'Injector',
            link: '/products/fuel-injection-systems/common-rail/injector/valve-seat-retaining-nut',
        },

        {
            id: 5,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1724653000/cp-itech/categories/injector/DSC_0694_copy_ujmdkj_ckawlm.png',
            name: 'Cup Nozzle Injector',
            type: 'Injector',
            link: '/products/fuel-injection-systems/common-rail/injector/cup-nozzle-injector',
        },
        {
            id: 6,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1724831265/cp-itech/categories/injector/control_valve_DSC_0580b-removebg-preview_koj24n.png',
            name: 'Control Valve',
            type: 'Injector',
            link: '/products/fuel-injection-systems/common-rail/injector/control-valve',
        },
    ];

    const [selectedType, setSelectedType] = useState('All');

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    const filteredCategories =
        selectedType === 'All'
            ? categories
            : categories.filter((category) => category.type === selectedType);

    const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);

    const paginatedCategories = filteredCategories.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage,
    );

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll ke atas ketika halaman berubah
    };

    // Ref to track when the component is in view
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    const animationCard = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    const Card = ({ imageSrc, name, link }) => {
        return (
            <a href={link}>
                <div className='overflow-hidden bg-gradient-to-r from-gray-100 to-gray-300 rounded-md hover:opacity-60 shadow-md'>
                    <div className='p-2'>
                        <img src={imageSrc} alt={name} />
                        <h3 className='mt-3 text-lg text-center font-bold text-gray-900 sm:mt-5'>
                            {name}
                        </h3>
                    </div>
                </div>
            </a>
        );
    };

    const Pagination = ({ totalPages, currentPage, onPageChange }) => {
        return (
            <div className='flex justify-center space-x-4 mt-4'>
                {Array.from(
                    { length: totalPages },
                    (_, index) => index + 1,
                ).map((page) => (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`px-4 py-2 rounded-md font-semibold ${
                            currentPage === page
                                ? 'bg-gray-500 text-white'
                                : 'bg-white text-gray-700'
                        }`}
                    >
                        {page}
                    </button>
                ))}
            </div>
        );
    };

    return (
        <section
            ref={sectionRef}
            className='pt-8 bg-gradient-to-r from-gray-100 to-gray-300 text-gray-100'
        >
            <Helmet>
                <title>Injector Categories | Itech Persada Nusantara</title>
                <meta
                    name='description'
                    content='All product categories are original Itech brand with the best quality, affordable prices and guaranteed quality.'
                />
                <meta
                    name='keywords'
                    content='Injector, Injector Itech Persada Nusantara, Itech'
                />
            </Helmet>
            <div className='mx-auto text-center bg-gradient-to-r from-gray-400 to-gray-600 py-4 w-full'>
                <h2 className='text-3xl font-extrabold leading-tight text-gray-100 sm:text-4xl xl:text-3xl '>
                    Injector Categories
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
                            selectedType === 'Injector'
                                ? 'text-gray-700 bg-gray-300'
                                : 'text-gray-700 bg-white'
                        } rounded-md`}
                        onClick={() => setSelectedType('Injector')}
                    >
                        Injector
                    </button>
                </div>
            </div>
            <div className='px-4 mx-auto w-full sm:px-6 lg:px-0 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100'>
                <motion.div
                    key={currentPage} // This will cause re-mount on page change
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                    variants={animationCard}
                    transition={{ duration: 0.5 }} // Control the speed of the animation
                    className='grid py-8 max-w-4xl lg:max-w-5xl grid-cols-1 mx-auto text-center gap-y-6 sm:gap-x-6 sm:grid-cols-2 lg:grid-cols-4 lg:py-10 sm:text-left'
                >
                    {paginatedCategories.map((category, index) => (
                        <Card
                            key={index}
                            imageSrc={category.imageSrc}
                            name={category.name}
                            link={category.link}
                        />
                    ))}
                </motion.div>
            </div>
            <div className='mx-auto text-center bg-gradient-to-r from-gray-100 to-gray-300 py-4 w-full'>
                <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </section>
    );
};

export default InjectorCategories;
