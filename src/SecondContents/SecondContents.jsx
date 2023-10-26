import React from 'react';
import bag from "./bag.png";
import hat from "./hat.png";
import shuttle from "./shuttle.png";
import job from "./job.png";
import svg from "./svg.svg";
const SecondContents = () => {
    return (
        <div className='bg-slate-200 w-full mx-auto'>
            <div className='pt-20 pb-20'>
                <p className='text-4xl text-center p-3 font-bold'>নিজের শেখা নিজেই গুছিয়ে নেয়ার যাত্রা শুরু হোক</p>
                <p className='text-2xl text-center p-3'>যেকোনো বিষয়ে যেকোনো কিছু শিখতে চলে যাও তোমার পছন্দের সেকশনে</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 sm:items-center gap-10 w-3/5 justify-center mx-auto pb-20'>

                <a href="">
                <div className='flex gap-5 bg-white rounded-xl p-7 hover:bg-base-200 '>
                    <div><img className='w-20' src={bag} alt="" /></div>
                    <div>
                        <p className='text-2xl font-bold'>ক্লাস ৫-১২</p> <br />
                        <p className='text-l'>ফ্রি ভিডিও, লাইভ ক্লাস</p>
                    </div>
                </div>
                </a>
                <a href="">
                <div className='flex gap-5 bg-white rounded-xl p-7 hover:bg-base-200 '>
                    <div><img className='w-20' src={shuttle} alt="" /></div>
                    <div>
                        <p className='font-bold text-2xl'>স্কিলস</p> <br />
                        <p>ইংলিশ, ফ্রিল্যান্সিং ও আইসিটি</p>
                    </div>
                </div>
                </a>
               <a href="">
               <div className='flex gap-5 bg-white rounded-xl p-7 hover:bg-base-200 '>
                    <div><img className='w-20' src={hat} alt="" /></div>
                    <div>
                        <p className='font-bold text-2xl'>ভর্তি পরীক্ষা</p> <br />
                        <p>বিশ্ববিদ্যালয়+গুচ্ছ, মেডিকেল</p>
                    </div>
                </div>
               </a>
                <a href="">
                <div className='flex gap-5 bg-white rounded-xl p-7 hover:bg-base-200 '>
                    <div><img className='w-20 ' src={job} alt="" /></div>
                    <div>
                        <p className='font-bold text-2xl'>চাকরি প্রস্তুতি</p> <br />
                        <p>বিসিএস, ব্যাংক জব, সরকারী চাকরি</p>
                    </div>
                </div>
                </a>
     <a href=""> </a>           
            </div>
        </div>
    );
};

export default SecondContents;
