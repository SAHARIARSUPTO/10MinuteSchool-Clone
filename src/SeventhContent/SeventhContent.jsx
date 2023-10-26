import React from 'react';

const SeventhContent = () => {
    return (
        <div className='w-full sm:w-4/5 pt-20 text-center mx-auto'>
            <div className='flex flex-col sm:flex-row items-center'>
                <div className='cards grid grid-cols-2 sm:grid-cols-2 gap-4 text-center items-center'>
                    <div className='p-4 sm:p-20 bg-green-100 rounded-xl'>
                        <p className='font-bold'>
                            <span className='text-4xl'>1 কোটি</span><br />
                            + মোট শিক্ষার্থী
                        </p>
                    </div>
                    <div className='p-4 sm:p-20 bg-orange-100 rounded-xl'>
                        <p className='font-bold'>
                            <span className='text-4xl'>47 লক্ষ</span><br />
                            + অ্যাপ ব্যবহারকারী
                        </p>
                    </div>
                    <div className='p-4 sm:p-20 bg-pink-100 rounded-xl'>
                        <p className='font-bold'>
                            <span className='text-4xl'>3,000</span><br />
                            + স্টাডি ম্যাটেরিয়াল
                        </p>
                    </div>
                    <div className='p-4 sm:p-20 bg-cyan-100 rounded-xl'>
                        <p className='font-bold'>
                            <span className='text-4xl'>24,000</span><br />
                            + লার্নিং কন্টেন্ট
                        </p>
                    </div>
                </div>
                <div className='image sm:w-1/2'>
                    <img src="https://10minuteschool.com/_next/image/?url=https%3A%2F%2Fcdn.10minuteschool.com%2Flg%2Fimages%2F1667905292144.png&w=640&q=75" alt="" />
                </div>
            </div>
        </div>
    );
};

export default SeventhContent;
