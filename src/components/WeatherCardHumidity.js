import React from "react";
import { useSelector } from "react-redux";

const WeatherCardHumidity = () => {
  const { weatherData } = useSelector((state) => state.weather);
  console.log(weatherData);
  if (!weatherData) return null;

  return (
    <div className="weather-card">
      <p className="main-text">Humidity</p>
      <p className="textalign">
        <span className="text-weather">{weatherData.current.humidity}</span>%
      </p>
      <p>Normal</p>
    </div>
  );
};

export default WeatherCardHumidity;
