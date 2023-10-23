import React from 'react';
import LowerCards from './LowerCards';

const LowerContent = () => {
    return (
        <div className='ms-48 pt-5 pb-10'>
            <div>
                <p className='text-4xl mb-4  text-white font-bold'>
                    স্কিল ডেভেলপমেন্টের নির্দিষ্ট কোর্সে দারুণ ছাড়! <br />

                    <p className='text-sm text-white '>পুরো মাস জুড়ে টেন মিনিট স্কুলের নির্দিষ্ট কোর্সসমূহ পেয়ে যান বিশেষ মূল্যে। এবার শেখার শুরু হোক টেন মিনিট স্কুলের সাথে!</p>
                </p>
            </div>

<LowerCards></LowerCards>            
        </div>
    );
};

export default LowerContent;