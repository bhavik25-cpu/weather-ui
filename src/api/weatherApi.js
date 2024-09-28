import axios from 'axios';

export const fetchWeather = async (city) => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    return axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`);

};

export const fetchWeatherFourcast = async (city) => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    return axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7`);

};


