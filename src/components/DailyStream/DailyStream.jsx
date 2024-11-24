import React from 'react'
import './DailyStream.css'
import Notice from '../Notice/Notice'
import CheckList from '../CheckList/CheckList'

const DailyStream = () => {
  
  return (
    <div className='dailystream'>
      <div className='dailystream-header'>
        <div className='dailysteam-headerleft'>
          <h2>Daily Stream</h2>
          <p>Last updated - 4 minutes ago</p>
        </div>
        <img src="/src/assets/refresh.svg" alt="" />
      </div>

      <div className='dailystream-list'>
        <Notice/>
        <CheckList officer="Second Officer Oliver" work="Deck Log" hours="1400-1500" utc="1105" time="+06:30"/>
        <CheckList officer="Third Engineer Edward" work="Engine Log" hours="1200-1600" utc="1055" time="+06:30"/>
        <CheckList/>
      </div>
    </div>
  )
}
export default DailyStream