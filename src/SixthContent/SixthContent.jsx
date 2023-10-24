import { faDownLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import SecondSixth from './SecondSixth';

const SixthContent = () => {
    return (
        <div className='pt-20'>
            <div className='pb-20'>
                <div className='w-4/5 text-center bg-black rounded-xl p-5 mx-auto'>
                    <div className='grid grid-cols-2 gap-3 items-center mx-auto'>
                        <div className='flex items-start flex-col'>
                            <p className='text-white text-xl text-center items-center pb-5 font-bold'>সেরা শিক্ষকের তৈরি ক্লাস নোট এবং লেকচার শিট প্রয়োজন?</p>
                            <br />
                            <button className='btn btn-success text-white text-xl font-bold'>ফ্রি ডাউনলোড <FontAwesomeIcon icon={faDownLong} /></button>
                        </div>

                        <div className='w-2/5 items-end mx-auto'><img src="https://10minuteschool.com/_next/image/?url=https%3A%2F%2Fs3.ap-southeast-1.amazonaws.com%2Fcdn.10minuteschool.com%2Fimages%2Fimage_pdf_1685354763931.png&w=384&q=75" alt="" /></div>
                    </div>
                </div>
            </div>
         <div><SecondSixth></SecondSixth></div>
        </div>
    );
};

export default SixthContent;
