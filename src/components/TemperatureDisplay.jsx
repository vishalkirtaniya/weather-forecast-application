const TemperatureDisplay = ({ temp, unit }) => {
  const convertedTemp = unit === "metric" ? temp : (temp * 9) / 5 + 32;
  return (
    <h2 className="text-6xl font-semibold">
      {Math.round(convertedTemp)}° {unit === "metric" ? "C" : "F"}
    </h2>
  );
};

export default TemperatureDisplay;
