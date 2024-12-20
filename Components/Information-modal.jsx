"use client"
import React from "react";
import { MdError } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import Weather_Days from "./Weather-Days";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "@/store/weatherSlice";

const Information_modal = () => {
  const nameCountry = useSelector((store) => store.data.weatherDays?.data.city.name);
  const day = useSelector((store) => store.data.weatherDays?.days[0]);
  const dispatch = useDispatch();


  const [weather, temp, wind, humidity, visibility, icon ] = [
    day?.weather[0].main,
    Math.round(day?.main.temp),
    day?.wind.speed,
    day?.main.humidity,
    day?.visibility / 1000,
    `http://openweathermap.org/img/wn/${day?.weather[0].icon}@2x.png`
  ];

  const handleModal = () => {
    dispatch(toggleModal());
  };
  return (
    <>
      {nameCountry ? (
        <div className="info-modal">
          <div className="header-modal">
            <button onClick={handleModal}>
              <IoCloseOutline size={25} />
            </button>
            <p>{nameCountry}</p>
          </div>
          <div className="main">
            <div className="weather">
              <p>Weather:</p>
              <b>
                {weather}
              </b>
              <img src={icon} alt="icon" />
            </div>

            <div className="temperature">
              <p>Temperatue:</p>
              <h1>{temp}°</h1>
            </div>

            <div className="weather-stats">
              <div className="wind">
                <svg
                  width="50"
                  height="46"
                  viewBox="0 0 50 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M41.3793 0C39.7902 0 38.5057 1.46871 38.5057 3.28571C38.5057 5.10271 39.7902 6.57143 41.3793 6.57143C42.9655 6.57143 44.2529 8.04343 44.2529 9.85714C44.2529 11.6709 42.9655 13.1429 41.3793 13.1429H9.77012C8.18104 13.1429 6.89655 14.6116 6.89655 16.4286C6.89655 18.2456 8.18104 19.7143 9.77012 19.7143H27.0115C28.5977 19.7143 29.8851 21.1863 29.8851 23C29.8851 24.8137 28.5977 26.2857 27.0115 26.2857H8.62069C3.86782 26.2857 0 30.7083 0 36.1429C0 41.5774 3.86782 46 8.62069 46C10.2098 46 11.4943 44.5313 11.4943 42.7143C11.4943 40.8973 10.2098 39.4286 8.62069 39.4286C7.03448 39.4286 5.74713 37.9566 5.74713 36.1429C5.74713 34.3291 7.03448 32.8571 8.62069 32.8571H27.0115C31.7644 32.8571 35.6322 28.4346 35.6322 23C35.6322 21.8401 35.4253 20.746 35.1006 19.7143H41.3793C46.1322 19.7143 50 15.2917 50 9.85714C50 4.42257 46.1322 0 41.3793 0Z"
                    fill="#D9D9D9"
                  />
                </svg>
                <p>{wind} km/h</p>
              </div>
              <div className="humidity">
                <svg
                  width="44"
                  height="51"
                  viewBox="0 0 44 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.85788 43.4193C0.0473721 35.9783 0.0473721 23.9139 7.85788 16.4731L22 3L36.1423 16.4731C43.9526 23.9139 43.9526 35.9783 36.1423 43.4193C28.3318 50.8602 15.6684 50.8602 7.85788 43.4193Z"
                    stroke="#D9D9D9"
                    strokeWidth="3"
                  />
                  <path
                    d="M29.6329 24.1353C30.1211 23.6471 30.1211 22.8543 29.6329 22.3661C29.1447 21.878 28.3519 21.878 27.8637 22.3661L15.3661 34.8637C14.878 35.3519 14.878 36.1447 15.3661 36.6329C15.8543 37.1211 16.6471 37.1211 17.1353 36.6329L29.6329 24.1353ZM20.002 24.5024C20.002 23.8395 19.7386 23.2038 19.2699 22.735C18.8011 22.2663 18.1654 22.0029 17.5024 22.0029C16.8395 22.0029 16.2038 22.2663 15.735 22.735C15.2663 23.2038 15.0029 23.8395 15.0029 24.5024C15.0029 25.1654 15.2663 25.8011 15.735 26.2699C16.2038 26.7386 16.8395 27.002 17.5024 27.002C18.1654 27.002 18.8011 26.7386 19.2699 26.2699C19.7386 25.8011 20.002 25.1654 20.002 24.5024ZM30 34.5005C30 33.8376 29.7367 33.2018 29.2679 32.7331C28.7992 32.2643 28.1634 32.001 27.5005 32.001C26.8376 32.001 26.2018 32.2643 25.7331 32.7331C25.2643 33.2018 25.001 33.8376 25.001 34.5005C25.001 35.1634 25.2643 35.7992 25.7331 36.2679C26.2018 36.7367 26.8376 37 27.5005 37C28.1634 37 28.7992 36.7367 29.2679 36.2679C29.7367 35.7992 30 35.1634 30 34.5005Z"
                    fill="#D9D9D9"
                  />
                </svg>
                <p>{humidity} %</p>
              </div>
              <div className="visibility">
                <svg
                  width="60"
                  height="40"
                  viewBox="0 0 60 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.0006 27.1428C32.1064 27.1428 34.1259 26.3903 35.615 25.0508C37.104 23.7112 37.9405 21.8944 37.9405 20C37.9405 18.1056 37.104 16.2888 35.615 14.9492C34.1259 13.6097 32.1064 12.8571 30.0006 12.8571C27.8949 12.8571 25.8753 13.6097 24.3863 14.9492C22.8973 16.2888 22.0608 18.1056 22.0608 20C22.0608 21.8944 22.8973 23.7112 24.3863 25.0508C25.8753 26.3903 27.8949 27.1428 30.0006 27.1428Z"
                    fill="#D9D9D9"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.349898 21.6857C-0.116633 20.5952 -0.116633 19.3877 0.349898 18.2971C2.65954 12.91 6.72863 8.27841 12.0213 5.01231C17.3141 1.74621 23.5822 -0.00126304 30.0005 6.84939e-07C43.5204 6.84939e-07 55.0682 7.6 59.651 18.3143C60.1179 19.4029 60.1147 20.6114 59.651 21.7029C57.3414 27.09 53.2723 31.7216 47.9796 34.9877C42.6869 38.2538 36.4187 40.0013 30.0005 40C16.4805 40 4.93278 32.4 0.349898 21.6857ZM42.7042 20C42.7042 23.031 41.3658 25.9379 38.9834 28.0812C36.601 30.2245 33.3697 31.4286 30.0005 31.4286C26.6312 31.4286 23.4 30.2245 21.0176 28.0812C18.6351 25.9379 17.2967 23.031 17.2967 20C17.2967 16.969 18.6351 14.0621 21.0176 11.9188C23.4 9.77551 26.6312 8.57143 30.0005 8.57143C33.3697 8.57143 36.601 9.77551 38.9834 11.9188C41.3658 14.0621 42.7042 16.969 42.7042 20Z"
                    fill="#D9D9D9"
                  />
                </svg>
                <p>{visibility} km</p>
              </div>
            </div>
          </div>
          <Weather_Days/>
        </div>
      ) : (
        <div className="info-modal">
            <div className="header-modal">
            <button onClick={handleModal}>
              <IoCloseOutline size={25} />
            </button>
          </div>
          <div className="info-error">
              <h1>
                <MdError />
              </h1>
              <p>No results found or bad internet.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Information_modal;
