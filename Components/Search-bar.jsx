"use client"

import React, { useState, useEffect } from 'react';
import { addToHistory, toggleModal } from '@/store/weatherSlice';
import { IoSearchOutline } from "react-icons/io5";
import Information_modal from '@/Components/Information-modal';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from '@/store/weatherFetchSlice';

const Search_bar = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const isModal = useSelector(state => state.history.modal);

  useEffect(() => {
    const currentDate = new Date().toLocaleDateString('uz-UZ');
    setDate(currentDate);
  }, []);
  
  useEffect(() => {
    dispatch(fetchWeather(title))
  }, [dispatch, title])


  const handleModal = () => {
    dispatch(toggleModal());
  }

  const addHistory = () => { 
    if (title.trim().length !== 0) {
      dispatch(addToHistory({ title, date }));
      setTitle('');
      handleModal();
    }
  }
 

  return (
    <div className='Search-bar'>
      <button onClick={() => { addHistory() }}>
        <IoSearchOutline size={25} />
      </button>
      <input 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text" 
        placeholder="Search" 
      />
      {isModal && <Information_modal />}
    </div>
  );
};

export default Search_bar;
