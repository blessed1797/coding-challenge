import React from 'react'
import sec from '../images/bg-footer-top-desktop.svg';
import iconmessages from '../images/icon-messages2.svg';
import gmail from '../images/icon-email.svg'
import phone from '../images/icon-phone.svg'
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import sec2 from '../images/bg-footer-top-mobile.svg'




const Footer = () => {
  return (
      <div className='footer'>
      <img className='footer-top-img' src={sec} alt="" />
      <img className='mock0' src={sec2} alt="" />
          <div className='footer-color'>
               <img  className='message' src={iconmessages} alt="" />
        <h2 className='hud2'>Huddle</h2>
        <div className='newsLetter'>
          <h3 className='newsl'>NEWSLETTER</h3>
            <p className='newsp'>To receive tips on how to grow your community <br />
            Sign up to our weekly newsletter. We'll never send <br />
              you spam or pass on your email address</p>
            <div className='subs'>
            <input className="input" type="text" />
            <div>
             <button className='head1'>Subscribe</button>
          </div>
          </div>
         </div>
        <p className='footerMessage'>
          Lorem ipsum dolor sit amet, consectetur <br /> a
          dipisicing elit. Magni quis ex, numquam,<br />
          eligendi aliquam deserunt nihil illo commodi
        </p>
        
        <div>
          <img className='' src={phone} alt="" />
          <p className='p1'>phone: +1-543-123-4567</p>
        </div>
         <div>
          <img className='' src={gmail} alt=""/>
          <p className='p1'>example@huddle.com</p>
        </div>
        
        <div className='icons'>
            <FaFacebookSquare />
          <span>  <FaInstagram /></span>
          <span> <FaTwitterSquare/></span>
       
        </div>
        
        </div>
       
      </div>
  )
}

export default Footer
