import React, { useRef } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoIosTime } from 'react-icons/io';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { motion, useInView } from 'framer-motion';
import { Helmet } from 'react-helmet';

const ContactUs = () => {
    // Ref to track when the component is in view
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    const goofleMaps = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    };

    const contactContent = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <>
            <Helmet>
                <title>Contact | Itech Persada Nusantara</title>
                <meta name="google-site-verification" content="qR0CdtgyhJs72_awwXumMDxkFtx0f1GWltYjpdtDBgQ" />
                <meta
                    name='description'
                    content="This is a contact page from Itech Persada Nusantara"
                />
                <meta
                    name='keywords'
                    content='diesel center pekanbaru, diesel part, indo teknik pekanbaru, itech persada nusantara'
                />
            </Helmet>
            
            <section
                ref={sectionRef}
                className='bg-gradient-to-r from-gray-100 to-gray-300'
            >
                <div className='max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:py-10 lg:px-8 '>
                    <div className='max-w-2xl lg:max-w-4xl mx-auto text-center'>
                        <h2 className='text-3xl font-extrabold text-gray-500'>
                            Contact Us
                        </h2>
                    </div>
                    <div className='mt-8 lg:mt-10 '>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                            <motion.div
                                initial='hidden'
                                animate={isInView ? 'visible' : 'hidden'} // Only animate when in view
                                transition={{ duration: 0.8 }}
                                variants={goofleMaps}
                                className='rounded-xl overflow-hidden'
                            >
                                <iframe
                                    className='shadow-md'
                                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.82202792079!2d101.40383474476387!3d0.5355094204147198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5abb8c886d837%3A0xe8a05f236907c434!2sITech%20Nusantara!5e0!3m2!1sid!2sid!4v1725085501245!5m2!1sid!2sid'
                                    width='100%'
                                    height='350'
                                    style={{ border: 0 }}
                                    allowFullScreen=''
                                    loading='lazy'
                                ></iframe>
                            </motion.div>

                            <motion.div
                                initial='hidden'
                                animate={isInView ? 'visible' : 'hidden'} // Only animate when in view
                                transition={{ duration: 0.8 }}
                                variants={contactContent}
                                className='max-w-full mx-auto rounded-xl overflow-hidden bg-gradient-to-r from-gray-400 to-gray-600'
                            >
                                <div className='px-6 py-4'>
                                    <h3 className='text-lg font-medium text-white flex items-center'>
                                        <FaMapMarkerAlt className='text-white mr-2' />
                                        Our Address
                                    </h3>

                                    <p className='mt-1 text-gray-100'>
                                        Jl. Riau Ujung, Kel. Tampan, Kec. Payung
                                        Sekaki
                                    </p>
                                    <p className='mt-1 text-gray-100'>
                                        Pekanbaru Riau, 28292
                                    </p>
                                </div>
                                <div className='border-gray-200 px-6 py-4'>
                                    <h3 className='text-lg font-medium text-white flex items-center'>
                                        <IoIosTime className='text-white mr-2' />
                                        Operational Hours
                                    </h3>
                                    <p className='mt-1 text-gray-100'>
                                        Monday - Saturday: 08:00 AM - 05:30 PM
                                        WIB (Western Indonesian Time)
                                    </p>
                                    <p className='mt-1 text-gray-100'>
                                        Sunday and National Holidays: Closed
                                    </p>
                                </div>
                                <div className='border-gray-200 px-6 py-4'>
                                    <h3 className='text-lg font-medium text-white flex items-center '>
                                        <RiContactsBook2Fill className='text-white mr-2' />
                                        Contact Us
                                    </h3>
                                    <p className='mt-1 text-gray-100'>
                                        WhatsApp: +62 811-7531-881
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUs;
