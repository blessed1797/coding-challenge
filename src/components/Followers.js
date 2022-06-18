import React from 'react'
import iconcommu from '../images/icon-communities.svg';
import iconmessages from '../images/icon-messages.svg';

const Followers = () => {
  return (
      <div>
          <div className='follower'>
              <img className='message' src={iconcommu} alt/>
        <h1 className='com'>1.4K +</h1>
        <p>communities Formed</p>
          </div> 
        <div className='follower'>
              <img className='message' src={iconmessages} alt/>
               <h1 className='com'>2.7m +</h1>
               <p>message sent</p>
          </div> 
    </div>
  )
}

export default Followers