import React from 'react'
import './CheckList.css'

const CheckList = ({officer, work, hours, utc, time}) => {
 
  return (
    <div className='checklist'>
      <div className='checklist-up'>
        {officer && work && hours ? (
           <p>
           <span>{officer}</span> submitted the {work} <br /> for {hours} watch hour and completed the <br /> Handover Checklist
         </p>
        ):(<p></p>)}
      </div>
      <div className='checklist-bottom'>
        {utc && time? (
        <p>{utc} | LT {time}</p>
        ):(
        <p></p>
        )}
      </div>
    </div>
  )
}

export default CheckList
