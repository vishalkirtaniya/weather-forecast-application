import ForecastCard from "./ForecastCard";

const FiveDayForecast = ({ forecastData, unit }) => {
  const getDayOfWeek = (unixTime) => {
    const date = new Date(unixTime * 1000);
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return daysOfWeek[date.getDay()];
  };

  return (
    <div className="forecast-container">
      {forecastData.map((day, index) => (
        <ForecastCard
          key={index}
          day={day}
          unit={unit}
          dayOfWeek={getDayOfWeek(day.dt)} // Pass the day of the week here
        />
      ))}
    </div>
  );
};

export default FiveDayForecast;
