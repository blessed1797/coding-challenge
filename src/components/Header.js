import React from 'react'
import iconmessages from '../images/icon-messages.svg';


const Header = () => {
  return (
    <div className='header'>
       <div className='huddle'>
        <img  className='message' src={iconmessages} alt />
        <h2 className='hud'>Huddle</h2>
      </div>
      <button className='try'>Try if for free</button>
    </div>
  )
}

export default Header


