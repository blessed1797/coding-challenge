import React from 'react'
import illu from '../images/illustration-flowing-conversation.svg'

const Section2 = () => {
  return (
      <div className='section2'>
        <div>
            <img className='section-2' src={illu} />
        </div>
          <div className='grow2'>
          <h2 className='head'>Flowing Conversation</h2>
        <p className='word2'> You wouldn't paginate a conversation in real life, so why do it online?
          <br /> Our threads have just-in-time loading for a more natural flow
      </p>
      </div>
      </div>
  )
}

export default Section2