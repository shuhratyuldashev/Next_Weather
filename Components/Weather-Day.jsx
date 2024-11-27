import React from 'react'

const Weather_Day = ({ date, temperature }) => {
  return (
    <div className='weatherDay'>
        <p>{date}</p>
        <span>{temperature}°</span>
        <div className="icon">*</div>
    </div>
  )
}

export default Weather_Day