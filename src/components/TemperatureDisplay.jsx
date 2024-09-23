const TemperatureDisplay = ({ temp, unit }) => {
  const convertedTemp = unit === "metric" ? temp : (temp * 9) / 5 + 32;
  return (
    <h2 className="xxs:text-xl xs:text-4xl sm:text-5xl md:text-6xl font-semibold">
      {Math.round(convertedTemp)}° {unit === "metric" ? "C" : "F"}
    </h2>
  );
};

export default TemperatureDisplay;
