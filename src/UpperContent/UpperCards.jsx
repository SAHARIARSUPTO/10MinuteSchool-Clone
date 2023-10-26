import React from 'react';
import bag from './bag.png';

const UpperCards = () => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3">
            <a href="" className="w-full p-4">
                <div className="rounded-lg bg-opacity-30 bg-success p-4 text-white text-center hover:bg-slate-500">
                    <img src={bag} alt="Card Image" className="mx-auto w-16" />
                    <h3 className="text-xl font-bold">HSC</h3>
                    <p className="text-sm ps-5 pe-5 pt-5">সকল  বিভাগের জন্য </p>
                </div>
            </a>

            <a href="" className="w-full p-4">
                <div className="rounded-lg bg-opacity-30 bg-success p-4 text-white text-center hover:bg-slate-500">
                    <img src={bag} alt="Card Image" className="mx-auto w-16" />
                    <h3 className="text-xl font-bold">১০ম</h3>
                    <p className="text-sm ps-5 pe-5 ">বিজ্ঞানের পাঁচটি বিষয় ও ইংরেজী</p>
                </div>
            </a>

            <a href="" className="w-full p-4">
                <div className="rounded-lg bg-opacity-30 bg-success p-4 text-white text-center hover:bg-slate-500">
                    <img src={bag} alt="Card Image" className="mx-auto w-16" />
                    <h3 className="text-xl font-bold">৯ম</h3>
                    <p className="text-sm ps-5 pe-5">বিজ্ঞানের পাঁচটি বিষয় ও ইংরেজী</p>
                </div>
            </a>

            <a href="" className="w-full p-4">
                <div className="rounded-lg bg-opacity-30 bg-success p-4 text-white text-center hover:bg-slate-500">
                    <img src={bag} alt="Card Image" className="mx-auto w-16" />
                    <h3 className="text-xl font-bold">৮ম</h3>
                    <p className="text-sm ps-5 pe-5">বিজ্ঞানের পাঁচটি বিষয় ও ইংরেজী</p>
                </div>
            </a>

            <a href="" className="w-full p-4">
                <div className="rounded-lg bg-opacity-30 bg-success p-4 text-white text-center hover:bg-slate-500">
                    <img src={bag} alt="Card Image" className="mx-auto w-16" />
                    <h3 className="text-xl font-bold">৭ম</h3>
                    <p className="text-sm ps-5 pe-5">বিজ্ঞানের পাঁচটি বিষয় ও ইংরেজী</p>
                </div>
            </a>

            <a href="" className="w-full p-4">
                <div className="rounded-lg bg-opacity-30 bg-success p-4 text-white text-center hover:bg-slate-500">
                    <img src={bag} alt="Card Image" className="mx-auto w-16" />
                    <h3 className="text-xl font-bold">৬ষ্ঠ</h3>
                    <p className="text-sm ps-5 pe-5">বিজ্ঞানের পাঁচটি বিষয় ও ইংরেজী</p>
                </div>
            </a>
        </div>
    );
};

export default UpperCards;
