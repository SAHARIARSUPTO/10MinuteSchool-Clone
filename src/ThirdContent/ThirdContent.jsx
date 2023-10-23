import React from 'react';
import VideoList from './VideoCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, faSchoolFlag } from '@fortawesome/free-solid-svg-icons';

const ThirdContent = () => {
    return (
        <div>
            
        <div className='pt-20 pb-20'>
            <p className=' text-l font-bold text-center justify-between text-red-500'><FontAwesomeIcon icon={faSchoolFlag} />   ক্লাস ৬-১০</p>
            <p className='pb-5 text-4xl font-bold text-center justify-center'>বছর জুড়ে অনলাইন ব্যাচে কী কী থাকছে?</p>
            <p className='text-xl text-center justify-center'>সেরা শিক্ষকদের পরিচর্যায় দেশের যেকোন প্রান্ত থেকে অব্যাহত থাকুক পড়াশুনার অগ্রযাত্রা </p>
        </div>
        <div>
            <VideoList></VideoList>
        </div>


<div className='text-center justify-center pt-20 pb-20'>
    <button className='btn btn-success text-xl text-white'>আপনার ক্লাস বেছে নিন <FontAwesomeIcon icon={faGreaterThan} /></button>
</div>



        </div>
    );
};

export default ThirdContent;