import React from 'react';
import Line from '../../common/line';
import './contact.css';
import SocialContact from '../../common/social-contact/index'

function Contact() {
  return (
    <div className='contact'>
      <Line />
      <label className='section-title'> Contact</label>
      <div className='contact-container'>
        <div className='contact-left'>
          <p>Visit my <a href="https://itsmeleo.com" target="_blank" rel="noopener noreferrer">Design Portfolio</a>, I do Design too! </p>
          <p>My website portfolio <a href="https://leonguyenportfolio.vercel.app" target="_blank" rel="noopener noreferrer">Back-Up Link</a>, in case this site is down! </p>
          <p>Let's chat! Connect directly with me through these platforms below!</p>
          <SocialContact />
        </div>
        <div className='download'>
          <a download href="https://tinyurl.com/yydh8uuh" target="_blank" rel="noopener noreferrer">
              <i class="fi fi-rr-download"></i> 
              Download Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
