import React from 'react'
import './Notice.css'

const Notice = () => {
  return (
    <div className='notice'>
      <div className='notice-head'>
        <p>Important Notice</p>
        <img src="/src/assets/paperclip.svg" alt="paperclip" />
      </div>
      <div className='notice-para'>
        <p>Captain's Bridge Order dated Nov 27,<br /> 2020</p>
      </div>
      <div className='notice-bottom'>
        <div className='notice-img'>
          <img src="/src/assets/eye.svg" alt="" />
          <p>1</p>
        </div>
        <button>READ</button>
      </div>
    </div>
  )
}

export default Notice
