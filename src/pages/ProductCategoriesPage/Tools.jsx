import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Helmet } from 'react-helmet';

const ToolCategories = () => {
    const categories = [
        {
            id: 13,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1724727823/cp-itech/categories/tools/Tester_Nozzle_atjdty_g82g4k.png',
            name: 'Nozzle Tester',
            type: 'Tool',
            link: '/products/other-products/tools/nozzle-tester',
        },

        {
            id: 2,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1724661274/cp-itech/categories/tools/CR-C_V2_Common_Rail_Injector_Tester_l03of0_idyjic.png',
            name: 'CR-C V2 Common Rail Injector Tester',
            type: 'Tool',
            link: '/products/other-products/tools/cr-c',
        },
        {
            id: 3,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1724661273/cp-itech/categories/tools/Pressure_Gauge_Itech_DSC_0574b_copy_ttwser_moncb2.png',
            name: 'Pressure Gauge',
            type: 'Tool',
            link: '/products/other-products/tools/pressure-gauge',
        },
        {
            id: 4,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1724661273/cp-itech/categories/tools/pin_tool_DSC_1437-removebg-preview_bfhsgr_ib7jkw.png',
            name: 'Pin Tool',
            type: 'Tool',
            link: '/products/other-products/tools/pin-tool',
        },
        {
            id: 5,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1724661272/cp-itech/categories/tools/Stand_Sketmad_And_Sketmad_DSC_0116_copy_f6uzxj_z8qjow.png',
            name: 'Stand Sketmat and Sketmat',
            type: 'Tool',
            link: '/products/other-products/tools/stand-sketmat',
        },
        
        {
            id: 6,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1724661273/cp-itech/categories/tools/PIPA_TESTER_NOZZLE_DSC_0068b-removebg-preview_ynnybg_hipxtj.png',
            name: 'Nozzle Tester Pipe',
            type: 'Tool',
            link: '/products/other-products/tools/nozzle-tester-pipe',
        },
        {
            id: 7,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1724661273/cp-itech/categories/tools/Tool_Shim_E1024072_Itech_Rp.500.000__DSC_0140_copy_ezotmx_msak63.png',
            name: 'Tool Shim',
            type: 'Tool',
            link: '/products/other-products/tools/tool-shim',
        },
        {
            id: 8,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1724661272/cp-itech/categories/tools/PLUNGER_TESTER_NOZZLE_DSC_0136b-removebg-preview_tefzwb_hqdcnr.png',
            name: 'Plunger Tester Nozzle',
            type: 'Tool',
            link: '/products/other-products/tools/plunger-nozzle-tester',
        },
        {
            id: 9,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1724661272/cp-itech/categories/tools/TOOL_INJECTOR_DENSO_3_PINS_DSC_0815_maqcxw_u89aeb.png',
            name: '3-Pin Injector Tool',
            type: 'Tool',
            link: '/products/other-products/tools/3-pin-injector',
        },
        {
            id: 10,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1724661272/cp-itech/categories/tools/TOOL_PEMBUKA_FILTER_DENSO_DSC_0003-removebg-preview_k0jsku_xxpdmb.png',
            name: 'Filter Wrench Tool',
            type: 'Tool',
            link: '/products/other-products/tools/filter-wrench-tool',
        },
        
        {
            id: 12,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1724661271/cp-itech/categories/tools/TOOLS_CAT_DSC_0510_copy_np60qw_t7aroq.png',
            name: 'Tools Cat',
            type: 'Tool',
            link: '/products/other-products/tools/tools-cat',
        },
        {
            id: 14,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1724727991/cp-itech/categories/tools/KUNCI%20HEX%20KEY%20no.0512%203.5MM_DSC_0562-removebg-preview_dlsple.png',
            name: 'Hex Key No.0512 3.5MM',
            type: 'Tool',
            link: '/products/other-products/tools/hex-key',
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
                        <img src={imageSrc} alt={name} />
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
                <title>Turbo Charger Categories | Itech Persada Nusantara</title>
                <meta
                    name='description'
                    content='All product categories are original Itech brand with the best quality, affordable prices and guaranteed quality.'
                />
                <meta name='keywords' content='Turbo Charger, Turbo Charger Itech Persada Nusantara, Itech' />
            </Helmet>
            <div className='mx-auto text-center bg-gradient-to-r from-gray-300 to-gray-600 py-4 w-full'>
                <h2 className='text-3xl font-extrabold leading-tight text-gray-100 sm:text-4xl xl:text-3xl '>
                    Tool Categories
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
                            selectedType === 'Tool'
                                ? 'text-gray-700 bg-gray-300'
                                : 'text-gray-700 bg-white'
                        } rounded-md`}
                        onClick={() => setSelectedType('Tool')}
                    >
                        Tool
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

export default ToolCategories;
