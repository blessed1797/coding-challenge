import React from 'react'
import sec from '../images/bg-section-top-desktop-1.svg';
import illu from '../images/illustration-grow-together.svg'
import buttom from '../images/bg-section-bottom-desktop-2.svg'
import sec2 from '../images/bg-section-top-mobile-1.svg'
import sec6 from '../images/bg-section-bottom-mobile-1.svg'

const Section = () => {
  return (
      <div className='section'>
      <img className='mock2' src={sec} alt  />
       <img className='mock4' src={sec2} alt/>
      <div className='section1'>
         <img className='mock' src={illu} alt/>
        <div className='grow'>
           <h2 className='head'>Grow Together</h2>
           <p className='word1'>Generate meaningful discussions with your audience and build a <br /> strong
           ,loyal Community. Think of the insightful conversation you <br /> miss out on with a 
            a feedback form
        </p>
     </div>
       
      </div>
      <img className='mock3' src={buttom} alt />
        <img className='mock6' src={sec6} alt/>
    </div>
  )
}

export default Section
