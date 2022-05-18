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
          <p>Let's chat! Connect directly with me through these platforms below!</p>
          <SocialContact />
        </div>
        <div className='download'>
          <a download href={require('../../../assets/WebDev.PDF')}>
              <i class="fi fi-rr-download"></i> 
              Download Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact