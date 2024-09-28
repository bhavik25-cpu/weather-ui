import React from "react";
import { useSelector } from "react-redux";
import { PieChart, Pie, Cell } from "recharts";
const data = [{ name: "Group A", value: 400 }];
const COLORS = ["#FFBB28"];

const WeatherCardUv = () => {
  const { weatherData } = useSelector((state) => state.weather);
  console.log(weatherData);
  if (!weatherData) return null;

  return (
    <div className="weather-card weather-card-uv">
      <p style={{ color: "#cfd0d3", textAlign: "left" }}>UV Index</p>

      <PieChart width={150} height={80}>
        <Pie
          data={data}
          startAngle={180}
          endAngle={45}
          innerRadius={30}
          outerRadius={40}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <p className="textalign">{weatherData.current.uv}</p>
    </div>
  );
};

export default WeatherCardUv;
