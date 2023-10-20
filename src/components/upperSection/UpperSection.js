import React from 'react'
import './UpperSection.css'
import Gif from '../../assests/starting.png'
import TypingAnimation from './typingAnymation/TypingAnimation'
import 'animate.css';

function UpperSection() {
  return (
    <div className='container'>
      <div className='left-section'>
      <h1 class="animate__animated animate__backInLeft"> <TypingAnimation/> </h1>
      </div>
      <div className='right-section'>
        <img src={Gif} alt="img" />
       
      </div>
    </div>
  )
}

export default UpperSection
