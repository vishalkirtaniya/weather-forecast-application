const WeatherCondition = ({ condition }) => {
  return (
    <div className="weather-condition h-full  w-full flex items-center">
      <img
        src={"/assets/icons/cloudy-night-1.svg"}
        height={30}
        width={30}
        alt="Weather Icon"
      />
      <p className="px-1 xxs:text-sm md:text-md font-semibold">{condition}</p>
    </div>
  );
};

export default WeatherCondition;
