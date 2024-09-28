import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeatherData = createAsyncThunk(
  "weather/fetchWeatherData",
  async ({ city, units }) => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    console.log(apiKey);
    const response = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=3d004e91466647518aa135742242609&q=${city}&aqi=yes&days=7`
    );

    return { ...response.data, units };
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weatherData: null,
    status: "idle",
    city: "",
    units: "C"
  },
  reducers: {
    setUnits: (state, action) => {
      state.units = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.weatherData = action.payload;
        state.city = action.payload.location.name;
        state.status = "succeeded";
      })
      .addCase(fetchWeatherData.rejected, (state) => {
        state.status = "failed";
      });
  }
});

export const { setUnits } = weatherSlice.actions;

export default weatherSlice.reducer;
