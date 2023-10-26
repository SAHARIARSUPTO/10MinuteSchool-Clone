import React from 'react';
import UpperCards from './UpperCards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import LowerContent from './LowerContent';

const UpperContent = () => {
    return (
<div class='bg-black'>
    <div class='flex flex-col-reverse sm:flex-row text-white'>
        <div class='w-full sm:w-1/2 p-4 sm:p-0 sm:ps-40'>
            <div class='pt-20'>
                <p class='text-4xl text-center sm:text-left mb-4 font-bold'>৬ষ্ঠ-এইচএসসি শ্রেণির <br /> অনলাইন ব্যাচে ভর্তি চলছে!</p>
                <p class='text-sm text-center sm:text-left'>২০২৩ সাল জুড়ে অভিজ্ঞ শিক্ষকদের সাথে সম্পূর্ণ সিলেবাসের 💯 তে 💯 প্রস্তুতি!</p>
            </div>
            <UpperCards></UpperCards>
        </div>
        <div class='w-full sm:w-1/2'>
            <img src="https://cdn.10minuteschool.com/images/Student_Studying_2_1696241336537.png" alt="" class='w-full h-auto' />
        </div>
    </div>
    <div class='text-center'>
        <p class='text-success text-md text'>অনলাইন ব্যাচ সম্পর্কে আরও জানুন <FontAwesomeIcon icon={faArrowRight} /></p>
    </div>
     <LowerContent></LowerContent> 
</div>


    );
};

export default UpperContent;
