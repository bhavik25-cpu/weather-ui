import React from "react";
import { useSelector } from "react-redux";

const WeatherCardHumidity = () => {
  const { weatherData } = useSelector((state) => state.weather);
  console.log(weatherData);
  if (!weatherData) return null;

  return (
    <div className="weather-card">
      <p style={{ color: "#cfd0d3", textAlign: "left" }}>Humidity</p>
      <p className="textalign">{weatherData.current.humidity}%</p>
      <p>Normal</p>
    </div>
  );
};

export default WeatherCardHumidity;
