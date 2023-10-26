import React from 'react';

const FirstCard = () => {
    return (
        <div className='text-white pb-20'>
            <div className='grid grid-cols-1 sm:grid-cols-4 gap-5 mx-20'>
                <div className='bg-slate-800 rounded-lg p-4 hover:bg-slate-500 hover:border-green-400 flex flex-col items-center w-full'>
                    <p className='text-xl'>Language Learning Course</p>
                    <p className='text-lg'>10 Courses</p>
                </div>
                <div className='bg-slate-800 rounded-lg p-4 hover:bg-slate-500 flex flex-col items-center w-full'>
                    <p className='text-xl'>Skills & IT Courses</p>
                    <p className='text-lg'>11 Courses</p>
                </div>
                <div className='bg-slate-800 rounded-lg p-4 hover:bg-slate-500 flex flex-col items-center w-full'>
                    <p className='text-xl'>Career Readiness</p>
                    <p className='text-lg'>4 Courses</p>
                </div>
                <div className='bg-slate-800 rounded-lg p-4 hover:bg-slate-500 hover:border-green-400 flex flex-col items-center w-full'>
                    <p className='text-xl'>Bundle</p>
                    <p className='text-lg'>12 Courses</p>
                </div>
            </div>
        </div>
    );
};

export default FirstCard;
