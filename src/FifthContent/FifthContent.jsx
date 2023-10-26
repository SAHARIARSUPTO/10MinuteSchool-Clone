import { faCircleCheck, faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import FirstCard from './FirstCard';
import SecondCard from './SecondCard';

const FifthContent = () => {
    return (
        <div>
                    <div className='bg-black'>
            <div>
            
            <div className='pt-20 pb-20'>
                <p className=' text-l sm:text-l font-bold text-center justify-between text-white pb-5'><FontAwesomeIcon icon={faRocket} />  স্কিলস</p>
                <p className='pb-5 text-l sm:text-xl font-bold text-center justify-center text-white'> <FontAwesomeIcon icon={faCircleCheck}/>  দেশসেরা শিক্ষক <FontAwesomeIcon icon={faCircleCheck}/>
৫ লাখ+শিক্ষার্থী   <FontAwesomeIcon icon={faCircleCheck}/>  
৭০+ অনলাইন কোর্স</p>
<p className='pb-5  text-xl sm:text-4xl font-bold text-center justify-center text-white'>দেশসেরা স্কিল ডেভেলপমেন্ট প্লাটফর্ম</p>
            </div>
            <FirstCard></FirstCard>
            <SecondCard></SecondCard>
            </div>
        </div>
  
        </div>
    );
};

export default FifthContent;