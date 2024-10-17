import React, { useEffect, useState } from 'react';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { IoMdRocket } from 'react-icons/io';
import { BsRocketFill } from 'react-icons/bs';

const openWhatsAppChat = () => {
    const message = encodeURIComponent(
        "Hi, I'm interested in the offer on itechpersadanusantara.com. Can you provide more details?",
    );
    window.open(`https://wa.me/+628117531881?text=${message}`, '_blank');
};

const FooterPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 1000) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll the window to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <footer className='bg-gradient-to-r from-gray-400 to-gray-600'>

            <div className='text-center py-10 mr-4 ml-4'>
                <div className='flex items-center justify-center mb-2 text-md font-semibold text-white'>
                    <a href='/'>
                        <img
                            className='h-auto mr-3 sm:h-9 rounded-md'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/v1708915844/cp-itech/LogoItech.png'
                            alt='Itech Logo'
                            style={{ backgroundColor: '#ffffff' }}
                        />
                    </a>
                    <div>Reliable superior product with high quality</div>
                </div>

                <span className='block text-sm text-center text-gray-100'>
                    © {new Date().getFullYear()} ITech Persada Nusantara. All
                    Rights Reserved.
                </span>

                <ul className='flex justify-center mt-2 space-x-5'>
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

            
        </footer>
    );
};

export default FooterPage;
