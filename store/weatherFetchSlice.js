import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchWeather = createAsyncThunk(
  "fetchWeather/fetchWeather",
  async (city) => {
    const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=5&appid=d0262df8a15f1faa47d59331be5bccd4&units=metric`;
    const response = await axios.get(API_URL);
    const data = response.data;
    console.log(data);

    return data;
  }
);

const fetchWeatherDays = createSlice({
  name: "fetchWeather",
  initialState: {
    weatherDays: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.weatherDays = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default fetchWeatherDays.reducer;
