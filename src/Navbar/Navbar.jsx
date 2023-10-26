import React from 'react';
import logo from "./logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBook, faList, faMagnifyingGlass, faPerson, faPhone, faRocket, faTasks } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <div className='text-center mx-auto flex-row'>
            <div className="navbar bg-base-100 text-center flex-row">
                <div className="flex-row">
                    <a className="btn btn-ghost normal-case text-xl">
                        <img className='w-20' src={logo} alt="Logo" />
                    </a>
                </div>

                <div className="form-control hidden md:flex">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>

                <button className="md:hidden">
                    <FontAwesomeIcon className='me-3 mx-3' icon={faMagnifyingGlass} />
                </button>

                <div className="flex-none gap-2 md:hidden mx-2">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost">
                            <FontAwesomeIcon icon={faBars} />
                        </label>
                        <ul tabIndex={0} className="z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li><a><FontAwesomeIcon className='text-red-400' icon={faRocket}></FontAwesomeIcon>স্কিলস</a></li>
                            <li><a><FontAwesomeIcon className='text-red-400' icon={faBook}></FontAwesomeIcon>আনলাইন ব্যাচ</a></li>
                            <li><a><FontAwesomeIcon className='text-red-400' icon={faTasks}></FontAwesomeIcon>ভর্তি পরীক্ষা</a></li>
                            <li><a><FontAwesomeIcon className='text-red-400' icon={faList}></FontAwesomeIcon>চাকরি প্রস্তুতি</a></li>
                            <li><a><FontAwesomeIcon className='text-red-400' icon={faPerson}></FontAwesomeIcon>লগ-ইন</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex-none gap-2 hidden md:flex">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost ms-5">
                            স্কিলস
                        </label>
                        <ul tabIndex={0} className="z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li><a><FontAwesomeIcon className='text-red-400' icon={faRocket}></FontAwesomeIcon> স্কিল 1</a></li>
                            <li><a><FontAwesomeIcon className='text-red-400' icon={faRocket}></FontAwesomeIcon>স্কিল 2</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost">
                            আনলাইন ব্যাচ
                        </label>
                        <ul tabIndex={0} className="z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li><a><FontAwesomeIcon className='text-red-400' icon={faBook}></FontAwesomeIcon> ব্যাচ 1</a></li>
                            <li><a><FontAwesomeIcon className='text-red-400' icon={faBook}></FontAwesomeIcon> ব্যাচ 2</a></li>
                        </ul>
                    </div>
                    <a className="btn glass">ভর্তি পরীক্ষা</a>
                    <a className="btn glass">চাকরি প্রস্তুতি</a>
                </div>
                <div className='ml-auto'> {/* Apply "ml-auto" class to move content to the right */}
                    <a href='tel:16910' className='font-bold text-success pe-3'>
                        <FontAwesomeIcon icon={faPhone} /> 16910
                    </a>
                    <a className="btn btn-success  text-white">লগ-ইন</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
