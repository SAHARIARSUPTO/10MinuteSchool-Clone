import React from 'react';
import "./Scroll.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarning } from '@fortawesome/free-solid-svg-icons';
const Scroll = () => {
    return (
        <div >
            <div className="scrolling-text">
        <p className='text-xl font-bold text-red-400'><FontAwesomeIcon icon={faWarning}></FontAwesomeIcon> WARNING! This website has been developed for the sole purpose of practice, and its content has been meticulously curated from 10 Minute School. I kindly encourage you to visit the official  <a href="https://10minuteschool.com/">10 Minute School </a>website for a comprehensive and authentic educational experience.</p>
    </div>
        </div>
    );
};

export default Scroll;