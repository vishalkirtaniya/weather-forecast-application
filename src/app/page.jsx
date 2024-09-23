"use client";

import {
  fetchWeatherData,
  fetchFiveDayForecast,
  allIcons,
  allGifs,
} from "./utils/weatherApi";
import { useState, useEffect, useRef } from "react";
import ForecastCard from "@/components/ForecastCard";
import Coordinates from "@/components/Coordinates";
import Humidity from "@/components/Humidity";
import SunInfo from "@/components/SunInfo";
import TodayWeather from "@/components/TodayWeather";
import WindSpeed from "@/components/WindSpeed";
import Visibility from "@/components/Visibility";
import SeaAndGround from "@/components/SeaAndGround";
import ToggleUnitButton from "@/components/ToggleUnitButton";

const Home = () => {
  const [weatherData, setWeatherData] = useState(null); // Initialized to null instead of false
  const [forecastData, setForecastData] = useState([]);
  const [city, setCity] = useState("New Delhi");
  const [unit, setUnit] = useState("metric"); // 'metric' for Celsius, 'imperial' for Fahrenheit
  const [error, setError] = useState(null);
  const inputRef = useRef();

  // Fetch current weather and forecast
  const getWeather = async (selectedCity) => {
    try {
      const weather = await fetchWeatherData(selectedCity);
      const forecast = await fetchFiveDayForecast(selectedCity);
      setWeatherData(weather);
      setForecastData(
        forecast.list.filter((_, index) => [0, 8, 16, 24, 32].includes(index))
      );
      setError(null);
    } catch (err) {
      setError("City not found or API request failed. Try again.");
      setWeatherData(null);
      setForecastData(null);
    }
  };

  // Run on mount to fetch default city weather
  useEffect(() => {
    getWeather(city);
  }, [city]);

  // Handle unit conversion
  const handleToggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === "metric" ? "imperial" : "metric"));
  };

  return (
    <div className="h-[100svh] w-full bg-customGrey flex  justify-center items-center">
      <div className="xxs:h-[810px] lg:h-[700px] xxs:w-[97%] lg:w-[1000px] shadow-sm shadow-customGrey rounded-[2.2rem] flex xxs:flex-col md:flex-row overflow-hidden xxs:scale-[80%] md:scale-100">
        {error ? (
          <div className="text-red-500">Error: {error}</div>
        ) : weatherData ? ( // Check if weatherData is available before rendering
          <>
            <div className="xxs:h-[30%] xs:h-[40%] xxs:w-full md:h-full md:w-[30%] bg-customWhite xxs:p-5 md:p-11 flex flex-col justify-between">
              <TodayWeather
                city={inputRef}
                search={() => getWeather(inputRef.current.value)}
                cityname={weatherData.name}
                image={allIcons[weatherData.weather[0].icon]}
                gif={allGifs[weatherData.weather[0].icon]}
                temp={weatherData.main.temp}
                unit={unit}
                day={weatherData.dt}
                timezoneOffset={weatherData.timezone}
                description={weatherData.weather[0].description}
                rain={weatherData.weather[0].main}
              />
            </div>
            <div className="xxs:h-[70%] xxs:w-full md:h-full md:w-[70%] bg-customOffWhite xxs:p-5 md:p-11 flex flex-col justify-between">
              <div className="h-[10%] w-full flex justify-between">
                <div className="h-full w-full flex items-center justify-between ">
                  <div className="h-[50%] w-[70px] relative overflow-hidden">
                    <h3 className="xxs:text-sm md:text-base text-left font-semibold opacity-80">
                      Week
                    </h3>
                  </div>

                  <ToggleUnitButton toggleUnit={handleToggleUnit} unit={unit} />
                </div>
              </div>
              <div className="h-[18%] w-full flex justify-between">
                {forecastData.map((day, index) => (
                  <ForecastCard
                    key={index}
                    day={day}
                    icon={allIcons[day.weather[0].icon]}
                    unit={unit}
                  />
                ))}
              </div>
              <div className="h-[60%] w-full flex flex-col justify-between">
                <h1 className="xxs:text-sm md:text-base text-left font-semibold opacity-80">
                  Today's Highlights
                </h1>
                <div className="h-[90%] w-full flex flex-col justify-between">
                  <div className="h-[46%] w-full flex justify-between">
                    <div className="h-full w-[30%] rounded-2xl bg-customWhite p-3">
                      <Coordinates
                        longitude={weatherData.coord.lon} // Fixed key for longitude
                        latitude={weatherData.coord.lat}
                      />
                    </div>
                    <div className="h-full w-[30%] rounded-2xl bg-customWhite p-3">
                      <WindSpeed windSpeed={weatherData.wind.speed} />
                    </div>
                    <div className="h-full w-[30%] rounded-2xl bg-customWhite p-3">
                      <SunInfo
                        sunrise={weatherData.sys.sunrise}
                        sunset={weatherData.sys.sunset}
                      />
                    </div>
                  </div>
                  <div className="h-[46%] w-full flex justify-between">
                    <div className="h-full w-[30%] rounded-2xl bg-customWhite p-3">
                      <Humidity humidity={weatherData.main.humidity} />
                    </div>
                    <div className="h-full w-[30%] rounded-2xl bg-customWhite p-3">
                      <Visibility visibility={weatherData.visibility} />
                    </div>
                    <div className="h-full w-[30%] rounded-2xl bg-customWhite p-3">
                      <SeaAndGround
                        sea={weatherData.main.sea_level}
                        ground={weatherData.main.grnd_level}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center text-center text-gray-500">
            Loading weather data...
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
