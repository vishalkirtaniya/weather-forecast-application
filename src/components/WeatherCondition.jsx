// import Image from "next/image";
const WeatherCondition = ({ condition }) => {
  return (
    <div className="weather-condition h-full  w-full flex items-center">
      <img
        src={"/assets/icons/cloudy-night-1.svg"}
        height={30}
        width={30}
        alt="Weather Icon"
      />
      <p className="px-1 text-sm font-semibold">{condition}</p>
    </div>
  );
};

export default WeatherCondition;
