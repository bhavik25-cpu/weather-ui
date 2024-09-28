import React from "react";
import { useSelector } from "react-redux";
import image from "../image/up-arrow.png";

const WeatherCardSunset = () => {
  const { weatherData } = useSelector((state) => state.weather);
  console.log(weatherData);
  if (!weatherData) return null;

  return (
    <div className="weather-card">
      <p className="main-text">Sunrise & Sunset</p>

      <p className="sunsetarrowup">
        <img src={image} />
        {weatherData.forecast.forecastday[0].astro.sunset}
      </p>
      <p className="sunrisearrowdown">
        <img src={image} />
        {weatherData.forecast.forecastday[0].astro.sunrise}
      </p>
    </div>
  );
};

export default WeatherCardSunset;
