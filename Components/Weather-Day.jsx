import React from 'react'

const Weather_Day = ({ date, temperature, icon }) => {
  return (
    <div className='weatherDay'>
        <p>{date}</p>
        <span>{temperature}°</span>
        <img src={icon} alt="icon" />
      </div>
  )
}

export default Weather_Day