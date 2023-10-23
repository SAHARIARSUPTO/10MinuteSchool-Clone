import React from 'react';

const FourthCards = () => {
    return (
        <div className='grid grid-cols-3   pb-20'>
            <div className='p-5 border border-gray-300  mx-auto'>
                <a href=""><img src="https://10minuteschool.com/_next/image/?url=https%3A%2F%2Fcdn.10minuteschool.com%2Fmd%2Fimages%2Fk-12-courses%2Fhsc_25_ob.jpeg&w=384&q=75" alt="" /></a>
                <p className='text-2xl font-bold'>HSC 25 অনলাইন ব্যাচ</p>
                <p className='text-xl text-success'>BDT 4500</p>
            </div>
            <div className='p-5 border border-gray-300  mx-auto'>
                <a href=""><img src="https://10minuteschool.com/_next/image/?url=https%3A%2F%2Fcdn.10minuteschool.com%2Fmd%2Fimages%2Fk-12-courses%2Fhsc_24_1p_cc_thumb.jpeg&w=384&q=75" alt="" /></a>
                <p className='text-2xl font-bold'>HSC 24 ক্র্যাশ কোর্স-১ম পত্র</p>
                <p className='text-xl text-success'>BDT 2500</p>
            </div>
            <div className='p-5 border border-gray-300  mx-auto'>
                <a href=""><img src="https://10minuteschool.com/_next/image/?url=https%3A%2F%2Fcdn.10minuteschool.com%2Fmd%2Fimages%2Fhsc_24_CC_2nd_paper_thumbnail_july_24_16x9_1692008893328.webp&w=384&q=75" alt="" /></a>
                <p className='text-2xl font-bold'>HSC 24 ক্র্যাশ কোর্স-২য় পত্র</p>
                <p className='text-xl text-success'>BDT 2500</p>
            </div>
        </div>
    );
};

export default FourthCards;
