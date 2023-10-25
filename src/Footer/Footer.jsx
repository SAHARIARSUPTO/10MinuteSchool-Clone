import React from 'react';

const Footer = () => {
    return (
       <div className='p-5'>
        <hr />
        <div className='w-full  justify-center mx-auto ms-5 me-5 pt-20 '>
            <div className='grid grid-cols-1 mx-auto lg:grid-cols-4'>
            <div>
                <img className='w-1/5 pb-5 ' src="https://10minuteschool.com/images/logo.svg" alt="" />
                <p className='text-l pb-5'>ডাউনলোড করুন আমাদের মোবাইল অ্যাপ</p>
                <img src="https://10minuteschool.com/_next/image/?url=https%3A%2F%2Fcdn.10minuteschool.com%2Fimages%2Fgoogle-play-icon_1695731678094.png&w=256&q=75" alt="" /> 
            </div>
            <div>
                <p className='text-xl font-bold'>কোম্পানী</p> <br></br>
                <a className='hover:text-gray-500' href="">ক্যারিয়ার</a> <br />
                <a  className='hover:text-gray-500'  href="">শিক্ষক হিসেবে জয়েন</a><br></br>
                <a className='hover:text-gray-500'   href="">অ্যাফিলিয়েট হতে চাইলে</a><br></br>
                <a className='hover:text-gray-500'  href="">প্রাইভেসি পলিসি</a><br></br>
                <a className='hover:text-gray-500'  href="">রিফান্ড পলিসি</a><br></br>
                <a  href="">ব্যবহারকারীর শর্তাবলি</a><br></br>
            </div>
            <div><p className='text-xl font-bold'>অন্যান্য</p>
            <a className='hover:text-gray-500' href="">ব্লগ</a> <br />
                <a  className='hover:text-gray-500'  href="">বুক স্টোর</a><br></br>
                <a className='hover:text-gray-500'   href="">অ্যাফিলিয়েট হতে চাইলে</a><br></br>
                <a className='hover:text-gray-500'  href="">ভেরিফাই সার্টিফিকেট</a><br></br>
                <a className='hover:text-gray-500'  href="">ফ্রি ডাউনলোড</a><br></br>
           </div>
            <div><p className='text-xl font-bold'>আমাদের যোগাযোগের মাধ্যম</p><br />
            <a className='hover:text-gray-500' href="">কল করুন: <span></span> <a className='text-success' href="tel:16910">16910 (24x7)</a></a> <br />
                <a  className='hover:text-gray-500'  href="">দেশের বাহির থেকে: +880 9612001010</a><br></br>
                <a className='hover:text-gray-500'   href="mailto:support@10minuteschool.com">ইমেইল: support@10minuteschool.com</a><br></br>
            </div>
        </div>
        </div></div>
    );
};

export default Footer;









