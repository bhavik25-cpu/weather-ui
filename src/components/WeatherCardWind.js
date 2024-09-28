import React from "react";
import { useSelector } from "react-redux";


const WeatherCardWind = () => {
  const { weatherData, } = useSelector((state) => state.weather);
  console.log(weatherData);
  if (!weatherData) return null;


  return (
    <div className="weather-card">
      <p style={{ color: "#cfd0d3" ,textAlign: "left"}}> Wind Status</p>
      <p className="textalign">{weatherData.current.wind_kph}Km/h</p>
      <p>WSW</p>

    </div>
  );
};

export default WeatherCardWind;
