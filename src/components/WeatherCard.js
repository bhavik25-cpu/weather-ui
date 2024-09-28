import React from "react";
import { useSelector } from "react-redux";
import  SideImage from "../image/images.jpg";
function getCurrentDay(location) {
  const { localtime, tz_id } = location;

  const date = new Date(localtime);
  const dayFormatter = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    timeZone: tz_id
  });
  const dayOfWeek = dayFormatter.format(date);

  return dayOfWeek;
}

const WeatherCard = () => {
  const { weatherData, units } = useSelector((state) => state.weather);
  console.log(weatherData);
  if (!weatherData) return null;

  const temp =
    units === "C" ? weatherData.current.temp_c : weatherData.current.temp_f;

  const dayOfWeek = getCurrentDay(weatherData.location);
  return (
    <div className="left-side-weather">
  <img src={weatherData.current.condition.icon} alt="Weather Icon" />
  <p>
    {temp}°{units}
  </p>
  <div className="weather-info">
    <p>{dayOfWeek}</p>
    <p>{weatherData.current.last_updated.split(" ")[1]}</p>
  </div>
  


  <div className="image-with-rounded-corners">
    <img src={SideImage} alt="Text" />
  </div>
</div>

  );
};

export default WeatherCard;
