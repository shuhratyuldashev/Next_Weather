"use client"

import React from 'react'
import HistoryCard from './Search-History-Card'
import EmptyCards from './EmptyCards'
import { clearHistory } from '@/store/weatherSlice'
import { useSelector, useDispatch } from 'react-redux'

const Cards = () => {
    const dispatch = useDispatch()
    const cardsHistory = useSelector(state => state.history.historys)

    const clear = () => {
      dispatch(clearHistory())
    }
    return (
      <section className='Cards'>
        <div className="clear-history">
          <button onClick={() => clear()}>
            Clear
          </button>
        </div>
        {cardsHistory.length === 0 ?
              <EmptyCards />        
              :
              cardsHistory.map(card =>
              <HistoryCard 
                key={card.id} 
                title={card.title} 
                date={card.date} 
              />
              )
          }
      </section>
    )
}

export default Cards