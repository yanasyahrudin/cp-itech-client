import React from 'react';
import { Helmet } from 'react-helmet';

const NotFound = () => {
    return (
        <body className='flex flex-col h-screen justify-center items-center bg-gradient-to-r from-gray-100 to-gray-300  '>
            <Helmet>
                <title>Not Found | Itech Persada Nusantara</title>
                <meta
                    name='description'
                    content="The page is showed that user finded wrong URL in website"
                />
                <meta
                    name='keywords'
                    content='not founded, not founded 404, itech persada nusantara'
                />
            </Helmet>
            <div className='flex flex-col items-center'>
                <h1 className='text-[120px] font-extrabold text-gray-700'>404</h1>
                <p className='text-2xl font-medium text-gray-600 mb-6'>
                    Page Not Found
                </p>
                <a
                    href='/'
                    className='px-4 py-2 font-medium text-white bg-gray-500 rounded-xl hover:text-blue-900 hover:bg-gray-100 transition-all duration-200 ease-in-out'
                >
                    Go Home
                </a>
            </div>
        </body>
    );
};

export default NotFound;
