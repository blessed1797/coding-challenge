import React from 'react'
import sec from '../images/bg-section-top-desktop-1.svg';
import illu from '../images/illustration-your-users.svg'
import buttom from '../images/bg-section-bottom-desktop-2.svg'

const Section = () => {
  return (
      <div className='section3'>
      <img className='mock2' src={sec} alt=""/>
      <div className='section1'>
        <div className='grow'>
           <h2 className='head'>Your Users</h2>
                  <p className='word1'>It takes no time at all to integrate Huddle 
                      with your app's <br /> authentication solution . This means, once signed
                      in to your app, <br />  your users can start chatting immediately
        </p>
     </div>
        <img className='mock' src={illu} alt="" />
      </div>
          <img className='mock3' src={buttom} alt=""/>
          
          <h1 className='com2'>Ready To Build Your Community</h1>
           <button className='getStarted2'>Get started for free</button>
    </div>
  )
}

export default Section
