import Image from "next/image";
import WeatherCondition from "./WeatherCondition";
import TemperatureDisplay from "./TemperatureDisplay";
import SearchBox from "./SearchBox";
import WeatherImage from "./weatherImage";

const TodayWeather = ({
  city,
  search,
  cityname,
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
      <div className="todayWeather h-[100%] w-full flex flex-col justify-between items-start">
        <SearchBox inputRef={city} handleSearch={search} />
        <div className="xxs:h-full  md:h-full w-full flex xxs:flex-row md:flex-col ">
          <div className="xxs:h-full md:h-1/3 xxs:w-1/3 md:w-full flex items-center">
            <Image
              src={image}
              height={200}
              width={200}
              alt="Main Weather Icon"
            />
          </div>
          <div className="xxs:h-full md:h-2/3 xxs:w-2/3 md:w-full flex flex-col justify-between ">
            <TemperatureDisplay temp={temp} unit={unit} />{" "}
            <h3 className="opacity-80 xxs:text-md xs:text-lg sm:text-xl">
              {dayOfWeek},{" "}
              <b className="opacity-50">{getLocalTime(timezoneOffset)}</b>
            </h3>
            <div className="h-[2px] w-full bg-customOffWhite"></div>
            <div className="xxs:h-[50px] md:h-[20%] w-full flex flex-col justify-center xxs:gap-1 md:gap-2 ">
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
                <h3 className="px-1 xxs:text-sm md:text-md font-semibold">
                  Weather - {rain}
                </h3>
              </div>
            </div>
            <div className="location-showcase xxs:h-[40px] xs:h-[50px] sm:h-[60px] md:h-[100px] xxs:w-[65%] sm:w-[50%] md:w-full rounded-2xl bg-customOffWhite flex justify-center items-center overflow-hidden">
              <WeatherImage image={gif} cityname={cityname} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodayWeather;
