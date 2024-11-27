import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Weather_Day from './Weather-Day';

const Weather_Days = () => {
  const days = useSelector(store => store.data.weatherDays);
  return (
    <section className='weatherDays'>
      {days?.list?.length ? (
        days.list.map(day => {
          const date = new Date(day.dt_txt); 
          const formattedDate = date.toLocaleDateString();

          return (
            <Weather_Day 
              date={formattedDate || "Date"} 
              temperature={day.main.temp} 
              key={day.dt} 
            />
          );
        })
      ) : (
        <h1>No weather data available</h1>
      )}
    </section>
  );
};

export default Weather_Days;
