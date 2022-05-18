import React, { useState } from 'react';
import './header.css';
import Web from './web/index';
import Mobile from './mobile/index';

function Header() {
    const [isOpen, setIsOpen] = useState (false);
  return (
    <div className='header'>
        <div className='logo'>
            Leo's Portfolio
        </div>
        <div className='menu'>
            <div className='web-menu'>
                <Web/>
            </div>
            <div className='mobile-menu'>
                {/*The setIsOpen here === true =>
                the value inside will be hidden until we click */}
                <div onClick={()=>setIsOpen(!isOpen)}>
                    <i class="fi fi-rr-copy menu-icon"></i>
                </div>
                {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}
            </div>
        </div>
    </div>
  );
}

export default Header;