import React, { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { MdArrowForwardIos } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

const openWhatsAppChat = () => {
    const message = encodeURIComponent(
        "Hi, I'm interested in the offer on itechpersadanusantara.com. Can you provide more details?",
    );
    window.open(`https://wa.me/+628117531881?text=${message}`, '_blank');
};

const SidebarMobile = ({ isOpen, onClose }) => {
    const [conventionalOpen, setConventionalOpen] = useState(false);
    const [commonRailOpen, setCommonRailOpen] = useState(false);
    const [electricOpen, setElectricOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const [productTypeOpen, setProductTypeOpen] = useState('');
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    const toggleConventional = () => {
        setConventionalOpen(!conventionalOpen);
        setCommonRailOpen(false);
        setElectricOpen(false);
    };

    const toggleCommonRail = () => {
        setCommonRailOpen(!commonRailOpen);
        setConventionalOpen(false);
        setElectricOpen(false);
    };

    const toggleElectric = () => {
        setElectricOpen(!electricOpen);
        setConventionalOpen(false);
        setCommonRailOpen(false);
    };

    const toggleProducts = () => {
        setProductsOpen(!productsOpen);
    };

    const toggleProductType = (type) => {
        setProductTypeOpen(productTypeOpen === type ? '' : type);
        setProductsOpen(true);
    };

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    return (
        <div
            className={`fixed z-[2147483647] inset-0 bg-gradient-to-r from-gray-400 to-gray-600 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}
        >
            <div className='w-full h-full  p-4 '>
                <button
                    className='text-gray-500 float-right p-4'
                    onClick={onClose}
                >
                    <IoMdClose />
                </button>
                <ul className='space-y-4 bg-gradient-to-r from-gray-100 to-gray-300 p-4 rounded-md'>
                    <li>
                        <a
                            href='/'
                            className={`${activeLink === '/' ? 'text-gray-500 font-semibold' : 'text-gray-500'} text-gray-500 font-normal hover:text-gray-100 `}
                        >
                            <img
                                className='h-10'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/v1708915844/cp-itech/LogoItech.png'
                                alt=''
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href='/'
                            className={`${activeLink === '/' ? 'text-gray-500 font-semibold' : 'text-gray-500'} text-gray-500 font-normal hover:font-bold `}
                        >
                            Home
                        </a>
                    </li>

                    <li>
                        <button
                            className={`${activeLink.startsWith('/products') ? 'text-gray-500 font-semibold' : 'text-gray-500'} text-gray-500 font-normal hover:font-bold w-full text-left flex items-center justify-between`}
                            onClick={toggleProducts}
                        >
                            Products
                            <MdArrowForwardIos
                                className={`transition-transform ${productsOpen ? 'rotate-90' : ''}`}
                            />
                        </button>
                        {productsOpen && (
                            <ul className='pl-4 mt-2 space-y-2 bg-gradient-to-r from-gray-100 to-gray-300 rounded-md p-2'>
                                <li>
                                    <button
                                        className='w-full text-left flex items-center justify-between'
                                        onClick={() =>
                                            toggleProductType('FuelInjection')
                                        }
                                    >
                                        Fuel Injection Systems
                                        <MdArrowForwardIos
                                            className={`transition-transform ${productTypeOpen === 'FuelInjection' ? 'rotate-90' : ''}`}
                                        />
                                    </button>
                                    {productTypeOpen === 'FuelInjection' && (
                                        <ul className='pl-4 mt-2 space-y-2'>
                                            <li>
                                                <button
                                                    className='w-full text-left flex items-center justify-between'
                                                    onClick={toggleConventional}
                                                >
                                                    Conventional
                                                    <MdArrowForwardIos
                                                        className={`transition-transform ${conventionalOpen ? 'rotate-90' : ''}`}
                                                    />
                                                </button>
                                                {conventionalOpen && (
                                                    <ul className='pl-4 mt-2 space-y-2'>
                                                        <li>
                                                            <a href='/products/fuel-injection-systems/conventional/fuel-injection-pump'>
                                                                Fuel Injection Pump
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href='/products/fuel-injection-systems/conventional/nozzle'>
                                                                Nozzle
                                                            </a>
                                                        </li>
                                                    </ul>
                                                )}
                                            </li>
                                            <li>
                                                <button
                                                    className='w-full text-left flex items-center justify-between'
                                                    onClick={toggleCommonRail}
                                                >
                                                    Common Rail
                                                    <MdArrowForwardIos
                                                        className={`transition-transform ${commonRailOpen ? 'rotate-90' : ''}`}
                                                    />
                                                </button>
                                                {commonRailOpen && (
                                                    <ul className='pl-4 mt-2 space-y-2'>
                                                        <li>
                                                            <a href='/products/fuel-injection-systems/common-rail/supply-pump'>
                                                                Supply Pump
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href='/products/fuel-injection-systems/common-rail/injector'>
                                                                Injector
                                                            </a>
                                                        </li>
                                                    </ul>
                                                )}
                                            </li>

                                            <li>
                                                <button
                                                    className='w-full text-left flex items-center justify-between'
                                                    onClick={toggleElectric}
                                                >
                                                    Electric
                                                    <MdArrowForwardIos
                                                        className={`transition-transform ${electricOpen ? 'rotate-90' : ''}`}
                                                    />
                                                </button>
                                                {electricOpen && (
                                                    <ul className='pl-4 mt-2 space-y-2'>
                                                        <li>
                                                            <a href='/products/fuel-injection-systems/electric/eui'>
                                                                EUI
                                                            </a>
                                                        </li>
                                                    </ul>
                                                )}
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li>
                                    <button
                                        className='w-full text-left flex items-center justify-between'
                                        onClick={() =>
                                            toggleProductType('Other')
                                        }
                                    >
                                        Other Products
                                        <MdArrowForwardIos
                                            className={`transition-transform ${productTypeOpen === 'Other' ? 'rotate-90' : ''}`}
                                        />
                                    </button>
                                    {productTypeOpen === 'Other' && (
                                        <ul className='pl-4 mt-2 space-y-2'>
                                            <li>
                                                <a href='/products/other-products/sensor'>
                                                    Sensor
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/products/other-products/tools'>
                                                    Tools
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/products/other-products/turbo-charger'>
                                                    Turbo Charger
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/products/other-products/socket'>
                                                    Socket
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/products/other-products/cover-injector'>
                                                    Cover Injector
                                                </a>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <a
                            href='/contact'
                            className={`${activeLink === '/contact' ? 'text-gray-500 font-semibold' : 'text-gray-500'} text-gray-500 font-normal hover:font-bold `}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
                <div className=' mx-auto'>
                    <ul className='flex justify-end mt-5 space-x-5'>
                        <li>
                            <a
                                href='https://www.tiktok.com/@itechpersadanusantara'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-gray-100 hover:text-gray-900'
                            >
                                <FaTiktok />
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://www.instagram.com/itechpersadanusantara'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-gray-100 hover:text-gray-900'
                            >
                                <FaInstagram />
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={openWhatsAppChat}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-gray-100 hover:text-gray-900'
                            >
                                <FaWhatsapp />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SidebarMobile;
