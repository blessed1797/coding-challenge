import React from 'react'
import screenmockup from '../images/screen-mockups.svg';

const Community = () => {
  return (
    <div>
      <div className="newdiv2">

        <h1 className='com'>Build the Community Your Fans Will Love</h1>
        <p className='word'>Huddle re-imagines the way we build communities.
          you have a vioce, but so does your audience
          . Create connection with your  users as you engage
          in genuine discussion
        </p>
      </div>
      <div>
        <button className='getStarted'>Get started for free</button>
      </div>
      <img className='mockup' src={screenmockup} alt="" />
    </div>
  )
}

export default Community