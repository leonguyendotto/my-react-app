import React from 'react';
import './mobile.css';

function Mobile({isOpen, setIsOpen}) {
  return (
    <div className='mobile'>
        <div className='close-icon' onClick={()=> setIsOpen(!isOpen)}>
            <i class="fi fi-rr-cross-circle"></i>
        </div>
        <div className='mobile-container'>
            <div className='mobile-choice'>
                <a href="#projects">
                    <i class="fi fi-rr-laptop choice-icon"></i>Projects
                </a>
            </div>
            <div className='mobile-choice'>
                <a href="skills">
                    <i class="fi fi-rr-edit-alt choice-icon"></i>Skills
                </a>
            </div>
            <div className='mobile-choice'>
                <a href="contact">
                    <i class="fi fi-rr-headset choice-icon"></i>Contact
                </a>
            </div>
        </div>
    </div>
  );
}

export default Mobile;