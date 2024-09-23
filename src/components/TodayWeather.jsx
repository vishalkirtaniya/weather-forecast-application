// import Image from "next/image"; // Ensure Image is imported if using Next.js
import CityName from "./CityName";
import WeatherCondition from "./WeatherCondition";
import TemperatureDisplay from "./TemperatureDisplay"; // Assuming you have this component
import SearchBox from "./SearchBox";
import WeatherImage from "./weatherImage";

const TodayWeather = ({
  city,
  search,
  cityname,
  name,
  image,
  temp,
  unit,
  day,
  timezoneOffset,
  description,
  rain,
  gif,
}) => {
  const dayOfWeek = new Date(day * 1000).toLocaleString("en-US", {
    weekday: "long",
  });

  const getLocalTime = (timezoneOffset) => {
    const utcTime =
      new Date().getTime() + new Date().getTimezoneOffset() * 60000;
    const localTime = new Date(utcTime + timezoneOffset * 1000);
    return localTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };
  return (
    <>
      <div className="todayWeather h-[72%] w-full flex flex-col justify-between items-start">
        <SearchBox inputRef={city} handleSearch={search} />

        <CityName name={name} />
        <img src={image} height={200} width={200} alt="Main Weather Icon" />

        {/* Display the current temperature */}
        <div>
          <TemperatureDisplay temp={temp} unit={unit} />{" "}
          {/* Assuming temperature in Celsius */}
        </div>

        {/* Example hardcoded date, but you can replace it with dynamic data */}
        <h3 className="opacity-80 text-xl">
          {dayOfWeek},{" "}
          <b className="opacity-50">{getLocalTime(timezoneOffset)}</b>
        </h3>

        <div className="h-[2px] w-full bg-customOffWhite"></div>

        {/* Current weather description and additional info */}
        <div className="h-[15%] w-full flex flex-col justify-evenly">
          <div className="h-[20px] w-full flex items-center">
            <WeatherCondition condition={description} />
          </div>

          <div className="h-[20px] w-full flex items-center">
            <img
              src={"/assets/icons/rainy-5.svg"}
              height={30}
              width={30}
              alt="Rain Icon"
            />
            <h3 className="px-1 text-sm font-semibold">
              Weather - {rain} {/* Safely access currentWeather */}
            </h3>
          </div>
        </div>
      </div>

      <div className="location-showcase h-[100px] w-full rounded-2xl bg-customOffWhite flex justify-center items-center overflow-hidden">
        <WeatherImage image={gif} cityname={cityname} />
      </div>
    </>
  );
};

export default TodayWeather;
