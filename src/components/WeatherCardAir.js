import React from "react";
import { useSelector } from "react-redux";

const WeatherCardAir = () => {
  const { weatherData } = useSelector((state) => state.weather);
  console.log(weatherData);
  if (!weatherData) return null;

  return (
    <div className="weather-card">
      <p className="main-text">Air Quality</p>
      <p className="textalign">
        <span className="text-weather">
          {Math.round(weatherData.forecast.forecastday[0].day.air_quality.co)}
        </span>
      </p>
      <p>Unhealthy</p>
    </div>
  );
};

export default WeatherCardAir;
