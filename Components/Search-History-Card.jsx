import React from 'react'

const Card = ({ title, date }) => {
  return (
    <div className='Card'>
        <p>{title}</p>
        <span>{date}</span>
    </div>
  )
}

export default Card