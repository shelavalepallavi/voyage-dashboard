import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-left'>
        <img src="/src/assets/ship.svg" alt="" />
        <div className='nav-heading'>
          <p className='nav-para'>Dev Vessel</p>
          <p className='nav-second-para'>16 Crewmates <span>· 09 Active</span></p>
        </div>
      </div>

      <div className='nav-right'>
        <button className='nav-first-btn'>GMT +09:00</button>
        <button className='nav-sec-btn'><img src="/src/assets/light.svg" alt="" /></button>
      </div>
    </div>
  )
}

export default Navbar

