import { faSchool } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import FourthCards from './FourthCards';

const FourthContent = () => {
    return (
        <div className='bg-slate-200'>
            <div>
            
            <div className='pt-20 pb-20'>
                <p className=' text-l font-bold text-center justify-between text-blue-700 pb-5'><FontAwesomeIcon icon={faSchool} />  SSC & HSC</p>
                <p className='pb-5 text-4xl font-bold text-center justify-center'>SSC ও HSC শিক্ষার্থীদের জন্য</p>
            </div>
    
    
    <div>
        <FourthCards></FourthCards>
    </div>
    
            </div>
        </div>
    );
};

export default FourthContent;