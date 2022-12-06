import { createSlice } from "@reduxjs/toolkit";
import { Suggestions, WeatherState } from "@models/weather.models";
import { fetchCurrentForcast, fetchFiveDayForcast, fetchSuggestions, fetchTwelveHourlyForcast } from "@pages/api/accuWeather";
import { formatLocationSuggestions } from "@utils/helpers";

const initialState: WeatherState = {
    search: "",
    suggestions: [],
    status: 'idle',
    error: "",
    today: [],
    hourly: [],
    daily: null
};

const mainSlice = createSlice({
  name: "suggestions",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload
    },
    logError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSuggestions.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSuggestions.fulfilled, (state, action:any) => {
        
        if (action.payload){
        state.status = "succeeded";
        state.suggestions = action.payload.map((item: Suggestions, index: number) => ({ ...item, Name: formatLocationSuggestions(item), label: index.toString()}))
      }})
      .addCase(fetchSuggestions.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "";
      })
      .addCase(fetchCurrentForcast.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCurrentForcast.fulfilled, (state, action:any) => {
        if (action.payload){
        state.status = "succeeded";
        state.today = action.payload
      }})
      .addCase(fetchCurrentForcast.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "";
      })
      .addCase(fetchTwelveHourlyForcast.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTwelveHourlyForcast.fulfilled, (state, action: any) => {
        if (action.payload){
        state.status = "succeeded";
        state.hourly = action.payload
      }})
      .addCase(fetchTwelveHourlyForcast.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "";
      })
      .addCase(fetchFiveDayForcast.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFiveDayForcast.fulfilled, (state, action: any) => {
        if (action.payload){
        state.status = "succeeded";
        state.daily = action.payload
      }})
      .addCase(fetchFiveDayForcast.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "";
      });
  },
});

export const { setSearch, logError } = mainSlice.actions;
export default mainSlice.reducer;
