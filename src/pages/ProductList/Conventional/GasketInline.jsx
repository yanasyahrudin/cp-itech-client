import React, { useState } from 'react';
import { IoArrowBackCircle, IoChatbox } from 'react-icons/io5';

import {
    BiSolidSkipNextCircle,
    BiSolidSkipPreviousCircle,
} from 'react-icons/bi';
import FindMarketplaceButton from '../../../components/FindMarketplaceButton';
import { Helmet } from 'react-helmet';

const GasketInlineList = () => {
    const products = [{
        name: 'Seal Gasket Kit FIP Bospom 80 0637 Pump Zexel Ford Ranger Evere'
    }]
    // State for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 10; // Adjust number of products per page
    const totalPages = Math.ceil(products.length / productsPerPage);

    // Your business WhatsApp number (replace with your actual number)
    const businessPhoneNumber = '+628117531881'; // Example: Add your real WhatsApp number here

    // Get current products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(
        indexOfFirstProduct,
        indexOfLastProduct,
    );

    // Change page
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

        // Go back to the previous page
        const handleBackClick = () => {
            window.history.back(); // Navigates back in the browser history
        };

    return (
        <div className='mx-auto sm:max-w-full md:max-w-full lg:max-full md:px-0 md:py-0 lg:px-0 lg:py-0 bg-gradient-to-r from-gray-100 to-gray-300 '>
            <Helmet>
                <title>
                    Gasket Repair Kit Inline Product List | Itech Persada Nusantara
                </title>
                <meta
                    name='description'
                    content='All of our products are original Itech brands which
                            have affordable prices and the best quality. If you
                            are interested in prices and other details of our
                            products, you can contact us via the selected
                            product list.'
                />
                <meta
                    name='keywords'
                    content='Gasket Repair Kit Inline, Gasket Repair Kit Inline Fuel Injection Pump, Itech Persada Nusantara'
                />
            </Helmet>

            <div className=' md:mb-0 md:max-w-6xl sm:mx-auto md:text-center text-center'>
                <div className='flex justify-start pt-4 px-5 justify-between text-gray-500'>
                    <button
                        onClick={handleBackClick}
                        className={`inline-flex shadow-md px-4 py-2 rounded-lg mx-2 items-center hover:bg-gray-500 hover:text-white text-gray-500  bg-white`}
                    >
                        <IoArrowBackCircle />
                        <span className='ml-1 font-semibold text-lg '>
                            Go back
                        </span>
                    </button>
                </div>
            </div>
            
            <div className='relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-0 xl:max-w-6xl p-5 lg:p-10 md:p-10'>
                <div className='w-full h-64 lg:w-1/2 lg:h-auto md:h-auto '>
                    <img
                        className='h-full w-full object-content rounded-md bg-gradient-to-r from-gray-400 to-gray-600'
                        src='https://res.cloudinary.com/dcbryptkx/image/upload/v1724640079/cp-itech/categories/fuelInjectionPump/inline/pc33240617-kit_perbaikan_pompa_injeksi_bahan_bakar_mobil_diesel_801671_190440_0390-removebg-preview_ckq0oy_vqtb70.png'
                        alt='itech product'
                    />
                </div>

                <div className='max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg lg:absolute md:top-0 -mt-5 mx-5 md:-mt-8 lg:w-2/4 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-18 xl:ml-12 rounded-md'>
                    <div className='flex flex-col p-5 md:px-10'>
                        <h2 className='text-2xl font-bold  text-gray-500 lg:text-2xl'>
                        Gasket Repair Kit Inline Products
                        </h2>
                        <p className='mt-4 text-gray-500'>
                            All of our products are original Itech brands which
                            have affordable prices and the best quality. If you
                            are interested in prices and other details of our
                            products, you can contact us via the selected
                            product list.
                        </p>
                        <FindMarketplaceButton />
                    </div>
                </div>
            </div>

            <div className=' md:mb-0 md:max-w-full sm:mx-auto md:text-center text-center'>
                <div className='bg-gradient-to-r from-gray-400 to-gray-600 py-5'>
                    <h2 className='font-sans text-3xl font-bold tracking-tight text-white sm:text-2xl sm:leading-none'>
                        List Product{' '}
                        <span className='inline-block text-deep-purple-accent-400'>
                        Gasket Repair Kit Inline Products
                        </span>
                    </h2>
                </div>

                <div className='bg-white pt-8 pb-6 px-3 md:px-5'>
                    <ul className='text-gray-700 text-start rounded-md max-w-5xl mx-auto'>
                        {currentProducts.map((product, index) => (
                            <li
                                key={index}
                                className='flex justify-between items-center mb-4 bg-gradient-to-r from-gray-100 to-gray-300 font-bold rounded-md shadow-md'
                            >
                                <span className='px-2 py-2 text-sm md:text-base flex-grow'>
                                    {indexOfFirstProduct +
                                        index +
                                        1 +
                                        '. Itech - '}
                                    {product.name} {product.vehicle}
                                </span>
                                <a
                                    href={`https://wa.me/${businessPhoneNumber}?text=Hi,%20I%20am%20interested%20in%20the%20product%20${encodeURIComponent(
                                        product.name,
                                    )}%20from%20www.itechpersadanusantara.com.`}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <button className='bg-gray-500 rounded-r-md px-3 py-2 sm:px-4 sm:py-3 text-white flex items-center gap-2'>
                                        <span className='text-xs md:text-base'>
                                            Contact Us
                                        </span>
                                        <IoChatbox />
                                    </button>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Pagination Controls */}
                <div className='flex justify-center py-6 bg-gradient-to-r from-gray-100 to-gray-300'>
                    <button
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                        className={`inline-flex shadow-md px-4 py-1 rounded-lg mx-2 items-center hover:bg-gray-300 hover:text-gray-100 ${currentPage === 1 ? 'bg-gray-300' : 'bg-gray-500 text-white'}`}
                    >
                        <BiSolidSkipPreviousCircle />
                        <span className='ml-1 font-semibold text-lg'>Prev</span>
                    </button>
                    <span className='text-gray-700 mx-4 py-2'>
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className={`inline-flex shadow-md px-4 py-1 rounded-lg mx-2 items-center hover:bg-gray-300 hover:text-gray-100 ${currentPage === totalPages ? 'bg-gray-300' : 'bg-gray-500 text-white'}`}
                    >
                        <span className='mr-1 font-semibold text-lg'>Next</span>
                        <BiSolidSkipNextCircle />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GasketInlineList;
