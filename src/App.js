import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "./redux/weatherSlice";
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";
import WeatherCardSmall from "./components/WeatherCardSmall";
import "./assets/styles.css";
import WeatherCardAir from "./components/WeatherCardAir";
import WeatherCardSunset from "./components/WeatherCardSunset";
import WeatherCardVisiblity from "./components/WeatherCardVisiblity";
import WeatherCardUv from "./components/WeatherCardUv";
import WeatherCardHumidity from "./components/WeatherCardHumidity";
import WeatherCardWind from "./components/WeatherCardWind";
import image from "./image/download.jpg";

function App() {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather.weatherData);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const location = `${latitude},${longitude}`;
      dispatch(fetchWeatherData({ city: location, units: "C" }));
    });
  }, [dispatch]);

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  return (
    <div className="container">
      <div className="app">
        <div className="left-section">
          <SearchBar />
          <WeatherCard />
        </div>

        <div className="right-section">
          <div className="tabs">
            <div>
              <button className="tab active">Today</button>
              <button className="tab">Week</button>
            </div>
            <div className="temperature-indicators">
              <div className="temp-circle black">
                <span>°C</span>
              </div>
              <div className="temp-circle white">
                <span>°F</span>
              </div>
              <div className="image-box">
                <img src={image} alt="Weather Icon" />
              </div>
            </div>
          </div>
          <div className="todays_highlight">
            <div className="weekly-forecast-horizontal">
              {daysOfWeek.map((day, index) => {
                const weatherForDay = weatherData?.forecast?.forecastday?.find(
                  (forecast) =>
                    new Date(forecast.date).toLocaleDateString("en-US", {
                      weekday: "long"
                    }) === day
                );

                return weatherForDay ? (
                  <WeatherCardSmall
                    key={index}
                    day={day}
                    temp_c={weatherForDay.day.avgtemp_c}
                    condition={weatherForDay.day.condition}
                  />
                ) : null;
              })}
            </div>
            <div>
              <h1>Today's Highlights</h1>
              <div className="top-cards">
                <WeatherCardUv />
                <WeatherCardWind />
                <WeatherCardSunset />
              </div>

              <div className="bottom-cards">
                <WeatherCardHumidity />
                <WeatherCardVisiblity />
                <WeatherCardAir />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
