import { faDownLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const EighthContent = () => {
    return (
        <div className='pt-20'>
            <div className='w-full sm:w-4/5 bg-slate-900 rounded-xl mx-auto'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 items-center mx-auto  ps-10 pe-10 sm;pt-5'>
                    <div className='flex flex-col items-center sm:items-start'>
                        <p className='text-white text-xl sm:text-3xl pb-5 font-bold text-center sm:text-left'>
                            ডাউনলোড করুন আমাদের মোবাইল অ্যাপ শেখা শুরু করুন আজ থেকেই
                        </p>
                        <img src="https://10minuteschool.com/images/home/googlePlay.svg" alt="" />
                    </div>

                    <div className='items-center w-full'>
                        <img className='w-full' src="https://10minuteschool.com/_next/image/?url=https%3A%2F%2Fcdn.10minuteschool.com%2Fimages%2Fdownload_app_1668328988106.png&w=640&q=75" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EighthContent;
