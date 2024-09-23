import axios from "axios";
const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const allIcons = {
  "01d": "/assets/icons/day.svg",
  "01n": "/assets/icons/night.svg",
  "02d": "/assets/icons/cloudy-day-1.svg",
  "02n": "/assets/icons/cloudy-night-1.svg",
  "03d": "/assets/icons/cloudy-day-2.svg",
  "03n": "/assets/icons/cloudy.svg",
  "04d": "/assets/icons/cloudy-day-3.svg",
  "04n": "/assets/icons/cloudy.svg",
  "09d": "/assets/icons/rainy-1.svg",
  "09n": "/assets/icons/rainy-4.svg",
  "10d": "/assets/icons/rainy-5.svg",
  "10n": "/assets/icons/rainy-5.svg",
  "11d": "/assets/icons/thunder.svg",
  "11n": "/assets/icons/thunder.svg",
  "13n": "/assets/icons/snowy-3.svg",
  "13n": "/assets/icons/snowy-5.svg",
  "50d": "/assets/icons/cloudy.svg",
  "50n": "/assets/icons/cloudy-night-2.svg",
};

export const allGifs = {
  "01d": "/assets/gifs/sun.webp",
  "01n": "/assets/gifs/night.webp",
  "02d": "/assets/gifs/clouds.webp",
  "02n": "/assets/gifs/cloudy-night.webp",
  "03d": "/assets/gifs/clouds.webp",
  "03n": "/assets/gifs/cloudy-night.webp",
  "04d": "/assets/gifs/clouds.webp",
  "04n": "/assets/gifs/cloudy-night.webp",
  "09d": "/assets/gifs/rain-1.webp",
  "09n": "/assets/gifs/rain.webp",
  "10d": "/assets/gifs/rain-1.webp",
  "10n": "/assets/gifs/rain.webp",
  "11d": "/assets/gifs/thunder.webp",
  "11n": "/assets/gifs/thunder.webp",
  "13n": "/assets/gifs/snow.webp",
  "13n": "/assets/gifs/snow.webp",
  "50d": "/assets/gifs/clouds.webp",
  "50n": "/assets/gifs/cloudy-night.webp",
};

export const fetchWeatherData = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        units: "metric", // Celsius by default
        appid: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching current weather data:", error);
    throw error;
  }
};

export const fetchFiveDayForecast = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        q: city,
        units: "metric",
        appid: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching 5-day forecast:", error);
    throw error;
  }
};
