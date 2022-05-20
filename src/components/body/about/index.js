import React from 'react';
import './about.css';
import { init } from 'ityped';
import {useEffect,useRef} from 'react';
import SocialContact from '../../common/social-contact/index';

function About() {
  const textRef = useRef();

  useEffect (()=>{
    init(textRef.current,  { 
      showCursor: true, 
      backDelay: 1500,
      backSpeed: 65,
      strings: ['Website Designer', 'Content Creator','Front-end Developer' ]
    });
  },[]);
  return (
    <div className='about'>
      <div className='about-top'>
        <div className='about-info'>
          Hi👋,  I am
          <br /><span className='info-name'>Leo Nguyen</span>
          <br/> Freelance <span className='info-move' ref={textRef}></span>
          <div className='bio'>
            Developing & designing websites that prioritize user experiences
          </div>
        </div>
        <div className='about-image'>
          <img src={require('../../../assets/avatar.jpg')} className='image'/>
        </div>
      </div>
      <div className='about-bottom'>
        <SocialContact/>
      </div>
    </div>
  )
}

export default About