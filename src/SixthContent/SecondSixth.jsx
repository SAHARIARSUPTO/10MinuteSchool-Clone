import React from 'react';

const SecondSixth = () => {
    const backgroundStyle = {
        backgroundImage: 'url(https://assets.10ms.com/images/home/learning-platform-bg.svg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className='text-center' style={backgroundStyle}>
            <div className='mx-auto'>
                <p className='text-center text-3xl justify-center mx-auto pb-5 font-bold'>
                    আজই জয়েন করুন বাংলাদেশের সবচেয়ে বড় লার্নিং প্ল্যাটফর্মে
                </p>
                <button className='btn btn-success text-3xl text-white text-center items-center mx-auto'>
                    জয়েন করুন
                </button>
            </div>
        </div>
    );
};

export default SecondSixth;
