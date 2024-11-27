import React from 'react'
import { AiOutlineClear } from "react-icons/ai";

const EmptyCards = () => {
  return (
    <div className='Empty-Cards'>
        <h1><AiOutlineClear size={125}/></h1>
        <p>There's nothing here</p>
    </div>
  )
}

export default EmptyCards