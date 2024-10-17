import React from 'react';

const NeedADieselSolution = () => {
    const openWhatsAppChat = () => {
        const message = encodeURIComponent(
            "Hi, I'm interested in the offer on itechpersadanusantara.com. Can you provide more details?",
        );
        window.open(`https://wa.me/+628117531881?text=${message}`, '_blank');
    };

    return (
        <div
            className='bg-gradient-to-r from-gray-100 to-gray-300 p-6 pb-5'
            id='contactUs'
        >
            <div class=' max-w-4xl py-4 mx-auto px-2 sm:px-6 sm:py-2 lg:max-w-3xl  rounded-xl lg:px-8 lg:flex lg:items-center lg:justify-between'>
                <h2 class='text-4xl font-extrabold text-gray-500 sm:text-4xl text-center'>
                    <span class='block'>Need a Diesel Solution?</span>
                </h2>
                <div class='space-y-2 py-2 sm:space-y-2 sm:flex sm:space-x-5'>
                    <button
                        onClick={openWhatsAppChat}
                        class='w-[200px] shadow-md flex sm:max-w-md mx-auto items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-gray-800 bg-white hover:bg-gray-500 hover:text-white md:py-4 md:text-lg md:px-10'
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NeedADieselSolution;
