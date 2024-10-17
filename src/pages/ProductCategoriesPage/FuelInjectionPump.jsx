import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Helmet } from 'react-helmet';

const FuelInjectionPumpCategories = () => {
    const categories = [
        {
            id: 1,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1724638742/cp-itech/categories/fuelInjectionPump/inline/Delivery_Valve-removebg-preview_iyax79_e4w5fz.png',
            name: 'Delivery Valve',
            type: 'Inline',
            link: '/products/fuel-injection-systems/conventional/fuel-injection-pump/delivery-valve-inline',
        },
        {
            id: 2,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1724639539/cp-itech/categories/fuelInjectionPump/inline/Plunger-removebg-preview_vkflsm_pul7eu.png',
            name: 'Plunger',
            type: 'Inline',
            link: '/products/fuel-injection-systems/conventional/fuel-injection-pump/plunger',
        },
        {
            id: 3,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1724639782/cp-itech/categories/fuelInjectionPump/inline/hand_pump_DSC_0180_copy_jnsxwo_fvgtto.png',
            name: 'Hand Pump',
            type: 'Inline',
            link: '/products/fuel-injection-systems/conventional/fuel-injection-pump/hand-pump',
        },
        {
            id: 4,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1724640079/cp-itech/categories/fuelInjectionPump/inline/pc33240617-kit_perbaikan_pompa_injeksi_bahan_bakar_mobil_diesel_801671_190440_0390-removebg-preview_ckq0oy_vqtb70.png',
            name: 'Gasket & Repair Kit',
            type: 'Inline',
            link: '/products/fuel-injection-systems/conventional/fuel-injection-pump/gasket-inline',
        },
        {
            id: 5,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1724641362/cp-itech/categories/fuelInjectionPump/rotary/Rotorhead-removebg-preview_onliuz_rt6ixa.png',
            name: 'Rotorhead',
            type: 'Rotary',
            link: '/products/fuel-injection-systems/conventional/fuel-injection-pump/rotorhead',
        },
        {
            id: 7,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1724906593/cp-itech/categories/fuelInjectionPump/inline/fuel_handpump_assy_DSC_0198b-removebg-preview_bkk3uo.png',
            name: 'Fuel Hand Pump Assy',
            type: 'Inline',
            link: '/products/fuel-injection-systems/conventional/fuel-injection-pump/fuel-hand-pump-assy',
        },
        {
            id: 8,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1727168153/cp-itech/categories/fuelInjectionPump/rotary/dv-rotary_yqhish.png',
            name: 'Delivery Valve',
            type: 'Rotary',
            link: '/products/fuel-injection-systems/conventional/fuel-injection-pump/delivery-valve-rotary',
        },

        {
            id: 23,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1725087289/cp-itech/categories/fuelInjectionPump/rotary/gasket_repair_kit80-0636-hot-sales-common-rail-repair-kits-80-0636-removebg-preview_gumifm_pyxibi.png',
            name: 'Gasket & Repair Kit',
            type: 'Rotary',
            link: '/products/fuel-injection-systems/conventional/fuel-injection-pump/gasket-rotary',
        },

        {
            id: 6,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1724642845/cp-itech/categories/fuelInjectionPump/rotary/Liner_Feedpump-removebg-preview_qf17co_p8jfkh.png',
            name: 'Liner Feed Pump',
            type: 'Rotary',
            link: '/products/fuel-injection-systems/conventional/fuel-injection-pump/liner-feed-pump',
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
            <div className='overflow-hidden bg-gradient-to-r from-gray-100 to-gray-300 rounded-md hover:opacity-60 shadow-md'>
                <a href={link}>
                    <div className='p-2'>
                        <img src={imageSrc} alt={name} loading='lazy' />
                        <h3 className='mt-3 text-lg text-center font-bold text-gray-900 sm:mt-5'>
                            {name}
                        </h3>
                    </div>
                </a>
            </div>
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
                <title>Fuel Injection Pump Categories | Itech Persada Nusantara</title>
                <meta
                    name='description'
                    content='All product categories are original Itech brand with the best quality, affordable prices and guaranteed quality.'
                />
                <meta name='keywords' content='Fuel Injection Pump, FIP Itech Persada Nusantara, Itech' />
            </Helmet>
            <div className='mx-auto text-center bg-gradient-to-r from-gray-400 to-gray-600 py-4 w-full'>
                <h2 className='text-3xl font-extrabold leading-tight text-gray-100 sm:text-4xl xl:text-3xl '>
                    Fuel Injection Pump Categories
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
                            selectedType === 'Inline'
                                ? 'text-gray-700 bg-gray-300'
                                : 'text-gray-700 bg-white'
                        } rounded-md`}
                        onClick={() => setSelectedType('Inline')}
                    >
                        Inline
                    </button>
                    <button
                        className={`px-4 py-2 font-semibold ${
                            selectedType === 'Rotary'
                                ? 'text-gray-700 bg-gray-300'
                                : 'text-gray-700 bg-white'
                        } rounded-md`}
                        onClick={() => setSelectedType('Rotary')}
                    >
                        Rotary
                    </button>
                </div>
            </div>

            <div className='px-4  mx-auto w-full sm:px-6 lg:px-0 bg-white'>
                <motion.div
                    key={currentPage} // This will cause re-mount on page change
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                    variants={animationCard}
                    transition={{ duration: 0.5 }} // Control the speed of the animation
                    className='grid py-8 max-w-4xl lg:max-w-5xl grid-cols-1 mx-auto text-center gap-y-6 sm:gap-x-6 sm:grid-cols-2  lg:grid-cols-4 lg:py-10 sm:text-left'
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

export default FuelInjectionPumpCategories;
