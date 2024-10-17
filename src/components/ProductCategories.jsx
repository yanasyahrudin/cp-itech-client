import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
    BiSolidSkipNextCircle,
    BiSolidSkipPreviousCircle,
} from 'react-icons/bi';
import { motion, useInView } from 'framer-motion';

const products = {
    fuelInjectionSystem: [
        {
            title: 'Fuel Injection Pump',
            image: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1724638190/cp-itech/categories/Pump_Assy2_l2cu81_ujhcw0.png',
            alt: 'Fuel Injection Pump',
            link: '/products/fuel-injection-systems/conventional/fuel-injection-pump',
        },
        {
            title: 'Injector',
            image: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1724300222/cp-itech/categories/injector-removebg-preview_2_cvkxcf.png',
            alt: 'Injector',
            link: '/products/fuel-injection-systems/common-rail/injector',
        },
        {
            title: 'Supply Pump',
            image: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1724401605/cp-itech/categories/Supply_Pump_cl42ur_t2wbho.png',
            alt: 'Supply Pump',
            link: '/products/fuel-injection-systems/common-rail/supply-pump',
        },
        {
            title: 'Nozzle',
            image: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1724406887/cp-itech/categories/nozzle/NOZZLE_INJECTOR_KOMATSU-removebg-preview_vkz4en.png',
            alt: 'Nozzle',
            link: '/products/fuel-injection-systems/conventional/nozzle',
        },
        {
            title: 'EUI',
            image: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1725336595/cp-itech/categories/cover_eui_foto_DSC_0476b-removebg-preview_dxmfx6.png',
            alt: 'EUI',
            link: '/products/fuel-injection-systems/electric/eui',
        },
    ],

    otherProducts: [
        {
            title: 'Turbo Charger',
            image: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1724401752/cp-itech/categories/Turbo_hxmv95_iibay5.png',
            alt: 'Turbo Charger',
            link: '/products/other-products/turbo-charger',
        },
        {
            title: 'Sensor',
            image: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1724666507/cp-itech/categories/DSC_0160b-removebg-preview_d27pkp_1_bwlexy.png',
            alt: 'Sensor',
            link: '/products/other-products/sensor',
        },
        {
            title: 'Tools',
            image: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1724402915/cp-itech/categories/Tester_Nozzle_atjdty_paog6g.png',
            alt: 'Tools',
            link: '/products/other-products/tools',
        },
        {
            title: 'Socket',
            image: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1724665855/cp-itech/categories/Soket_Selenoid_valve_hidrolik-removebg-preview_bwonpy.png',
            alt: 'Socket',
            link: '/products/other-products/socket',
        },
        {
            title: 'Cover Injector',
            image: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1724901344/cp-itech/categories/cover_injector_q9amxj.png',
            alt: 'Socket',
            link: '/products/other-products/cover-injector',
        },
    ],
};

const ProductCard = ({ title, image, alt, link, isInView, imageVariant }) => (
    <motion.div
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ duration: 0.8 }}
        variants={imageVariant}
        className='flex shadow-md flex-col bg-gradient-to-r from-gray-100 to-gray-300 rounded-lg py-4 px-2 mx-2 my-4 hover:bg-gray-100'
    >
        <a href={link} className='hover:opacity-60'>
            <div className='h-40 rounded-lg overflow-hidden'>
                <img
                    src={image}
                    alt={alt}
                    className='h-full w-full object-contain '
                />
            </div>
            <div className='flex flex-col items-center mt-4'>
                <h4 className='text-xl font-semibold'>{title}</h4>
            </div>
        </a>
    </motion.div>
);

const ProductList = ({ productCategory, sliderRef }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    rows: 1,
                    slidesPerRow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 0,
                    rows: 1,
                    slidesPerRow: 2,
                },
            },
        ],
    };

    // Ref to track when the component is in view
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    const imageVariant = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <div ref={sectionRef}>
            <Slider ref={sliderRef} {...settings}>
                {productCategory.map((product, index) => (
                    <ProductCard
                        key={index}
                        {...product}
                        isInView={isInView}
                        imageVariant={imageVariant}
                    />
                ))}
            </Slider>
        </div>
    );
};

function ProductCategories() {
    const [activeTab, setActiveTab] = useState('fuelInjectionSystem');
    const sliderRef = useRef(null);

    const showTab = (tabId) => {
        setActiveTab(tabId);
    };

    const productCategory = products[activeTab];

    return (
        <div
            id='productsSection'
            className='bg-gradient-to-r from-gray-400 to-gray-600'
        >
            <h2 className='relative mx-auto max-w-[400px] p-8 w-[100%] text-white text-3xl font-extrabold text-center'>
                Product Categories
            </h2>

            <div className='bg-white flex-col items-center flex justify-center overflow-hidden	relative flex-col lg:p-4 '>
                <div className='w-full my-5 max-w-5xl mx-auto'>
                    {/* Tab Buttons */}
                    <div className='p-2'>
                        <div className='flex justify-center space-x-4'>
                            {Object.keys(products).map((tabId) => (
                                <button
                                    key={tabId}
                                    className={`px-4 py-3 shadow-md font-bold rounded-md hover:bg-gray-500 hover:text-white focus:outline-none tab-button ${
                                        activeTab === tabId
                                            ? 'bg-gray-500 text-white'
                                            : 'bg-gray-300 text-black'
                                    }`}
                                    onClick={() => showTab(tabId)}
                                >
                                    {tabId === 'fuelInjectionSystem'
                                        ? 'Fuel Injection System'
                                        : 'Other Products'}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className='p-4 tab-content rounded-b-lg'>
                        <ProductList
                            productCategory={productCategory}
                            sliderRef={sliderRef}
                        />
                    </div>
                </div>

                <div class='flex justify-center gap-7 mb-7'>
                    {/* Conditionally render the "prev" button */}

                    <button
                        class='inline-flex shadow-md bg-gray-500 items-center border px-4 py-2 rounded-lg text-gray-100 hover:bg-gray-300 hover:text-gray-100'
                        onClick={() => sliderRef.current.slickPrev()}
                    >
                        <BiSolidSkipPreviousCircle />
                        <span class='ml-1 font-semibold text-lg'>Prev</span>
                    </button>

                    {/* Conditionally render the "next" button */}

                    <button
                        class='inline-flex shadow-md bg-gray-500 items-center border px-4 py-1 rounded-lg text-gray-100 hover:bg-gray-300 hover:text-gray-100'
                        onClick={() => sliderRef.current.slickNext()}
                    >
                        <span class='mr-1 font-semibold text-lg'>Next</span>
                        <BiSolidSkipNextCircle />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCategories;
