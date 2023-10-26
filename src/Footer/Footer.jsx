import React from 'react';

const Footer = () => {
    return (
        <div className='p-5 sm:justify-center'>
            <hr />
            <div className='w-full sm:w-4/5 justify-center mx-auto px-4 sm:px-0 pt-20'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                    <div className='text-center sm:text-left'>
                        <img className='w-1/3 sm:w-1/5 pb-5' src="https://10minuteschool.com/images/logo.svg" alt="" />
                        <p className='text-lg pb-5'>ডাউনলোড করুন আমাদের মোবাইল অ্যাপ</p>
                        <img src="https://10minuteschool.com/_next/image/?url=https%3A%2F%2Fcdn.10minuteschool.com%2Fimages%2Fgoogle-play-icon_1695731678094.png&w=256&q=75" alt="" />
                    </div>
                    <div>
                        <p className='text-xl font-bold'>কোম্পানী</p>
                        <a className='block text-gray-500 hover:text-gray-600' href="">ক্যারিয়ার</a>
                        <a className='block text-gray-500 hover:text-gray-600' href="">শিক্ষক হিসেবে জয়েন</a>
                        <a className='block text-gray-500 hover:text-gray-600' href="">অ্যাফিলিয়েট হতে চাইলে</a>
                        <a className='block text-gray-500 hover:text-gray-600' href="">প্রাইভেসি পলিসি</a>
                        <a className='block text-gray-500 hover:text-gray-600' href="">রিফান্ড পলিসি</a>
                        <a className='block text-gray-500 hover:text-gray-600' href="">ব্যবহারকারীর শর্তাবলি</a>
                    </div>
                    <div>
                        <p className='text-xl font-bold'>অন্যান্য</p>
                        <a className='block text-gray-500 hover:text-gray-600' href="">ব্লগ</a>
                        <a className='block text-gray-500 hover:text-gray-600' href="">বুক স্টোর</a>
                        <a className='block text-gray-500 hover:text-gray-600' href="">অ্যাফিলিয়েট হতে চাইলে</a>
                        <a className='block text-gray-500 hover:text-gray-600' href="">ভেরিফাই সার্টিফিকেট</a>
                        <a className='block text-gray-500 hover:text-gray-600' href="">ফ্রি ডাউনলোড</a>
                    </div>
                    <div>
                        <p className='text-xl font-bold'>আমাদের যোগাযোগের মাধ্যম</p>
                        <a className='block text-gray-500 hover:text-gray-600' href="">কল করুন: <span className='text-success'><a href="tel:16910">16910 (24x7)</a></span></a>
                        <a className='block text-gray-500 hover:text-gray-600' href="">দেশের বাহির থেকে: +880 9612001010</a>
                        <a className='block text-gray-500 hover:text-gray-600' href="mailto:support@10minuteschool.com">ইমেইল: support@10minuteschool.com</a>
                    </div>
                </div>
                <div>
                    <p className='text-center pt-5 pb-2'>স্বত্ব © ২০১৫ - ২০২৩ টেন মিনিট স্কুল কর্তৃক সর্বস্বত্ব সংরক্ষিত</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
