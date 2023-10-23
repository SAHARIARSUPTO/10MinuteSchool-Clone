import React from 'react';
import UpperCards from './UpperCards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import LowerContent from './LowerContent';

const UpperContent = () => {
    return (
<div className=' bg-black'>
<div className='flex text-white'>
            <div className='w-1/2  ps-40'>
                <div className='pt-20'>
                <p className='text-4xl mb-4  font-bold'>৬ষ্ঠ-এইচএসসি শ্রেণির <br /> অনলাইন ব্যাচে ভর্তি চলছে!</p>
                <p className='text-sm '>২০২৩ সাল জুড়ে অভিজ্ঞ শিক্ষকদের সাথে সম্পূর্ণ সিলেবাসের 💯 তে 💯 প্রস্তুতি!</p>
                </div>
                <UpperCards></UpperCards>

            </div>
            <div className='w-1/2'>
                <img src="https://cdn.10minuteschool.com/images/Student_Studying_2_1696241336537.png" alt="" className='w-full h-auto' />
            </div>
        </div>


        <div>
    <p className='text-success text-md text-center justify-center text'>অনলাইন ব্যাচ সম্পর্কে আরও জানুন <FontAwesomeIcon icon={faArrowRight} /></p>
</div>
<LowerContent></LowerContent>
</div>
    );
};

export default UpperContent;
