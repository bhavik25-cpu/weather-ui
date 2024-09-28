import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import SideImage from "../image/images.jpg"; // Static fallback image

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
  const [unsplashImage, setUnsplashImage] = useState(SideImage);

  useEffect(() => {
    const fetchUnsplashImage = async () => {
      if (weatherData && weatherData.location) {
        const region = weatherData.location.region;

        try {
          const response = await axios.get(
            `https://api.unsplash.com/search/photos?query=${region}%20city%20view&client_id=INFZEV-3A2oxzsT-XhEzrFR-TcAFZF0805_dtDNKNjc`
          );

          const images = response.data.results;

          if (images.length > 0) {
            const randomImage =
              images[Math.floor(Math.random() * images.length)];

            const unsplashUrl = `${randomImage.urls.raw}&w=260&h=180&fit=crop`;
            setUnsplashImage(unsplashUrl);
          } else {
            setUnsplashImage(SideImage);
          }
        } catch (error) {
          console.error("Error fetching Unsplash image:", error);
          setUnsplashImage(SideImage);
        }
      }
    };

    fetchUnsplashImage();
  }, [weatherData]);

  if (!weatherData) return null;

  const temp =
    units === "C" ? weatherData.current.temp_c : weatherData.current.temp_f;

  const dayOfWeek = getCurrentDay(weatherData.location);

  return (
    <div className="left-side-weather">
      <div>
        <img src={weatherData.current.condition.icon} alt="Weather Icon" />
      </div>
      <p>
        {temp}°{units}
      </p>
      <div className="weather-info">
        <p>{dayOfWeek}</p>
        <p className="light-text">
          {weatherData.current.last_updated.split(" ")[1]}
        </p>
      </div>
      <div className="image-with-rounded-corners">
        <img
          src={unsplashImage}
          alt="Region City View"
          width="260"
          height="180"
        />
        <p>
          {weatherData.location.name}, {weatherData.location.region},{" "}
          {weatherData.location.country}
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
