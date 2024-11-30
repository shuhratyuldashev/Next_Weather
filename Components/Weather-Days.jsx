import React from 'react';
import { useSelector } from 'react-redux';
import Weather_Day from './Weather-Day';

const Weather_Days = () => {
  const daysWeather = useSelector(store => store.data.weatherDays?.days);
  return (
    <section className='weatherDays'>
      {daysWeather?.length ? ( 
        daysWeather.map(day => {
          const date = new Date(day.dt_txt);
          const formattedDate = date.toLocaleDateString();
          
          const icon = `http://openweathermap.org/img/wn/${day?.weather[0].icon}@2x.png`
          return (
            <Weather_Day 
              date={formattedDate || "Date"} 
              temperature={Math.round(day.main.temp)} 
              key={day.dt} 
              icon={icon}
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
