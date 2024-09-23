const ToggleUnitButton = ({ toggleUnit, unit }) => {
  return (
    <button onClick={toggleUnit}>
      {unit === "metric" ? "Switch to Fahrenheit" : "Switch to Celsius"}
    </button>
  );
};

export default ToggleUnitButton;
