import React from "react";
import { useSelector } from "react-redux";

const WeatherCardVisiblity = () => {
  const { weatherData } = useSelector((state) => state.weather);
  console.log(weatherData);
  if (!weatherData) return null;

  return (
    <div className="weather-card">
      <p className="main-text">Visiblity</p>
      <p className="text-weather">{weatherData.current.vis_km}Km</p>
      <p>Average</p>
    </div>
  );
};

export default WeatherCardVisiblity;
