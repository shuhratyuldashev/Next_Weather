"use client"
import React from 'react'
import { fetchWeather } from '@/store/weatherFetchSlice'
import { toggleModal } from '@/store/weatherSlice'
import { useDispatch } from 'react-redux'

const Card = ({ title, date }) => {
  const dispatch = useDispatch()

  const openModal = () => {
    dispatch(fetchWeather(title))
    dispatch(toggleModal()) 
  }

  return (
    <div className='Card' onClick={openModal}>
        <p>{title}</p>
        <span>{date}</span>
    </div>
  )
}

export default Card
