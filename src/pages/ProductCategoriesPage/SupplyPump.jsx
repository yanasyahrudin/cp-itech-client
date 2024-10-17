import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Helmet } from 'react-helmet';

const SupplyPumpCategories = () => {
    const categories = [
        {
            id: 1,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1724654745/cp-itech/categories/supplyPump/supply_pump_assy_DSC_0742-removebg-preview_olebos.png',
            name: 'Supply Pump Assy',
            type: 'Supply Pump',
            link: '/products/fuel-injection-systems/common-rail/supply-pump/supply-pump-assy',
        },
        {
            id: 2,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1724655011/cp-itech/categories/supplyPump/plunger_gvasy7g7a8s_kmfyir_akiqbz.png',
            name: 'Plunger',
            type: 'Supply Pump',
            link: '/products/fuel-injection-systems/common-rail/supply-pump/plunger'
        },
        {
            id: 3,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1724655347/cp-itech/categories/supplyPump/scv_DSC_0390_copy_fngcbe_1_tifl4j.png',
            name: 'SCV (Suction Control Valve)',
            type: 'Supply Pump',
            link: '/products/fuel-injection-systems/common-rail/supply-pump/scv'
        },
        {
            id: 4,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1724836653/cp-itech/categories/supplyPump/Selang_Pipa_Supply_Pump_Tryton_DSC_0888b-removebg-preview_mbsgor.png',
            name: 'Pipe Hose Supply Pump',
            type: 'Supply Pump',
            link: '/products/fuel-injection-systems/common-rail/supply-pump/pipe-hose-supply-pump'
        },
        {
            id: 5,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1724836654/cp-itech/categories/supplyPump/Filter_Supply_Pump_Denso_DSC_0897b-removebg-preview_of9bop.png',
            name: 'Filter Supply Pump',
            type: 'Supply Pump',
            link: '/products/fuel-injection-systems/common-rail/supply-pump/filter-supply-pump'
        },

        {
            id: 7,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1725093476/cp-itech/categories/supplyPump/DSC_0122b-removebg-preview_x9f6dm_hvocpc.png',
            name: 'Rotor Set Feed Pump',
            type: 'Supply Pump',
            link: '/products/fuel-injection-systems/common-rail/supply-pump/rotor-set-feed-pump'
        },
        {
            id: 8,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1725093476/cp-itech/categories/supplyPump/DSC_0110b-removebg-preview_u8xfv1_aufzzk.png',
            name: 'Camshaft Supply Pump',
            type: 'Supply Pump',
            link: '/products/fuel-injection-systems/common-rail/supply-pump/camshaft-supply-pump'
        },
        {
            id: 8,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/w_500/v1725093486/cp-itech/categories/supplyPump/1613533740511_copy_rsighv_rnygj3.png',
            name: 'Sensor Temperature',
            type: 'Supply Pump',
            link: '/products/fuel-injection-systems/common-rail/supply-pump/sensor-temperature'
        },
        {
            id: 9,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1726800708/cp-itech/categories/supplyPump/repair_kit_supply_pump_z9e9r8.png',
            name: 'Repair Kit',
            type: 'Supply Pump',
            link: '/products/fuel-injection-systems/common-rail/supply-pump/repair-kit'
        },
        {
            id: 10,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1725093485/cp-itech/categories/supplyPump/DSC_0023b-removebg-preview_oxaaul_ylxvt0.png',
            name: 'Valve Pressure Regulator',
            type: 'Supply Pump',
            link: '/products/fuel-injection-systems/common-rail/supply-pump/valve-pressure-regulator'
        },
        {
            id: 10,
            imageSrc:
                'https://res.cloudinary.com/dcbryptkx/image/upload/v1727172217/cp-itech/categories/supplyPump/spring_plunger_sp_mxnthj.png',
            name: 'Spring Plunger',
            type: 'Supply Pump',
            link: '/products/fuel-injection-systems/common-rail/supply-pump/spring-plunger'
        },
    ];

    const [selectedType, setSelectedType] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);

    const filteredCategories =
        selectedType === 'All'
            ? categories
            : categories.filter((category) => category.type === selectedType);

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

    return (
        <section
            ref={sectionRef}
            className='pt-8 bg-gradient-to-r from-gray-100 to-gray-300 text-gray-100'
        >
            <Helmet>
                <title>Supply Pump Categories | Itech Persada Nusantara</title>
                <meta
                    name='description'
                    content='All product categories are original Itech brand with the best quality, affordable prices and guaranteed quality.'
                />
                <meta name='keywords' content='Supply Pump, Supply Pump Itech Persada Nusantara, Itech' />
            </Helmet>
            <div className='mx-auto text-center bg-gradient-to-r from-gray-400 to-gray-600 py-4 w-full'>
                <h2 className='text-3xl font-extrabold leading-tight text-gray-100 sm:text-4xl xl:text-3xl '>
                    Supply Pump Categories
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
                            selectedType === 'Supply Pump'
                                ? 'text-gray-700 bg-gray-300'
                                : 'text-gray-700 bg-white'
                        } rounded-md`}
                        onClick={() => setSelectedType('Supply Pump')}
                    >
                        Supply Pump
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
                    {filteredCategories.map((category, index) => (
                        <Card
                            key={index}
                            imageSrc={category.imageSrc}
                            name={category.name}
                            link={category.link}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SupplyPumpCategories;
