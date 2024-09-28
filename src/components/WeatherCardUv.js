import React from "react";
import { useSelector } from "react-redux";
import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["#FFBB28"];

const WeatherCardUv = () => {
  const { weatherData } = useSelector((state) => state.weather);
  console.log(weatherData);
  if (!weatherData) return null;

  // Calculate the end angle based on the UV index (1 to 8)
  const uvValue = weatherData.current.uv; // Get the UV index
  const maxUvValue = 8; // Maximum UV index
  const startAngle = 180; // Starting angle
  const endAngle = startAngle + (uvValue / maxUvValue) * 180; // Calculate end angle

  // Data for the pie chart, using the UV value
  const data = [{ name: "UV Index", value: uvValue * 50 }]; // Adjust value as needed for visual clarity

  return (
    <div className="weather-card weather-card-uv">
      <p className="main-text">UV Index</p>

      <PieChart width={190} height={120}>
        <Pie
          data={data}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={30}
          outerRadius={40}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <p className="textalign">
        <span className="text-weather">{uvValue}</span>
      </p>
    </div>
  );
};

export default WeatherCardUv;
