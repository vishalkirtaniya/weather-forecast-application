const ForecastCard = ({ day, unit, icon }) => {
  const dayOfWeek = new Date(day.dt * 1000).toLocaleString("en-US", {
    weekday: "long",
  });
  const highTemp =
    unit === "metric" ? day.main.temp_max : (day.main.temp_max * 9) / 5 + 32;
  const lowTemp =
    unit === "metric" ? day.main.temp_min : (day.main.temp_min * 9) / 5 + 32;

  return (
    <div className="h-full w-1/6 rounded-lg shadow-md shadow-customOffWhite bg-customWhite flex flex-col items-center justify-between  relative">
      <h3 className="xxs:text-[10px] sm:text-sm md:text-md font-semibold mt-1">
        {dayOfWeek}
      </h3>
      <img
        src={icon}
        alt="alt icon"
        className="xxs:h-[50px] xxs:w-[50px] md:h-[70px] md:w-[70px] absolute top-[18px]"
      />
      <h3 className="xxs:text-xs md:text-sm text-black font-semibold mb-1">
        {Math.round(highTemp)}°
        <span className="opacity-40 font-semibold ">
          {Math.round(lowTemp)}°
        </span>
      </h3>
    </div>
  );
};

export default ForecastCard;
