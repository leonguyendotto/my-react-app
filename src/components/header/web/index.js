import React from 'react';
import'./web.css';

function Web() {
  return (
    <div className='web'>
        <div className='web-choice'>
            <a href="#projects">
                <i class="fi fi-rr-laptop choice-icon"></i>Projects
            </a>
        </div>
        <div className='web-choice'>
            <a href="skills">
                <i class="fi fi-rr-edit-alt choice-icon"></i>Skills
            </a>
        </div>
        <div className='web-choice'>
            <a href="contact">
                <i class="fi fi-rr-headset choice-icon"></i>Contact
            </a>
        </div>
    </div>
  );
}

export default Web;