import React from 'react';
import unilever from "./UNILEVER.png";
import brac from "./BRAC.png";
import samsung from "./SAMSUNG.png";
const ThirdCard = () => {
    return (
   <div className='pb-20'>
    <div className='w-4/5 text-center justify-center bg-slate-700 rounded-xl p-5 mx-auto'>
         <div className='pb-5'>
            <p className='text-white  text-xl  text-center items-center'>দেশের সেরা প্রতিষ্ঠানগুলো নিচ্ছে আমাদের কর্পোরেট স্কিলস ডেভেলপমেন্ট প্রোগ্রাম</p>
        </div>



        <div className='grid grid-cols-5 gap-3 items-center  mx-auto'>
            <div className='w-3/5'><img src={unilever} alt="" /></div>
            <div className='w-3/5'><img src={brac} alt="" /></div>
            <div className='w-3/5'><img src={samsung} alt="" /></div>
            <div className='w-3/5'><img src="https://upload.wikimedia.org/wikipedia/en/b/b9/IPDC_Official_Logo.png" alt="" /></div>
            <div className='w-3/5'><img src="https://upload.wikimedia.org/wikipedia/commons/d/d8/United_Group_logo.png" alt="" /></div>
        </div>

        <div>
            <p className='text-white text-xl text-center items-center'>আরও জানতে <a className='text-success'  href="">ইমেইল </a> করুন অথবা <a  className='text-success' href="">কল</a> করুন</p>
        </div>
   </div>
   </div>
    );
};

export default ThirdCard;