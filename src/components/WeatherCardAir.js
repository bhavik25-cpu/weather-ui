import React from "react";
import { useSelector } from "react-redux";

const WeatherCardAir = () => {
  const { weatherData } = useSelector((state) => state.weather);
  console.log(weatherData);
  if (!weatherData) return null;

  return (
    <div className="weather-card">
      <p style={{ color: "#cfd0d3", textAlign: "left" }}>Air Quality</p>
      <p className="textalign">
        {Math.round(weatherData.forecast.forecastday[0].day.air_quality.co)}
      </p>
      <p>Unhealthy</p>
    </div>
  );
};

export default WeatherCardAir;
