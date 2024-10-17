import React, { useEffect, useState } from 'react';
import ProductDropdown from './ProductDropdown';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { TiThMenu } from 'react-icons/ti';
import SidebarMobile from './SidebarMobile';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const openWhatsAppChat = () => {
        const message = encodeURIComponent(
            "Hi, I'm interested in the offer on itechpersadanusantara.com. Can you provide more details?",
        );
        window.open(`https://wa.me/+628117531881?text=${message}`, '_blank');
    };

    return (
        <header
            className={`${
                isScrolled
                    ? 'bg-white'
                    : 'bg-gradient-to-r from-gray-100 to-gray-300'
            } sticky top-0 z-50 px-4 transition-all duration-300 `}
        >
            <div
                className={`container mx-auto flex justify-between items-center max-w-full md:w-[1100px] border-b-4 border-gray-500 ${
                    isScrolled ? 'py-2' : 'py-4'
                }`}
            >
                <div className='flex items-center'>
                    <a href='/'>
                        <img
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/v1708915844/cp-itech/LogoItech.png'
                            alt='Logo'
                            className={`h-14 w-auto mr-4 transition-all duration-300 ${isScrolled ? 'h-12' : 'h-14'}`}
                        />
                    </a>
                </div>

                {/* Sidebar Toggle Button */}
                <div className='md:flex lg:hidden'>
                    <button
                        className='flex items-center px-2 py-1 text-gray-500'
                        onClick={() => setSidebarOpen(!isSidebarOpen)}
                    >
                        <TiThMenu />
                    </button>
                </div>

                {/* Navigation Menu */}
                <nav className='hidden lg:flex lg:flex-grow justify-center'>
                    <ul className='flex justify-center space-x-4 text-white'>
                        <li>
                            <a
                                href='/'
                                className={`${activeLink === '/' ? 'text-gray-500 font-extrabold' : 'text-gray-500'} font-bold hover:text-white`}
                            >
                                Home
                            </a>
                        </li>
                        <li className='relative group'>
                            <a
                                className={`${activeLink.startsWith('/products') ? 'text-gray-500 font-extrabold' : 'text-gray-500'} font-bold justify-center items-center flex hover:text-white`}
                            >
                                Product
                                <IoMdArrowDropdown />
                            </a>
                            <div className='absolute left-0 mt-2 w-48 bg-white shadow-lg invisible group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0'>
                                <ProductDropdown />
                            </div>
                        </li>
                        <li>
                            <a
                                href='/contact'
                                className={`${activeLink.startsWith('/contact') ? 'text-gray-500 font-extrabold' : 'text-gray-500'} font-bold hover:text-white`}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Social Icons */}
                <div className='hidden lg:flex items-center space-x-4'>
                    <a
                        href='https://www.tiktok.com/@itechpersadanusantara'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-gray-500 font-semibold py-2 rounded inline-block hover:text-white'
                    >
                        <FaTiktok />
                    </a>
                    <a
                        href='https://www.instagram.com/itechpersadanusantara'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-gray-500 font-semibold py-2 rounded inline-block hover:text-white'
                    >
                        <FaInstagram />
                    </a>
                    <a
                        onClick={openWhatsAppChat}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-gray-500 font-semibold py-2 rounded inline-block hover:text-white'
                    >
                        <FaWhatsapp />
                    </a>
                </div>
            </div>

            {/* Sidebar for Mobile and Tablet */}
            <SidebarMobile
                isOpen={isSidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />
        </header>
    );
};

export default Header;
