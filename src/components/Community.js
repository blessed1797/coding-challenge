import React from 'react'
import screenmockup from '../images/screen-mockups.svg';

const Community = () => {
  return (
      <div>
          <h1 className='com'>Build Your Community Your Fans Will Love</h1>
          <p className='word'>Huddle re-imagines the way we build communities. you have a <br /> vioce, but so does your audience
              . Create connection with your <br /> users as you engage
                 in genuine discussion
          </p>
          <div>
          <button className='getStarted'>Get started for free</button>
          </div>
         <img  className='mockup' src={screenmockup} alt="svg image" />
      </div>
  )
}

export default Community