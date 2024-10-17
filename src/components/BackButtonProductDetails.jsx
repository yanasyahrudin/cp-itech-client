import React from 'react';
import { IoArrowBackCircle } from 'react-icons/io5';

const BackButtonProductDetails = () => {
    // Go back to the previous page
    const handleBackClick = () => {
        window.history.back(); // Navigates back in the browser history
    };

    return (
        <div>
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
        </div>
    );
};

export default BackButtonProductDetails;
