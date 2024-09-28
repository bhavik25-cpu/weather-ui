import React from "react";

const WeatherCardSmall = ({ day, temp_c, condition }) => {
  return (
    <div className="weather-card-small">
      <p>{day}</p>
      <img src={condition.icon} alt={condition.text} />
      <p>{temp_c}°C</p>
    </div>
  );
};

export default WeatherCardSmall;
