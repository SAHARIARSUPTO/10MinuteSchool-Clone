import React from 'react';

const SecondCard = () => {
    return (
        <div>
            <div className='grid grid-cols-3   pb-20'>
            <div className='  bg-slate-800  mx-auto rounded-xl'>
                <a href=""><img src="https://10minuteschool.com/_next/image/?url=https%3A%2F%2Fcdn.10minuteschool.com%2Fmd%2Fimages%2Fthumbnails%2Fskills%2Fghore-boshe-Spoken-English-course-thumbnail-by-Munzereen-Shahid-16x9.jpg&w=384&q=75" alt="" /></a>
               <div className='ps-5 pt-5'>
                <p className='text-xl text-success'>BDT 4500</p></div>
            </div>
            <div className='  bg-slate-800  mx-auto rounded-xl'>
                <a href=""><img src="https://10minuteschool.com/_next/image/?url=https%3A%2F%2Fcdn.10minuteschool.com%2Fmd%2Fimages%2FThumbnails%2FIELTS-Course-Thumbnail-Discount_16_9.jpg&w=384&q=75" alt="" /></a>
                <p className='text-2xl font-bold'>HSC 24 ক্র্যাশ কোর্স-১ম পত্র</p>
                <p className='text-xl text-success'>BDT 2500</p>
            </div>
            <div className='  bg-slate-800  mx-auto rounded-xl'>
                <a href=""><img src="https://10minuteschool.com/_next/image/?url=https%3A%2F%2Fcdn.10minuteschool.com%2Fmd%2Fimages%2Fskills%2Fthumbnails%2Fbest-english-grammar-course-by-munzereen-shahid.jpg&w=384&q=75" alt="" /></a>
                <p className='text-2xl font-bold'>HSC 24 ক্র্যাশ কোর্স-২য় পত্র</p>
                <p className='text-xl text-success'>BDT 2500</p>
            </div>
        </div>
        </div>
    );
};

export default SecondCard;