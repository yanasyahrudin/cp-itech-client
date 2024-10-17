import React, { useState } from 'react';
import { IoMdArrowDropright } from "react-icons/io";


const ProductsMenu = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [activeSubMenu, setActiveSubMenu] = useState(null);

    const handleMouseEnter = (menu) => {
        setActiveMenu(menu);
    };

    const handleMouseLeave = () => {
        setActiveMenu(null);
        setActiveSubMenu(null);
    };

    const handleSubMenuMouseEnter = (subMenu) => {
        setActiveSubMenu(subMenu);
    };

    const handleSubMenuMouseLeave = () => {
        setActiveSubMenu(null);
    };

    return (
        <ul className='absolute left-0 mt-2 w-48 bg-gradient-to-r from-gray-400 to-gray-600 text-white rounded-md shadow-xl'>
            <li
                className='relative group '
                onMouseEnter={() => handleMouseEnter('FuelInjectionSystem')}
                onMouseLeave={handleMouseLeave}
            >
                <button className='block w-full text-left px-4 py-2 flex justify-between'>
                    Fuel Injection Systems <IoMdArrowDropright />
                </button>
                {activeMenu === 'FuelInjectionSystem' && (
                    <ul className='absolute left-full  top-0 mt-0 w-48 bg-gradient-to-r from-gray-400 to-gray-600 text-white rounded-md shadow-xl'>
                        <li
                            className='relative group'
                            onMouseEnter={() =>
                                handleSubMenuMouseEnter('Conventional')
                            }
                            onMouseLeave={handleSubMenuMouseLeave}
                        >
                            <button className='block w-full text-left px-4 py-2 flex justify-between'>
                                Conventional <IoMdArrowDropright />
                            </button>
                            {activeSubMenu === 'Conventional' && (
                                <ul className='absolute left-full  top-0 mt-0 w-48 bg-gradient-to-r from-gray-400 to-gray-600 text-white rounded-md shadow-xl'>
                                    <li>
                                        <a
                                            href='/products/fuel-injection-systems/conventional/fuel-injection-pump'
                                            className='block px-4 py-2'
                                        >
                                            Fuel Injection Pump
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href='/products/fuel-injection-systems/conventional/nozzle'
                                            className='block px-4 py-2'
                                        >
                                            Nozzle
                                        </a>
                                    </li>
                                </ul>
                            )}
                        </li>
                        
                        <li
                            className='relative group'
                            onMouseEnter={() =>
                                handleSubMenuMouseEnter('CommonRail')
                            }
                            onMouseLeave={handleSubMenuMouseLeave}
                        >
                            <button className='block w-full text-left px-4 py-2 flex justify-between'>
                                Common Rail <IoMdArrowDropright />
                            </button>
                            {activeSubMenu === 'CommonRail' && (
                                <ul className='absolute left-full  top-0 mt-0 w-48 bg-gradient-to-r from-gray-400 to-gray-600 text-white rounded-md shadow-xl'>
                                    <li>
                                        <a
                                            href='/products/fuel-injection-systems/common-rail/supply-pump'
                                            className='block px-4 py-2'
                                        >
                                            Supply Pump
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href='/products/fuel-injection-systems/common-rail/injector'
                                            className='block px-4 py-2'
                                        >
                                            Injector
                                        </a>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li
                            className='relative group'
                            onMouseEnter={() =>
                                handleSubMenuMouseEnter('Electric')
                            }
                            onMouseLeave={handleSubMenuMouseLeave}
                        >
                            <button className='block w-full text-left px-4 py-2 flex justify-between'>
                                Electric <IoMdArrowDropright />
                            </button>
                            {activeSubMenu === 'Electric' && (
                                <ul className='absolute left-full  top-0 mt-0 w-48 bg-gradient-to-r from-gray-400 to-gray-600 text-white rounded-md shadow-xl'>
                                    <li>
                                        <a
                                            href='/products/fuel-injection-systems/electric/eui'
                                            className='block px-4 py-2'
                                        >
                                            EUI
                                        </a>
                                    </li>
                                </ul>
                            )}
                        </li>
                        
                    </ul>
                )}
            </li>
            <li
                className='relative group'
                onMouseEnter={() => handleMouseEnter('OtherProducts')}
                onMouseLeave={handleMouseLeave}
            >
                <button className='block w-full text-left px-4 py-2 flex justify-between'>
                    Other Products <IoMdArrowDropright />
                </button>
                {activeMenu === 'OtherProducts' && (
                    <ul className='absolute left-full  top-0 mt-0 w-48 bg-gradient-to-r from-gray-400 to-gray-600 text-white rounded-md shadow-xl'>
                        
                        <li>
                            <a
                                href='/products/other-products/sensor'
                                className='block px-4 py-2'
                            >
                                Sensor
                            </a>
                        </li>
                        
                        
                        <li>
                            <a
                                href='/products/other-products/tools'
                                className='block px-4 py-2'
                            >
                                Tools
                            </a>
                        </li>
                        
                        <li>
                            <a
                                href='/products/other-products/turbo-charger'
                                className='block px-4 py-2'
                            >
                                Turbo Charger
                            </a>
                        </li>

                        

                        <li>
                            <a
                                href='/products/other-products/socket'
                                className='block px-4 py-2'
                            >
                                Socket
                            </a>
                        </li>
                       

                        <li>
                            <a
                                href='/products/other-products/cover-injector'
                                className='block px-4 py-2'
                            >
                                Cover Injector
                            </a>
                        </li>
                       
                    </ul>
                )}
            </li>
        </ul>
    );
};

export default ProductsMenu;
