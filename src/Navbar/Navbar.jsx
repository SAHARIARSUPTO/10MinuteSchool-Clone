import React from 'react';
import logo from "./logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faPhone } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    return (
        <div>
            
            <div className='text-center mx-a'>
            <div className="navbar bg-base-100 text-center">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">
                        <img className='w-20' src={logo} alt="Logo"></img>
                    </a>
                </div>

                <div className="form-control hidden md:flex">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto"  />
                </div>
                <div>
                <button><FontAwesomeIcon className='me-3 mx-3' icon={faMagnifyingGlass} /></button>
                </div>
                <div className="flex-none gap-2 md:hidden mx-2">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost">
                        <FontAwesomeIcon icon={faBars} />
                        </label>
                        <ul tabIndex={0} className="z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li><a>স্কিলস</a></li>
                            <li><a>আনলাইন ব্যাচ</a></li>
                            <li><a>ভর্তি পরীক্ষা</a></li>
                            <li><a>চাকরি প্রস্তুতি</a></li>
                            <li><a>লগ-ইন</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex-none gap-2 hidden md:flex">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost">
                            স্কিলস
                        </label>
                        <ul tabIndex={0} className="z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li><a>স্কিল 1</a></li>
                            <li><a>স্কিল 2</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost">
                            আনলাইন ব্যাচ
                        </label>
                        <ul tabIndex={0} className="z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li><a>ব্যাচ 1</a></li>
                            <li><a>ব্যাচ 2</a></li>
                        </ul>
                    </div>
                    <a className="btn glass">ভর্তি পরীক্ষা</a>
                    <a className="btn glass">চাকরি প্রস্তুতি</a>
                    <a href='tel:16910' className='font-bold text-success'><FontAwesomeIcon icon={faPhone} /> 16910</a>
                    <a className="btn btn-success text-white">লগ-ইন</a>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Navbar;