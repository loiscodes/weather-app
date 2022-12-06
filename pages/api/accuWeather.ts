import { createAsyncThunk } from "@reduxjs/toolkit";
import { accuweatherURL } from "@utils/constants";
export const fetchSuggestions = createAsyncThunk(
  "get/suggestions",
  async (city: string) => {
    try {
      const response = await fetch(
        `${accuweatherURL}locations/v1/cities/autocomplete?apikey=14Ej3PUzC7QalyJPQ6pSfpGkGM483Fui&q=${city}`
      );
      return await response.json();
    } catch (error: any) {
      console.error(error);
      throw new Error(error.message);
    }
  }
);

export const fetchCurrentForcast = createAsyncThunk(
  "get/current_forcast",
  async (location_key: string) => {
    try {
      const response = await fetch(
        `${accuweatherURL}currentconditions/v1/${location_key}?apikey=${process.env.NEXT_PUBLIC_ACCUWEATHER_API_KEY}`
      );
      return await response.json();
    } catch (error: any) {
      console.error(error);
      throw new Error(error.message);
    }
  }
);

export const fetchTwelveHourlyForcast = createAsyncThunk(
  "get/hourly_forcast",
  async (location_key: string) => {
    try {
      const response = await fetch(
        `${accuweatherURL}forecasts/v1/hourly/12hour/${location_key}?apikey=${process.env.NEXT_PUBLIC_ACCUWEATHER_API_KEY}`
      );
      return await response.json();
    } catch (error: any) {
      console.error(error);
      throw new Error(error.message);
    }
  }
);

export const fetchFiveDayForcast = createAsyncThunk(
  "get/daily_forcast",
  async (location_key: string) => {
    try {
      const response = await fetch(
        `${accuweatherURL}forecasts/v1/daily/5day/${location_key}?apikey=${process.env.NEXT_PUBLIC_ACCUWEATHER_API_KEY}`
      );
      return await response.json();
    } catch (error: any) {
      console.error(error);
      throw new Error(error.message);
    }
  }
);
