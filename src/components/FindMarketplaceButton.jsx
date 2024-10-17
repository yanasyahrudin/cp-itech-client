import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMdArrowDropdown } from 'react-icons/io';

const FindMarketplaceButton = () => {
    return (
        <div className='mt-8 flex gap-2 items-center'>
            <a
                href='https://maps.app.goo.gl/XrjQ695EfX1c6GFd6'
                target='_blank'
                rel='noopener noreferrer'
                className='gap-2 inline-flex shadow-md px-4 py-2 rounded-md items-center hover:bg-white hover:text-gray-500 text-white bg-gray-500'
            >
                <FaLocationDot />
                <span className='ml-1 font-semibold text-lg '>Find Store</span>
            </a>
            <div class='relative inline-block text-left'>
                <div class='group'>
                    <button
                        type='button'
                        className='gap-2 inline-flex shadow-md px-4 py-2 rounded-md items-center hover:bg-white hover:text-gray-500 text-white bg-gray-500'
                    >
                        <span className='ml-1 font-semibold text-lg '>
                            Buy in Marketplace
                        </span>
                        <IoMdArrowDropdown />
                    </button>

                    <div class='shdaow-md absolute left-0 w-40 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300'>
                        <div class='py-1'>
                            <a
                                href='https://tokopedia.link/YO4deDNyaNb'
                                target='_blank'
                                rel='noopener noreferrer'
                                class='block px-4 py-2 text-sm font-semibold text-gray-700 flex items-center justify-center gap-2'
                            >
                                Tokopedia <FaExternalLinkAlt />
                            </a>
                            <a
                                href='https://shopee.co.id/itechofficial'
                                target='_blank'
                                rel='noopener noreferrer'
                                class='block px-4 py-2 text-sm font-semibold text-gray-700 flex items-center justify-center gap-2'
                            >
                                Shopee <FaExternalLinkAlt />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindMarketplaceButton;
