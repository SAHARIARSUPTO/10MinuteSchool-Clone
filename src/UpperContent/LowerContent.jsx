import React from 'react';
import LowerCards from './LowerCards';

const LowerContent = () => {
    return (
        <div className=' pt-5 pb-10 ms-auto text-center'>
            <div>
            <p className='text-4xl sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 sm:mb-2 md:mb-4 lg:mb-6 xl:mb-8 text-white font-bold sm:text-center'>
                    স্কিল ডেভেলপমেন্টের নির্দিষ্ট কোর্সে দারুণ ছাড়! <br />

                    <p className='text-sm text-white pt-5'>পুরো মাস জুড়ে টেন মিনিট স্কুলের নির্দিষ্ট কোর্সসমূহ পেয়ে যান বিশেষ মূল্যে। এবার শেখার শুরু হোক টেন মিনিট স্কুলের সাথে!</p>
                </p>
            </div>

 <LowerCards></LowerCards>
        </div>
    );
};

export default LowerContent;