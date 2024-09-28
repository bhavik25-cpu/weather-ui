import React from "react";
import { useSelector } from "react-redux";

const WeatherCardWind = () => {
  const { weatherData } = useSelector((state) => state.weather);
  console.log(weatherData);
  if (!weatherData) return null;

  return (
    <div className="weather-card">
      <p className="main-text"> Wind Status</p>
      <p className="textalign">
        <span className="text-weather">{weatherData.current.wind_kph}</span>Km/h
      </p>
      <p>WSW</p>
    </div>
  );
};

export default WeatherCardWind;
