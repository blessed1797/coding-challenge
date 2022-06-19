import React from 'react'
import sec from '../images/bg-section-top-desktop-1.svg';
import illu from '../images/illustration-your-users.svg'
import buttom from '../images/bg-section-bottom-desktop-2.svg'
import sec2 from '../images/bg-section-top-mobile-2.svg'
import sec6 from '../images/bg-section-bottom-mobile-1.svg'

const Section = () => {
  return (
    <div className='section3'>
      <img className='mock2' src={sec} alt="" />
      <img className='mock4' src={sec2} alt="" />
      <div className='section1'>
        <img className='mock11' src={illu} alt="" />
        <div className='grow'>
          <h2 className='head'>Your Users</h2>
          <p className='word1'>Generate meaningful discussions with your audience and build a <br /> strong
            ,loyal Community. Think of the insightful conversation you <br /> miss out on with a
            a feedback form
          </p>
          <p className='word1phone'>Generate meaningful discussions with your<br />  audience and build a strong
            ,loyal Community.<br />  Think of the insightful conversation you  miss <br /> out on with a
            a feedback form
          </p>
        </div>
        <img className='mock' src={illu} alt="" />
      </div>
      <img className='mock3' src={buttom} alt="" />
      <img className='mock6' src={sec6} alt="" />

      <div>
        <h1 className='com2'>Ready To Build Your Community</h1>
        <button className='getStarted2'>Get started for free</button>
     </div>
    </div>
  )
}

export default Section
